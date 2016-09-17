/// <reference path="../typings/es6-shim/es6-shim.d.ts" />
import "zone.js";
import "reflect-metadata";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import {AppModule} from './app.module';

declare var Firebase;

platformBrowserDynamic().bootstrapModule(AppModule);