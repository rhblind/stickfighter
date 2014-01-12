# -*- coding: utf-8 -*-

from django.conf import settings
from django.contrib.auth.models import AnonymousUser
from django.core.exceptions import ImproperlyConfigured
from tastypie.compat import User
from tastypie.http import HttpUnauthorized
from tastypie.authentication import SessionAuthentication


class GuardianSessionAuthentication(SessionAuthentication):
    """
    Session authentication compatible with the Guardian AnonymousUser.
    Public objects can be given read permission to this user and it
    will authenticate through this class.
    """

    def is_authenticated(self, request, **kwargs):
        """
        Identifies if the request is performed by an unauthenticated
        (anonymous) user, and set the request user to the Guardian provided
        AnonymousUser through ApiKeyAuthentication mechanisms if so.

        Calls super to the regular SessionAuthentication for further inspection.
        """
        if isinstance(request.user, AnonymousUser):
            try:
                anonymous_id = getattr(settings, "ANONYMOUS_USER_ID")
                user = User.objects.get(pk=anonymous_id)

                if not (user.username and user.api_key.key):
                    return HttpUnauthorized()

                if not self.check_active(user):
                    return False

                key_auth_check = self.get_key(user, user.api_key.key)
                if key_auth_check and not isinstance(key_auth_check, HttpUnauthorized):
                    request.user = user

            except AttributeError:
                raise ImproperlyConfigured(
                    "'ANONYMOUS_USER_ID' must be configured in settings.py "
                    "in order to use %s" % self.__class__.__name__
                )
            except (User.DoesNotExist, User.MultipleObjectsReturned):
                return HttpUnauthorized()

        return super(GuardianSessionAuthentication, self).is_authenticated(request, **kwargs)

    @staticmethod
    def get_key(user, api_key):
        """
        Attempts to find the API key for the user. Uses ``ApiKey`` by default
        but can be overridden.
        """
        from tastypie.models import ApiKey

        try:
            ApiKey.objects.get(user=user, key=api_key)
        except ApiKey.DoesNotExist:
            return HttpUnauthorized()

        return True
