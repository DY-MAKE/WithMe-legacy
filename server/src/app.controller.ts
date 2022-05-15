import { All, Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { AppService } from './app.service';
import { ReactService } from './react/react.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly reactService: ReactService,
    ) {}

    @Get('/test')
    getHello(): string {
        return this.appService.getHello();
    }

    @All('*')
    reactView(@Req() request: Request, @Res() response: Response) {
        this.reactService.requestReact(request, response);
    }
}
