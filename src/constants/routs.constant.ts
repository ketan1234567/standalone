import { Route } from "@angular/router";
import { PersonDetailComponent } from "src/components/person-detail.component";

export const ROUTES: Route[] = [
	{ path: 'person-detail/:id', component: PersonDetailComponent },
];