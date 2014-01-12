# -*- coding: utf-8 -*-
#
# String utilities
#


def pluralize_string(num=0, text=""):
    """
    Returns a "pluralized string", by concating `num` and `text`
    and appending "s" if it's not ending with "s"....
    This could be better of course...
    """
    return "%d %s%s" % (num, text, "s"[num == 1:])
