import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // const clientDevProxy = createProxyMiddleware('/view', { target: 'http://localhost:3000' });

    // app.use('/api', new AppModule());
    // app.use(clientDevProxy);
    await app.listen(3001);
}
bootstrap();

// TODO: Logger 추가 (winston)
