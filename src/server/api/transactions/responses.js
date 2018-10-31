const { urls } = require('../../lib/utils');

/**
 * A response conforming to the vendor-agnostic bootstrapping requirements.
 */
class BootstrapMultisigTransactionResponse {
  constructor({ transaction }) {
    this.transaction = transaction;
  }

  toJSON() {
    return {
      _links: {
        status: urls.withHost(urls.transactionStatusApi(this.transaction))
      },
      id: this.transaction.id,
      extras: {
        isStellarGuard: true,
        url: urls.withHost(urls.authorizeTransaction({ transaction: this }))
      }
    };
  }
}

class TransactionStatusResponse {
  constructor({ transaction }) {
    this.transaction = transaction;
  }

  get status() {
    switch (this.transaction.status) {
      case 1:
        return 'pending';
      case 2:
        return 'success';
      case 3:
        return 'expired';
      case 4:
        return 'denied';
      case 5:
      default:
        return 'error';
    }
  }

  toJSON() {
    return {
      id: this.transaction.id,
      status: this.status
    };
  }
}

exports.BootstrapMultisigTransactionResponse = BootstrapMultisigTransactionResponse;
exports.TransactionStatusResponse = TransactionStatusResponse;
