import * as Converter from '@iota/converter';

import api from './api';
import config from '@@config';

function send(data) {
  console.log('Data to send: %o', data);

  const message = Converter.asciiToTrytes(JSON.stringify(data));
  
  const transfers = [
    {
      value: 5,
      address: 'EYIIVLBOASB9WPIGKWQKR9XBLRULXKDDNK99PMPCK9AOBQIRVSDDFKTUWCZIAHMDLUPDEZ9XC9EYSKKR9',
      message,
    },
  ];

  api
    .prepareTransfers(config.seed, transfers)
    .then(trytes => api.sendTrytes(trytes, 3, 9))
    .then(bundle => {
      console.log('Transfer successfully sent');
      bundle.map(tx => console.log(tx));
    })
    .catch(err => {
      console.log(err);
    });
}

export default send;
