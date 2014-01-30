# -*- coding: utf-8 -*-

import logging
from logging import config


class BaseLogger(object):
    """
    A general purpose logger class.
    """

    logger = None
    logger_name = __file__

    @classmethod
    def get_logger(cls):
        if cls.logger is None:
            logging.config.dictConfig({
                "version": 1,
                "disable_existing_loggers": False,
                "formatters": {
                    "verbose": {
                        "format": "%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s"
                    },
                },
                "handlers": {
                    "console": {
                        "level": "DEBUG",
                        "class": "logging.StreamHandler",
                        "formatter": "verbose"
                    },
                },
                "loggers": {
                    "debugutils": {
                        "level": "DEBUG",
                        "handlers": ["console"],
                        "propagate": False
                    }
                }
            })
            cls.logger = logging.getLogger(cls.logger_name)

        return cls.logger
