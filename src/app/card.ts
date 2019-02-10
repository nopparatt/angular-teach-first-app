import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

export class Card {
    firstName: string;
    lastName: string;
    votes: number;
    constructor(
        firstName: string
        ,lastName : string
        ,votes: number
        ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.votes = votes;
    }
    get name(): string{
        return this.firstName + '' + this.lastName
    }
}
