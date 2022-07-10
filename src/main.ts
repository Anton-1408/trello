import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  const config = new DocumentBuilder()
    .setTitle('Trello')
    .setVersion('0.69')
    .addTag('auth')
    .addTag('users')
    .addTag('columns')
    .addTag('cards')
    .addTag('comments')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
