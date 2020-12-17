#!/usr/bin/env bash

cd docs;
yarn && yarn --dev;
npx gatsby build --prefix-paths && npx gh-pages -d public;