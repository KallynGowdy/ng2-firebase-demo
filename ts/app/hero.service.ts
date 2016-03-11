import {Injectable} from 'angular2/core';
import {Hero} from "./hero";
import {Observable} from "rxjs/Rx";

@Injectable()
export abstract class HeroService {
    abstract getHeroes() : Observable<Hero[]>;
}
