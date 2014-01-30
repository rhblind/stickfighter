# -*- coding: utf-8 -*-

from logger import BaseLogger


class UtilslibLogger(BaseLogger):
    logger_name = "utilslib"

# Global logger
logger = UtilslibLogger.get_logger()
