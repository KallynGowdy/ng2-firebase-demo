/// <reference path="../typings/es6-shim/es6-shim.d.ts" />

import "zone.js";
import "reflect-metadata";
import {bootstrap}    from 'angular2/platform/browser'
import {provide} from "angular2/core";
import {AppComponent} from './app.component'
import {MockHeroService} from './mock-hero.service';
import {HeroService} from './hero.service';
import {FirebaseHeroService} from "./firebase-hero.service";
import {FirebaseServiceProvider, FirebaseService} from 'ng2-firebase/core';
import {Inject} from "angular2/core";

declare var Firebase;

bootstrap(AppComponent, [
    // TODO: Improve Injection to be modular
    //       For some reason, the modular versions break the app
    provide(HeroService, {useFactory: () => new FirebaseHeroService(new FirebaseService(new Firebase('https://fb-angular2-demo.firebaseio.com/')))})
]);