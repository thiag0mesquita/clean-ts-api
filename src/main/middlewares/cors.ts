import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cors = (req: Request, res: Response, next: NextFunction) => {
  res.set('acess-control-allow-origin', '*')
  res.set('acess-control-allow-headers', '*')
  res.set('acess-control-allow-methods', '*')
  next()
}
