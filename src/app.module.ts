import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

/* 
This is the root module,the starting point 
Nest uses to make the application graph. This is how 
Nest resolves module and provider relationships 
and their dependencies 
*/

// controllers will always belong to a module
// this is defined in the module decorator
// by attaching the controllers metadata
@Module({
  /* the list of imported modules that export the 
  providers which are required in this module */
  imports: [CatsModule],
  /* this array is where the controllers are defined */
  controllers: [AppController],
  /* the providers that will be instantiated by the 
  Nest injector and that may be shared 
  at least across this module */
  providers: [AppService],
})
export class AppModule {}
