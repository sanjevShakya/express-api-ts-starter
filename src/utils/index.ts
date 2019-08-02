import { Router, Request, Response, NextFunction } from 'express';

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
  middleware: Wrapper[],
  router: Router
) => {
  for (const func of middleware) {
    func(router);
  }
}

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string,
  method: string,
  version: string,
  handler: Handler | Handler[],
}

function constructUri(path: string, version: string) {
  return `/api/${version}${path}`;
}

export const applyRoutes = (routes: Route[], router: Router) => {
  for(const route of routes) {
    const { method, path, handler, version } = route;
    (router as any)[method](constructUri(path, version), handler);
  }
}
