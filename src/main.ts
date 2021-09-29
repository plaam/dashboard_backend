import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { getRepository } from 'typeorm';
import { TypeORMSession } from './typeorm/entities/Session';
import { TypeormStore } from 'connect-typeorm/out';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  const sessionRepository = getRepository(TypeORMSession);
  app.setGlobalPrefix('api');
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: 'oijrhuievvjkgrfijowp',
      cookie: {
        maxAge: 10000,
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(PORT, () => console.log(`Running on ${PORT}`));
}
bootstrap();
