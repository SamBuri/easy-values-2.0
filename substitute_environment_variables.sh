#!/bin/sh
ROOT_DIR=./dist
# Replace env vars in files served by NGINX
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html $ROOT_DIR/precache-manifest*.js;
do
  sed -i 's|VUE_APP_API_PATH_PLACEHOLDER|'${VUE_APP_API_PATH}'|g' $file
  sed -i 's|VUE_APP_API_AUTH_PATH_PLACEHOLDER|'${VUE_APP_API_AUTH_PATH}'|g' $file
  # Your other variables here...
done

# Starting NGINX
nginx -g 'daemon off;'