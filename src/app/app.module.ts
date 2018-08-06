import { BrowserModule        } from '@angular/platform-browser';
import { NgModule             } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule     } from '@angular/common/http';

import { NgbModule                    } from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module           } from 'angulartics2'
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga'

import { AppComponent    } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent    } from './home/home.component';
import { AboutComponent   } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent  } from './footer/footer.component';



const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,

        HomeComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,

        NgbModule.forRoot(),
        Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
    ],
    providers: [  ],
    bootstrap: [ AppComponent ]
})
export class AppModule{ }
