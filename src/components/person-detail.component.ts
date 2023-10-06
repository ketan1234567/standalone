import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Person } from '../services/person';
import { PersonService } from '../services/person.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    template: `
    <div *ngIf="person">
      <h3>Details</h3>
      {{person.id}} - {{person.name}} - {{person.age}} - {{person.city}}
    </div>
    `,
    styles: ['div { font-weight: bold}']
})
export class PersonDetailComponent implements OnInit {
    person?: Person;
    constructor(private route: ActivatedRoute,
        private personService: PersonService) { }
    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params) => this.personService.getPersonById(+params['id']))
        ).subscribe(person => this.person = person);
    }
}