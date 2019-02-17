import * as bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';

import config from '@@config';
import httpLogger from '@@middlewares/httpLogger';
import iota from "@@modules/iota/iota";

function createExpressApp() {
  const port = config.expressPort;

  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(httpLogger);

  app.use('/recycle' , async (req, res, next) => {
    const { data } = req.body;

    try {
      const result = await iota.send({
        data,
      });
  
      res.send({
        result,
        error: false,
      });
    } catch (err) {
      res.send({
        error: true,
      })
    }
  });

  app.use('/withdraw', async (req, res, next) => {
    const { data, seed } = req.body;

    try {
      const result = await iota.send({
        data,
        seed,
      });
  
      res.send({
        error: false,
        result,
      });
    } catch (err) {
      console.error(err);

      res.send({
        error: true,
      })  
    }
  });

  app.use((err, req, res, next) => {
    console.error('Error has occurred: %s', err);
  });

  app.listen(port, () => {
    console.log('Listening on port: %s', port);
  });

  return app;
}

export default createExpressApp;
