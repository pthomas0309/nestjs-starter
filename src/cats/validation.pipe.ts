import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

/* example of a custom pipe, a class named ValidationPipe 

uses a generic interface called PipeTransform<T, R> with 
T representing the type of the input value, and R representing the type of the 
transform method or the type of the value returned */

@Injectable()
export class ValidationPipe implements PipeTransform {
    // transform method is required to satisfy
    // the PipeTransform interface
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }
}