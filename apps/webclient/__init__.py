# -*- coding: utf-8 -*-

import logging
from logging import config


class _WebClientLogger(object):
    """
    Global logger class for the webclient app.
    Unless configured in settings.py, this creates a console logger.
    """

    logger = None
    logger_name = "webclient"

    @classmethod
    def get_logger(cls):
        """
        Sets up a default DEBUG console logger if no other logger
        is configured.
        """
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


# Global logger
logger = _WebClientLogger.get_logger()
