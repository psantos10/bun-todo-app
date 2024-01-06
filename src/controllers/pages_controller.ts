import type { Request, Response } from 'express';
import ApplicationController from './application_controller';

export default class PagesController extends ApplicationController {
  index(req: Request, res: Response) {
    this.render(res, 'index');
  }
}
