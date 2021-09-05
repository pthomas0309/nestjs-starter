import { Controller, Get, Post, Put, Delete, HttpCode, Req, Res, Param, Patch, All } from '@nestjs/common';


// @Controller decorator defines a basic controller (required)
// controller prefix is 'cats' (optional)
// can take a host option to require the host to match a value
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

    // HttpCode controls status code returned
    // default 200 (201 for POST)
    // @HttpCode(204)

    // findAll() is a user defined method (effectively taco())
    // method returns primitive Javascript types as unserialized values
    // and objects and arrays are returned as serialized JSON
    // the method returns a 200 OK and the string 'This action returns all cats'
    /* async tag makes this an asyncronous function */ findAll(): string /* async functions must return a promise: Promise<any[]> */ {
        /* including @Req() decorator tells Nest to inject express request object in handler @Req() request: Request */
        /* including optional @Res decorator in the handler instructs Nest to inject Express response object  @Res() response: Response */ 
        /* other injectable decorators 
           @Session() => req.session
           @Param(key?: string) => req.params
           @Body(key?: string) => req.body
           @Query(key?: string) => req.query
           @Headers(name?: string) => req.headers
           @HostParam() => req.hosts
        */
        
        return 'This action returns all cats';
    }

    /* Route Parameters */

    // :id is a parameter token or a dynamic value
    // that makes a path to the data
    @Get(':id')

    // handler: GET /cats/:id

    // returns 200 code

    // @Param() decorator in the method signature
    // this makes the route parameters available
    // as properties of the decorated method parameter
    // (in this case params)
    findOne(@Param() params): string {

        // log the id
        console.log(params.id);

        // request returns this string with the id targeted in the params
        return `This action returns a cat with the id of ${params.id}`;
        
    }

    // request method decorator POST
    @Post('food')

    // handler: POST /cats/food
    
    // returns 201 code for POST
    
    create(): string {
        return 'This action posts a cat food';
    }

    // request method decorator PUT
    @Put('breed')

    // handler: PUT /cats/breed

    // returns 200 code by default 

    update(): string {
        return 'this action updates a breed of cat'
    }

    // request method decorator DELETE
    @Delete()

    // handler: DELETE /cats

    delete(): string {
        return 'this action will delete a cat'
    }

    /*
    other request types
    @Patch()
    @Option()
    @Head()

    @All() handles all requests
    */
}
