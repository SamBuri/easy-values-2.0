#!/bin/bash

########################################
# Create a file based on the environment variables
# given by the dockerc run -e parameter
# - VUE_APP_AUTH_URL
# - VUE_APP_API_URL
########################################
cat <<EOF
window.VUE_APP_AUTH_URL="${VUE_APP_AUTH_URL}"
window.VUE_APP_API_URL="${VUE_APP_API_URL}"
EOF