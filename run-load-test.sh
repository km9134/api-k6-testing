#!/bin/bash
docker-compose up -d influxdb grafana

echo "Load testing with Grafana dashboard http://localhost:3000/d/k6/k6-load-testing-results"

docker-compose run --rm -v /Users/kylemoffett/api-k6-testing/functions:/functions -i k6  run /scripts/api-test.js