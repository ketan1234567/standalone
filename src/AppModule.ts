import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PersonComponent } from './components/person.component';

@NgModule({
  imports: [BrowserModule,HttpClientModule],
  
})
export class AppModule {


    constructor(private injector: Injector) { }

    ngDoBootstrap() {
        console.log("Ketan");
        
    
    }

    
}