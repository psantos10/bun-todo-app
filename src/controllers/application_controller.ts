import type { Request, Response } from 'express';

export default class ApplicationController {
  static call<T extends ApplicationController>(this: new () => T, action: keyof T & string) {
    return (req: Request, res: Response) => {
      const controller = new this();

      const method = controller[action];

      if (typeof method === 'function') {
        return method.bind(controller)(req, res);
      }

      throw new Error(`Action ${action} is not defined in ${this.name}`);
    };
  }

  render(res: Response, view: string, locals?: object): void {
    const controllerBaseName = this.getControllerBaseName(this.constructor.name);

    res.render(`${controllerBaseName}/${view}`, locals);
  }

  private getControllerBaseName(className: string): string {
    return className.replace(/Controller$/, '').toLowerCase();
  }
}
