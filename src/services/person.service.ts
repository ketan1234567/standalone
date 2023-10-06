import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Person } from "./person";



@Injectable()
export class PersonService {


  getAllPersons(): Observable<Person[]> {
    return of(
      [
        { id: 101, name: 'Mohit', age: 25, city: 'Varanasi' },
        { id: 102, name: 'Krishn', age: 30, city: 'Delhi' },
        { id: 103, name: 'Shiv', age: 35, city: 'Patna' },
        { id: 104, name: 'Mohit', age: 25, city: 'Varanasi' },
        { id: 105, name: 'Krishn', age: 30, city: 'Delhi' },
        { id: 106, name: 'Shiv', age: 35, city: 'Patna' }
      ]
    );
  }
  getPersonById(pid: number) {
    return this.getAllPersons().pipe(
      map(allPersons => allPersons.find(p => p.id === pid))
    );
  }





}