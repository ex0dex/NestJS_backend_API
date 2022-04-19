import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest/TypesCript testing')
    .setDescription('REST AP Documentation')
    .setVersion('1.0.0')
    .addTag('ex0dex')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  
  app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
  });
}

start();
