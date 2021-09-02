import { Controller, Get } from '@nestjs/common';

// controller prefix is 'cats' (optional)
@Controller('cats')
export class CatsController {

    // request method decorator
    // creates a handler for an endpoint
    // the route path determined by concatonating
    // the controller prefix ('cats') and the
    // path determined in the decorator
    @Get()

    // the handler corresponds to request method (GET)
    // and the route path
    // handler: GET /cats

    // findAll() is a user defined method (effectively taco())
    // the method returns a 200 OK and the string 'This action returns all cats'
    findAll(): string {
        return 'This action returns all cats';
    }
}
