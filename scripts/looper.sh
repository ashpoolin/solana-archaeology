#!/bin/bash

input_file=$1
while IFS= read -r associated_token_address;
do
    # echo $associated_token_address
    ./getSignaturesForAddress.sh "${associated_token_address}";
done < $input_file
