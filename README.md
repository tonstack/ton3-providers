## 💎 ton3-providers

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=for-the-badge)](http://www.typescriptlang.org)
[![TON](https://img.shields.io/badge/based%20on-The%20Open%20Network-blue?style=for-the-badge)](https://ton.org)

This package is a part of [ton3](https://github.com/tonstack/ton3).
> :warning: Work in progress, API can (and most likely will) be changed! This is not production ready version yet.

## How to install
```
npm i ton3-providers
```

## Simple usage
```typescript
import { Mnemonic, Address, Coins, Builder, BOC } from 'ton3-core'
import { ProviderRESTV2 } from 'ton3-providers'
import { Wallets } from 'ton3-contracts'

const highloadWalletExample = async () => {
    const provider = new ProviderRESTV2('https://testnet.toncenter.com/api/v2')
    const client = await provider.client()

    const mnemonic = new Mnemonic()
    const highload = new Wallets.ContractHighloadWalletV2(0, mnemonic.keys.public)

    console.log(mnemonic.words) // Get mnemonic phrase
    console.log(highload.address.toString()) // Get contract address

    // You need to deposit 1 ton to your contract address before deployment

    // Contract deployment
    const deploy = highload
        .createDeployMessage()
        .sign(mnemonic.keys.private)

    const { data: deployData } = await client.sendBoc(null, { boc: BOC.toBase64Standard(deploy) })

    console.log(deployData)

    // Create and send payments
    const transfers = Array(5).fill(null).reduce((acc, _el) => acc.concat({
        destination: new Address('xxx'),
        amount: new Coins('0.01'),
        body: new Builder().storeUint(0, 32).storeString('My message').cell(),
        mode: 3
    }), [])

    const payments = highload
        .createTransferMessage(transfers)
        .sign(mnemonic.keys.private)

    const { data: paymentsData } = await client.sendBoc(null, { boc: BOC.toBase64Standard(payments) })

    console.log(paymentsData)
}
```

## License

MIT License
