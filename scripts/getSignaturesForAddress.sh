#!/bin/bash

address=$1
tx_limit=1000

curl https://ssc-dao.genesysgo.net/ -X POST -H "Content-Type: application/json" -d "
  {
    \"jsonrpc\": \"2.0\",
    \"id\": 1,
    \"method\": \"getSignaturesForAddress\",
    \"params\": [
      \"${address}\",
      { \"limit\": ${tx_limit} }
    ]
  }
" | jq . | in2csv --format json --key result > "${address}.csv"