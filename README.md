# README

This test suite is a basic template to run load testing on API's and analyse the results on Grafana

## Installation
You need to insure you have k6 downloaded [k6 documentation](https://k6.io/docs/get-started/installation/)

You need to insure you have Docker downloaded [Docker documentation](https://www.docker.com/products/docker-desktop/)


You need to also have Yarn installed, you can do this by running the below:
```bash
npm install --global yarn
```
And then checking your version with the following:
```bash
yarn --version
```

## Usage

In order to run you simply need to run

```bash
yarn test-api
```
And this will run the bash script
```bash
run-load-test.sh
```
Which contains the commands to run in a Docker image. 

If you want to see your results you can access it from here: http://localhost:3000/d/k6/k6-load-testing-results

This base project contains one ```POST``` request to create an entry. It
starts up to 20 looping VUs for 2m20s over 3 stages, with a gracefulRampDown of 30s and a gracefulStop of 30s