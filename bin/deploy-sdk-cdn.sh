#!/usr/bin/env bash

# For repo maintainers only. This publishes
# the latest version of the SDK

DIST_DIR="./dist"
CURRENT_VERSION=$(cat package.json | jq '.version' --raw-output)

echo "Deploying $CURRENT_VERSION bundles to CDN"

pushd $DIST_DIR
aws s3 cp --acl public-read . s3://loom-embed/loom-embed/v$CURRENT_VERSION/ --recursive
popd

echo "Uploaded!"
