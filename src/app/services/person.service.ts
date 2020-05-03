import { Promise } from 'q';
import { Person } from '../entities/person';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    constructor() {
    }

    public getPerson(id: number) {
        switch (id) {
            case 1: {
                return({
                    id: 1,
                    firstname: 'John',
                    lastname: 'Wick'
                });
            } case 2: {
                return({
                    id: 2,
                    firstname: 'Hannibal',
                    lastname: 'Lecter'
                });
            } case 3: {
                return({
                    id: 3,
                    firstname: 'Indiana',
                    lastname: 'Jones'
                });
            } default: {
                return(null);
            }
        }
    }
}