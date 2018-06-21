// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    bench: {
      bip32: {
        private: 0x2bf4530,
        public: 0x2bf4968,
      },
      name: 'bench',
      nethash: '3a832f6849162ee605da8251cf9f94b228a82a8989cc3a2abdeb4a8c18cb41b6',
      token: 'BEX',
      symbol: 'ƀ',
      version: 25, // BEX Addresses will begin with 'B'
      explorer: 'http://bex.bex.life',
      wif: 0xaa,
      activePeer: {
        ip: '51.15.99.156',
        port: 6620,
      },
      peers: [
        '51.15.99.156:6620'
      ],
    },
    benchtest: {
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      name: 'texnet',
      nethash: '62375596d1bc695deb9da235692fc695fb0b9ec478fd5bd8f6295d7aa353625f',
      token: 'TEX',
      symbol: 'Ⱦ',
      version: 25,
      explorer: 'http://tex.benchcore.io',
      wif: 0xba,
      activePeer: {
        ip: '51.15.113.19',
        port: 6619,
      },
      peers: [
        '51.15.113.19:6619',
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 51,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};
