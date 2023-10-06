import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit } from "@angular/core";
import { Person } from "./services/person";
import { PersonService } from "./services/person.service";
import { PersonComponent } from "./components/person.component";
import { MsgDirective } from './directives/msg.directive';
import { RouterModule, provideRouter } from '@angular/router';
import { ROUTES } from './constants/routs.constant';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterModule,
        PersonComponent,
        MsgDirective
    ],
    templateUrl: './main.component.html'
})
export class MainAppComponent implements OnInit {
    title = "Person List";
    persons?: Person[];
    constructor(private service: PersonService) { }
    ngOnInit() {
        this.service.getAllPersons().subscribe(data => {
            this.persons = data;
        });
    }
}

bootstrapApplication(MainAppComponent, {
    providers: [
        PersonService,
        provideRouter(ROUTES),
    ]
}); 