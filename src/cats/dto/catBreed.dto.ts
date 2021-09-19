// this file is for a DTO (Data Transfer Object) and is used in typescript
// its an object that defines how the data will be sent

// this class defines what data for 
// updating a cats breed will look
export class UpdateBreedDto {
    catId: number;
    breed: string;
    definingCharacteristic: string;
}