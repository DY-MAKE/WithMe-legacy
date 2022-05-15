import { join, resolve } from 'path';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Server, { createProxy } from 'http-proxy';
import { Request, Response } from 'express';

@Injectable()
export class ReactService {
    private devProxyServer: Server;
    constructor(private readonly config: ConfigService) {
        this.devProxyServer = createProxy();
    }

    requestReact(request: Request, response: Response) {
        if (this.config.get('NODE_ENV') === 'develop') {
            this.devProxyServer.web(request, response, { target: this.config.get('REACT_URL') });
        } else {
            const { url } = request;
            const root = resolve('..', this.config.get('REACT_DIR'));
            const parsedPath = join(root, url);
            response.sendFile(parsedPath);
        }
    }
}
