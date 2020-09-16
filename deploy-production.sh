yarn build

if [ -d "build" ]; then
  cd build
  aws --profile steaks s3 cp . s3://steaks-finance --recursive --acl=public-read
  aws --profile steaks cloudfront create-invalidation --distribution-id E3T7UPTRA0ANBU --paths /index.html
fi
