#!/bin/sh

echo "Waiting for Kong to be ready..."
sleep 10

echo "Configuring Kong services and routes..."

# Services
curl -s -X POST http://kong:8001/services \
  --data name=user-service \
  --data url=http://user-service:80

curl -s -X POST http://kong:8001/services \
  --data name=product-service \
  --data url=http://product-service:80

curl -s -X POST http://kong:8001/services \
  --data name=order-service \
  --data url=http://order-service:80

# Routes
curl -s -X POST http://kong:8001/routes \
  --data service.name=user-service \
  --data paths[]=/api/users

curl -s -X POST http://kong:8001/routes \
  --data service.name=product-service \
  --data paths[]=/api/products

curl -s -X POST http://kong:8001/routes \
  --data service.name=order-service \
  --data paths[]=/api/orders

echo "Kong configuration done."