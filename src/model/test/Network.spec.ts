import { Network, NetworkType } from '../Network';
import { Peer } from '../Peer';

import { expect } from 'chai';

/* tslint:disable:no-unused-expression */

describe('Network', () => {

  it ('should be a object', () => {
    expect(NetworkType).to.be.a('object');
  });

  it ('should have properties', () => {
    expect(NetworkType).have.property('Bexnet');
    expect(Network).have.property('getDefault');
  });

  it('should create a instance of BEX network', () => {
    const network = Network.getDefault(NetworkType.Bexnet);
    expect(network.name).to.be.equal('bexnet');
  });

  it('should create a instance of DEX network', () => {
    const network = Network.getDefault(NetworkType.Dexnet);
    expect(network.name).to.be.equal('dexnet');
  });

  it('should create a manual instance of network', () => {
    const network = new Network;

    network.type = NetworkType.Bexnet;
    network.name = 'bex';
    network.nethash = '7ed0d6af1eb2ace5c9f23d877607303edc98f3c1f48680967acac644f5339852';

    expect(network).to.be.instanceOf(Network);
  });

  it('should set a active peer', () => {
    const network = new Network;
    const peer = new Peer;
    peer.ip = 'network.bex.life';
    peer.port = 6620;

    network.type = NetworkType.Bexnet;
    network.name = 'bex';
    network.nethash = '7ed0d6af1eb2ace5c9f23d877607303edc98f3c1f48680967acac644f5339852';

    network.setPeer(peer);
    expect(network.activePeer).to.be.instanceOf(Peer);
  });

  it('should return string url from active peer', () => {
    const network = new Network;
    const peer = new Peer;
    peer.ip = 'michaelx.bex.life';
    peer.port = 6620;

    network.type = NetworkType.Bexnet;
    network.name = 'bex';
    network.nethash = '7ed0d6af1eb2ace5c9f23d877607303edc98f3c1f48680967acac644f5339852';

    network.setPeer(peer);
    expect(network.getPeerUrl()).to.be.a('string').and.not.empty;
  });

  it('should return array of two Networks', () => {
    expect(Network.getAll()).to.be.an('array').and.to.have.lengthOf(2);
  });

});
