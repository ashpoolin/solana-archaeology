import { PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);

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

async function findAssociatedTokenAddress(
    walletAddress: PublicKey,
    tokenMintAddress: PublicKey,
): Promise<PublicKey> {
    return (await PublicKey.findProgramAddress(
        [
            walletAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            tokenMintAddress.toBuffer(),
        ],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    ))[0];
}

console.log(`address,mint_id,associated_token_account`);

let i: any;
for (i in mintArray) {

    const tokenMintAddress: PublicKey = new PublicKey(
        mintArray[i]
    );

    let j: any;
    for (j in addressArray) {

        const walletAddress: PublicKey = new PublicKey(
            addressArray[j]
        );

        const result = findAssociatedTokenAddress(
            walletAddress, 
            tokenMintAddress,
        );
        
        try {
            result.then(value => console.log(`${walletAddress.toBase58()},${tokenMintAddress.toBase58()},${value}`));
        }
        catch (e) {
            console.log((e as Error).message);
        }
    };

};

