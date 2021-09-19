// this file is for a DTO (Data Transfer Object) and is used in typescript
// its an object that defines how the data will be sent

// this class defines how data about a cat
// food will be transfered for POST
export class CatFoodDTO {
    catId: number;
    food: string;
}