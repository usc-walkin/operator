import { Request, Response, NextFunction } from 'express';

const FORMAT = '[http] %s - params: %j, body: %j, user-agent: %j';

export default function httpLogger(req: Request, res: Response, next: NextFunction) {
  console.info(
    FORMAT, 
    req.url, 
    req.params, 
    req.body, 
    req.headers['user-agent'],
  );

  next();
};
