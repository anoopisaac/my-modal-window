import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { ModalDirective } from './_directives/index';
import { ModalService } from './_services/index';
import { HomeComponent } from './home/index';
import { TestPageComponent } from './test-page/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,                      
        routing
    ],
    declarations: [
        AppComponent,
        ModalDirective,
        HomeComponent,
        TestPageComponent
    ],
    providers: [
        ModalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }