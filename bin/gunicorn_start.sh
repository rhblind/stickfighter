#!/bin/bash
#
# Copied from
# https://gist.github.com/postrational/5747293#file-gunicorn_start-bash
#


NAME="mootadb"                                          # Name of the application
DJANGODIR=/home/ubuntu/site/mootadb                     # Django project directory
SOCKFILE=/var/run/gunicorn/mootadb.socket               # we will communicte using this unix socket
USER=www-data                                           # the user to run as
GROUP=www-data                                          # the group to run as
NUM_WORKERS=3                                           # how many worker processes should Gunicorn spawn
DJANGO_SETTINGS_MODULE=mootadb.settings                 # which settings file should Django use
DJANGO_WSGI_MODULE=mootadb.wsgi                         # WSGI module name

echo "Starting ${NAME} as `whoami`"

# Activate the virtual environment
cd ${DJANGODIR}
source ../env/bin/activate
export DJANGO_SETTINGS_MODULE=${DJANGO_SETTINGS_MODULE}
export PYTHONPATH=${DJANGODIR}:${PYTHONPATH}

# Create the run directory if it doesn't exist
RUNDIR=$(dirname ${SOCKFILE})
test -d ${RUNDIR} || mkdir -p ${RUNDIR}

# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec ../env/bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
  --name ${NAME} \
  --workers ${NUM_WORKERS} \
  --user=${USER} --group=${GROUP} \
  --log-level=debug \
  --bind=unix:${SOCKFILE}

