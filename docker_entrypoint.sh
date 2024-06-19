#!/bin/bash

########################################
# Nativation to verify the nginx folders
########################################
echo ""
echo ""
echo "*********************"
echo "    Navigation"
echo "*********************"
whoami
nginx stop
pwd
ls
cd /app
ls
cd ..
more ./generate_env-config.sh

########################################
# Create env-config.js file in the public folder 
# of the ngnix server, based on the environment variables
# given by the docker run -e parameter
# - VUE_APP_AUTH_URL
# - VUR_APP_API_URL
########################################
echo ""
echo ""
echo "*********************"
echo "Get ip address"
echo "*********************"
ip addr show
echo ""
echo ""
echo "*********************"
echo "Create ./app/env-config.js"
echo "*******Exists?*********"
cd app
ls
echo "*******Delete********"
rm env-config.js
echo "*******Deleted?********"
ls
"/bin/sh" ../generate_env-config.sh > ./env-config.js
echo "*******Generated?******"
ls
########################################
# Create env-config.js file in the public folder 
# of the ngnix server
########################################
echo ""
echo ""
echo "*********************"
echo "Content ./app/env-config.js"
echo "*********************"
cd /app
more ./env-config.js

########################################
# Start ngnix server
# The configuration for the server contains also 
# 'daemon off;'')
# to replace the start command for the
# container image.
# CMD ["nginx", "-g", "daemon off;"]
########################################
echo ""
echo ""
echo "*********************"
echo "Start server"
echo "*********************"
nginx