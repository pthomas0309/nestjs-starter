import { Controller, Get, Post, Put, Delete, HttpCode, Req, Res, Param, Body, Patch, All, Query, ParseIntPipe } from '@nestjs/common';
import { UpdateBreedDto } from './dto/catBreed.dto';
import { CatFoodDTO } from './dto/catFood.dto';
import { ListAllEntities } from './dto/cats.dto';
import { CreateCatDto } from "./dto/createCatDto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";

// CLI controller generation command $ nest g controller cats


/* @Controller decorator defines a basic controller (required)
controller prefix is 'cats' (optional) can take a host option
to require the host to match a value */
@Controller('cats')
export class CatsController {

    /* 
    The CatsService is injected through this constructor

    The use of the private syntax here allows for declaring
    and initializing the CatsService in the same location */
    constructor(private catsService: CatsService) {}

    /* request method decorator
    creates a handler for an endpoint
    the route path determined by concatonating 
    controller prefix ('cats') and the
    path determined in the decorator */
    @Get()

    
    // the handler corresponds to request method (GET) and the route path

    // handler: GET /cats

    /* 
    HttpCode controls status code returned

    default 200 (201 for POST)

    @HttpCode(204) 
    */

    /* 
    findAll() is a user defined method (effectively taco())

    method returns primitive Javascript types as unserialized values
    and objects and arrays are returned as serialized JSON

    this method returns a 200 OK and an array of 
    Cat interface objects from the findAll method 
    on catsService provider 
    */

    /* 
    async tag makes this an asyncronous function 
    async functions must return a promise ex. Promise<any[]>
    */ 
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
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
        
        return this.catsService.findAll();
    }

    /* Route Parameters */

    // :id is a parameter token or a dynamic value
    // that makes a path to the data
    @Get(':id')

    /* 
    handler: GET /cats/:id returns 200 code

    @Param() decorator in the method signature, this makes the route parameters available
    as properties of the decorated method parameter (in this case params)
    to use a validation pipe, it must be bound at the method parameter 
    pipes will either transfer the input data to the desired form or validate the data 
    here the ParseIntPipe insures the method parameter value is transformed to an integer
    */
    async findOne(@Param('id', ParseIntPipe) catId: number): Promise<Cat[]> { 

        // log the id
        console.log(catId);

        // request returns this string with the id targeted in the params
        return this.catsService.findOne(catId);
        
    }

    // request method decorator POST
    @Post()

    async createCat(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }

    // request method decorator POST
    @Post('food')

    /* 
    handler: POST /cats/food
    
    returns 201 code for POST 
    */
    
    /* 
    @Body decorates the DTO that we use in the method signature
    the DTO defines how the Data is transfered for this post action
     */
     async create(@Body() catFoodDto: CatFoodDTO) {
        return `This action adds a ${catFoodDto.food} as a food for cat at id, ${catFoodDto.catId}`;
    }

    // request method decorator PUT
    @Put('breed/:id')

    // handler: PUT /cats/breed

    // returns 200 code by default 

    update(@Param('id') id: string, @Body() updateBreedDto: UpdateBreedDto): string {
        return `this action updates a breed of cat at ${updateBreedDto.catId}, to be ${updateBreedDto.breed} with a defining characteristic of ${updateBreedDto.definingCharacteristic}`
    }

    // request method decorator DELETE
    @Delete(':id')

    // handler: DELETE /cats

    delete(@Param('id') id: string) {
        return `this action will delete a cat at ${id}`
    }

    /*
    other request types
    @Patch()
    @Option()
    @Head()

    @All() handles all requests
    */
}
