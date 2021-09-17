// this file is for a DTO (Data Transfer Object) and is used in typescript
// its an object that defines how the data will be sent

// this class defines what a cats data will need 
// to look like when created

export class CreateCatDto {
    id: number
    name: string
    breed: string
    favFoods: string[]
}