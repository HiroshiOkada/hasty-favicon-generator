#!/bin/sh

script_dir=$(dirname "$0")
. "$script_dir/config.sh"

aws s3 mb "$backet" --region "$region"

