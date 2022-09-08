import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
const logger = new Logger('APP');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe({}));

  await app.listen(configService.get('PORT'), () => {
    logger.log(
      `👩‍💻🧑🏻‍💻server running on port ${configService.get(
        'PORT',
      )} 😊 By Davilabs 🖥`,
    );
    logger.log(
      `Graphql running for  http://localhost:${configService.get(
        'PORT',
      )}//graphql`,
    );
  });
}
bootstrap();
