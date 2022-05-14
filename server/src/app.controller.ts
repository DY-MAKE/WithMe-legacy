import { All, Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import Server, { createProxy } from 'http-proxy';
import { Request, Response } from 'express';

@Controller('')
export class AppController {
    private server: Server;
    constructor(private readonly appService: AppService) {
        this.server = createProxy();
    }

    @Get('/test')
    getHello(): string {
        return this.appService.getHello();
    }

    @All('/*')
    proxyAll(@Req() request: Request, @Res() response: Response): void {
        console.log('Proxy Server');
        this.server.web(request, response, { target: 'http://localhost:3000' });
    }
}
