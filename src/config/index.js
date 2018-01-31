const keys = require('./keys');
const env = require('./env');

class Config {
  get sessionSecret() {
    return env.sessionSecret || 'koopa troopa doopa';
  }

  get signerPublicKey() {
    return keys.signerPublicKey;
  }

  get signerSecretKey() {
    return keys.signerSecretKey;
  }

  get useStellarPublicNetwork() {
    return env.useStellarPublicNetwork || false;
  }
}

const config = new Config();

module.exports = config;