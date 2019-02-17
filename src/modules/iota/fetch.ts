import * as Converter from '@iota/converter';

import api from './api';
import config from '@@config';

function fetch() {
  api
    .findTransactionObjects({ addresses: [
      config.address,
    ]})
    .then(response => {
      console.log('Response of length(%s):', response.length);

      response.map((r) => {
        const trytes = r.signatureMessageFragment.slice(0, -1);
        const data = Converter.trytesToAscii(trytes)

        console.log('Decoded message: %s', data);
        console.log(data);
      });
    })
    .catch(err => {
      console.error(err);
    });
}

export default fetch;
