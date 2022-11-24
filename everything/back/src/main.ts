import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config =  new DocumentBuilder()
    .setTitle('Register')
    .setDescription('General description')
    .build();

  const document = SwaggerModule.createDocument(app , config);
  SwaggerModule.setup('/' , app , document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
