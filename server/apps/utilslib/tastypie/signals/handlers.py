# -*- coding: utf-8 -*-

from django.db.models import Q
from django.contrib.contenttypes.models import ContentType

from guardian.shortcuts import assign_perm
from guardian.models import UserObjectPermission
from guardian.models import GroupObjectPermission

from apps.utilslib import logger


#
# Signal handlers
#

def remove_obj_permissions(sender, instance, **kwargs):
    """
    In order to clean up unused permissions, connect this handler to django's `pre_delete()
    <https://docs.djangoproject.com/en/dev/ref/signals/#pre-delete>`_ signal in models.py.

    .. warning::

        This code is quite expensive as it runs on every deletion in the
        *entire* application. Try to figure out a better method to only
        listen to instances on models defined in the `INSTALLED_APPS`,
        in other words, only defined instances, not inherited!
    """

    # Do not listen to UserObjectPermission and GroupObjectPermission
    # instances. They should not have content type relations to itself.
    if not isinstance(instance, (UserObjectPermission, GroupObjectPermission)):
        lookup = Q(content_type=ContentType.objects.get_for_model(instance), object_pk=instance.pk)

        user_permissions = UserObjectPermission.objects.filter(lookup)
        if user_permissions.count():
            # Log removal of user permissions if any
            permission_set = set()
            for perm in user_permissions:
                permission_set.add(" ".join((repr(perm.user), perm.permission.name)))

            user_permissions.delete()
            logger.debug(
                "Removed following user permissions for deleted object %(klass)s <%(object)s: %(pk)d>: "
                "%(permission_set)s." % {
                    "klass": instance.__class__,
                    "object": instance,
                    "pk": instance.pk,
                    "permission_set": ", ".join(permission_set)
                }
            )

        group_permissions = GroupObjectPermission.objects.filter(lookup)
        if group_permissions.count():
            # Log removal of group permissions if any
            permission_set = set()
            for perm in group_permissions:
                permission_set.add(" ".join((repr(perm.group), perm.permission.name)))

            group_permissions.delete()
            logger.debug(
                "Removed following group permissions for deleted object %(klass)s <%(object)s: %(pk)d>: "
                "%(permission_set)s." % {
                    "klass": instance.__class__,
                    "object": instance,
                    "pk": instance.pk,
                    "permission_set": ", ".join(permission_set)
                }
            )


def set_tastypie_obj_create_permissions(sender, bundle, **kwargs):
    """
    Grant all row level permissions for creator (the authenticated user).

    .. note::

        Permissions will only be set for objects created via tastypie API
        GuardianModelResource() classes.

    """

    klass = bundle.obj.__class__
    permission_set = set()

    # Build a list of permissions which should be granted
    for action in ("view", "add", "change", "delete"):
        perm = "%(action)s_%(module_name)s" % {
            "action": action, "module_name": klass._meta.module_name
        }
        object_permission = assign_perm(perm=perm, user_or_group=bundle.request.user, obj=bundle.obj)
        permission_set.add(object_permission.permission.name)

    # Create a nice debug message for the logger
    logger.debug(
        "%(klass)s <%(object)s: %(pk)d>: %(user)s was granted the following permission set: "
        "%(permission_set)s." % {
            "klass": klass,
            "object": bundle.obj,
            "pk": bundle.obj.pk,
            "user": repr(bundle.request.user),
            "permission_set": ", ".join(permission_set)
        }
    )
