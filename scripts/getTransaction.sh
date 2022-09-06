#!/bin/bash

input_tx=$1;

curl https://ssc-dao.genesysgo.net/ -X POST -H "Content-Type: application/json" -d "
  {
    \"jsonrpc\": \"2.0\",
    \"id\": 1,
    \"method\": \"getTransaction\",
    \"params\": [
      \"${input_tx}\",
      \"json\"
    ]
  }
" #| jq . | in2csv --format json --key result > "${input_tx}.csv"