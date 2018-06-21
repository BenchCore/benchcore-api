# BenchCore API Client (Typescript)

> A BenchCore API wrapper, written in TypeScript to interact with BenchCore rootchains and sidechains.

[![npm](https://img.shields.io/npm/dt/benchcore-api.svg)]()
[![npm](https://img.shields.io/npm/v/benchcore-api.svg)]()
[![license](https://img.shields.io/github/license/benchcore/benchcore-api.svg)]()

`benchcore-api` is a library client designed to facilitate how you interact with BenchCore RootChains and SideChains.

## Why TypeScript

  * TypeScript is is a superset of JavaScript which mainly offers optional static typing, classes, and interfaces. The learning curve is not that steep.
  * Types are optional, `benchcore-api` compiles into ES5 so you can work with both, ECMAScript or TypeScript.
  * A better development experience, including auto-complete and fully documented.

## Documentation

> [API documentation](https://benchcore.github.io/benchcore-api/) is hosted on GitHub Pages, and is generated from [TypeDoc](https://github.com/TypeStrong/typedoc).

## Installation

benchcore-api is avaliable from `npm`.

```bash
yarn add benchcore-api
```

or

```bash
npm i benchcore-api --save
```

## Usage

For the best TypeScript experience, you should either use [Visual Studio Code](http://code.visualstudio.com/), or a [plug-in for your favorite text editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

### Basic Examples

> Get delegate list from Dexnet network.

```js
import { Client, Network, NetworkType } from 'benchcore-api';

const dexnet = Network.getDefault(NetworkType.Dexnet);
const client = new Client(dexnet);

client.delegate.list().subscribe((list) => {
  console.log(list);
});
```

> Get address from passphrase.

```js
import { PrivateKey } from 'benchcore-api/core';

// if no specify a second param, default is bench
const key = PrivateKey.fromSeed('again sell dizzy shoes stumble bonus salt two exhibit slender romance fade');
console.log(key.getPublicKey().getAddress()); // BAfYEq6hRSMwV2yx45M1bpNx5KgdPyVBZW
```

For more examples please see documentation or look for tests in each directory.

## Running the tests

```bash
npm run test
```

## Credits

**Jared Rice Sr.** - [@jaredricesr](https://github.com/jaredricesr);
**Lúcio Rubens** - [@luciorubeens](https://github.com/luciorubeens);

## License

BenchCore API (`benchcore-api`) is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
