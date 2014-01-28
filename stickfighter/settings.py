"""
Django settings for stickfight project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# Add to PYTHON_PATH
sys.path.insert(0, BASE_DIR)

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "7v5dz*b*#ikf_&q2#hr8iv!8gqaf$zjn*wdg3w#2%973214^y&"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = []
SITE_ID = 1

# We need to define a default user id for anonymous users
ANONYMOUS_USER_ID = -1

# Application definition

INSTALLED_APPS = (
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.sites",
    "django.contrib.staticfiles",
    # 3rd party apps
    "allauth",              # http://www.sarahhagstrom.com/2013/09/the-missing-django-allauth-tutorial/
    "allauth.account",
    "allauth.socialaccount",
    "allauth.socialaccount.providers.google",
    "django_extensions",
    "guardian",
    "sitetree",
    "south",
    "tastypie",
    # "allauth.socialaccount.providers.openid",
    # "allauth.socialaccount.providers.facebook",
    # local apps
    "apps.server",
    "apps.utilslib",
    "apps.webapp"
)

MIDDLEWARE_CLASSES = (
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
)

TEMPLATE_CONTEXT_PROCESSORS = (
    "django.contrib.auth.context_processors.auth",
    "django.core.context_processors.request",
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    "django.core.context_processors.static",
    "django.core.context_processors.tz",
    "django.contrib.messages.context_processors.messages",

    # django-allauth context processors
    "allauth.account.context_processors.account",
    "allauth.socialaccount.context_processors.socialaccount"
)

AUTHENTICATION_BACKENDS = (
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend"
)

ROOT_URLCONF = "stickfight.urls"

WSGI_APPLICATION = "stickfight.wsgi.application"

LOGIN_REDIRECT_URL = "/#/"
SOCIALACCOUNT_QUERY_EMAIL = True

# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "stickfight",
        "USER": "rolf",
        # "PASSWORD": "mypassword",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "apps", "webapp", "static"),
)

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, "static")
STATIC_URL = "/static/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"
