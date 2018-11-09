#!/bin/sh

script_dir=$(dirname "$0")
. "$script_dir/config.sh"
cd "$script_dir/.."

rm -rf build
npm ci
npm run build
aws s3 sync build/ "$backet" --region "$region" --delete

