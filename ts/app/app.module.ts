import {NgModule} from '@angular/core';
import {FirebaseModule} from 'ng2-firebase/core';
import {AppComponent} from "./app.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {FirebaseHeroService} from "./firebase-hero.service";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        FirebaseModule.forRoot({url: 'https://fb-angular2-demo.firebaseio.com/'}),
        BrowserModule,
        FormsModule
    ],
    providers: [{provide: HeroService, useClass: FirebaseHeroService}],
    declarations: [AppComponent, HeroDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}