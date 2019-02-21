import chalk from 'chalk';
import * as Converter from '@iota/converter';

import api from './api';
import config from '@@config';

async function send({
  data,
  seed,
}: SendData) {
  console.log('Data to send: %o', data);

  const _seed = seed || config.seed0;
  const message = Converter.asciiToTrytes(JSON.stringify(data || {}));

  console.log('Finding new address to begin transaction...');
  const address = await api.getNewAddress(_seed);
  console.log(`${chalk.green('New Address')} found: %s, from seed: %s`, address, seed);
  
  const transfers = [
    {
      value: 5,
      address: <string>address,
      message,
    },
  ];

  return new Promise((resolve, reject) => {
    console.log('Transaction begins');

    api
      .prepareTransfers(config.seed1, transfers)
      .then(trytes => {
        console.log(`${chalk.green('Sending')} Trytes...`);
        return api.sendTrytes(trytes, 3, 9)
      })
      .then(bundle => {
        console.log(`Transfer ${chalk.green('successfully')} sent`);
        // bundle.map(tx => console.log(tx));

        resolve({
          destinationAddress: bundle[0].address,
          rawBundle: bundle,
          tokenValue: bundle[0].value,
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
}

export default send;

interface SendData {
  data?: object;
  seed?: string;
}
