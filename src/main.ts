import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    setupSwagger(app);

    await app.listen(3000);
}

bootstrap();

function setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle('Findervest API')
        .setVersion('1.0')
        .setSchemes('http', 'https')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
}
