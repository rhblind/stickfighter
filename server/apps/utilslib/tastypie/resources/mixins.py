# -*- coding: utf-8 -*-


from django.conf import settings
from django.db.models.fields.files import FileField

from apps.utilslib import logger


class EasyThumbnailModelResourceMixin(object):
    """
    ModelResource mixin which looks for a FileField on the
    model and see tries to look up thumbnails for it.
    """

    @staticmethod
    def _get_targets(target):
        """
        Implementation of easy_thumbnail ``_get_targets()`` to
        avoid having easy_thumbnail as a dependency for ``mootautils``
        """
        target_bits = target.split(".")
        for i in xrange(len(target_bits)):
            yield ".".join(target_bits[:i + 1])

    def get_thumbnails(self, bundle):
        """
        Returns a dict with ``alias`` and thumbnail url or an
        empty dicts if something goes wrong.
        """

        aliases = getattr(settings, "THUMBNAIL_ALIASES")

        for field in bundle.obj._meta.fields:
            if isinstance(field, FileField):
                target = "{app_label}.{object_name}.{field}".format(
                    app_label=bundle.obj._meta.app_label,
                    object_name=bundle.obj._meta.object_name,
                    field=field.name
                )

                lookups = self._get_targets(target)

                for lookup in lookups:
                    if lookup in aliases.iterkeys():
                        config_alias = aliases[lookup]
                        fieldfile = getattr(bundle.obj, field.name)
                        try:
                            thumbnailers = dict(
                                (k, fieldfile.get_thumbnail(opt, save=True, generate=True))
                                for k, opt in config_alias.iteritems()
                            )
                            return dict(
                                (alias, getattr(thumbfile, "url", "path"))  # Get url for remote storages, or path for local
                                for alias, thumbfile in thumbnailers.iteritems() if thumbfile is not None
                            )
                        except:
                            logger.warning(
                                "Caught exception while trying to retrieve tumbnails for %(obj_instance)r (%(pk)d)" % {
                                    "obj_instance": bundle.obj,
                                    "pk": bundle.obj.pk
                                }, exc_info=True, extra={"stack": True}
                            )
                            break
        return {}

    def dehydrate(self, bundle):
        bundle = super(EasyThumbnailModelResourceMixin, self).dehydrate(bundle)
        bundle.data["thumbnails"] = self.get_thumbnails(bundle)
        return bundle
