import * as iotaLibrary from '@iota/core';

import config from '@@config';

const provider = config.provider;

console.log('Creating iota API with provider: %s', provider);

const iota = iotaLibrary.composeAPI({
  provider,
});

export default iota;
