import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

// controllers will always belong to a module
// this is defined in the module decorator
// by attaching the controllers metadata
@Module({
  imports: [],
  /* this array is where the controllers are defined */
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
