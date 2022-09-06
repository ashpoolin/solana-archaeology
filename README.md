# solana-archaeology
Personal Accounting in Solana

### What
This is a set of scripts to help you generate token addresses, and pull your relevant tx signatures from the Solana blockchain. The script generates the the SPL token address, also known as the associated token address (ATA) for any number of wallets and corresponding SPL tokens. It does this locally, without a network connection. Then it dumps the output as comma-delimited text that you can use elsewhere. 

### System Requirements
1. Handling json and csv:
   ```
     sudo apt install jq csvkit
   ```
2. Running javascript/typescript => npm and node.js. Google it!

### Setup 
```
  npm install
```

### Configure
```javascript
  // --- EDIT index.ts --- //
  // ...
  // add the mint IDs for any SPL token that you bought/sold (note: include NFT mint IDs if you want them)
  const mintArray: string[] = [
    '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E', //soBTC
    '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk', // soETH 
    '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs', // ETH 
    'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt', // SRM 
    '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R', // RAY 
    'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So', // MSOL 
    'So11111111111111111111111111111111111111112', // WSOL 
    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC 
    'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', // USDT 
    '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj', // stSOL 
    '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm', // scnSOL
    'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y', // SHDW2
  ];
  
  const addressArray: string[] = [
    'BTtidA7Q7Uokk1CU1kwWWL2DKVAd5eoeUgXu6QUwAp6Q', // Your wallet address. Paste as many as you want. Example address shown --> not mine
  ];
// ...
```

### Compile
```bash
  tsc index.ts # or npx tsc, whatever
```

### Generate SPL Associated Token Addresses (ATA)
```bash
  node index.js > all_associated_token_addresses.csv
```


### Getting Signatures
1. One at a time. Call the script `scripts/getSignaturesForAddress.sh`
   ```
     chmod +x getSignaturesForAddress.sh
     ./getSignaturesForAddress.sh <wallet address or ATA>
   ```
2. OR, get sigs for many different addresses all at once. Paste all addresses and token accounts you want to search into a simple textfile `<list-of-all-searchable-ata>.txt`:
   ```
     chmod +x looper.sh
     ./looper.sh <list-of-all-searchable-ata>.txt
   ```

### Get Transaction Data
* Call the script `scripts/getTransaction.sh`
  ```
    chmod +x getTransaction.sh
    ./getTransaction.sh <transaction_id>
  ```


