import { All, Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import Server, { createProxy } from 'http-proxy';
import { Request, Response } from 'express';

@Controller()
export class AppController {
    private server: Server;
    constructor(private readonly appService: AppService) {
        this.server = createProxy();
    }

    @Get('/test')
    getHello(): string {
        return this.appService.getHello();
    }

    // TODO: dev 모드에서만 활성화 되도록 변경, prod 모드에서는 static file serve
    @All('*')
    proxyAll(@Req() request: Request, @Res() response: Response): void {
        // console.log('DevProxy', request.headers);
        this.server.web(request, response, { target: 'http://localhost:3000' });
    }
}
