// this file is for a DTO (Data Transfer Object) and is used in typescript
// its an object that defines how the data will be sent

// this class defines how many items will be returned
// on a GET for all cats
export class ListAllEntities {
    limit: number;
}