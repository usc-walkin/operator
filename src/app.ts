import config from '@@config';
import expressApp from './expressApp';

console.log('app launches with config:\n%o', config);

(async () => {
  expressApp();
})();
