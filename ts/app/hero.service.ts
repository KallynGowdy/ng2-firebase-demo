import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {Observable} from "rxjs/Rx";

@Injectable()
export abstract class HeroService {
    abstract getHeroes() : Observable<Hero[]>;
}
