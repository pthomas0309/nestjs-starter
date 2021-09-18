import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

/* This is a Feature Module,
a module that groups together files that 
have the same application domain, 
ex. User data would me grouped in a feature module
and exported to the app module*/

// @Global decorator establishes the module as globally scoped

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    /* Modules are shared by default, using the exports array
    we can share an instance of the CatsService accross all modules */
    exports: [CatsService]
})
export class CatsModule {}
