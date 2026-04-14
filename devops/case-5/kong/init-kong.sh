#!/bin/sh
set -e

echo "Waiting for Kong Admin API..."

until curl -s http://kong:8001 > /dev/null; do
  sleep 2
done

echo "Configuring Kong services and routes..."

# Services
curl -s -X PUT http://kong:8001/services/user-service \
  --data url=http://user-service:80

curl -s -X PUT http://kong:8001/services/product-service \
  --data url=http://product-service:80

curl -s -X PUT http://kong:8001/services/order-service \
  --data url=http://order-service:80
 
# Routes
curl -s -X PUT http://kong:8001/services/user-service/routes/user-route \
  --data paths[]=/api/users \
  --data strip_path=false

curl -s -X PUT http://kong:8001/services/product-service/routes/product-route \
  --data paths[]=/api/products \
  --data strip_path=false

curl -s -X PUT http://kong:8001/services/order-service/routes/order-route \
  --data paths[]=/api/orders \
  --data strip_path=false
  
echo
echo "Kong configuration done."