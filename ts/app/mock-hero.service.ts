import {Injectable} from "@angular/core";
import {HeroService} from "./hero.service";
import {HEROES} from './mock-heroes';
import {Observable} from "rxjs/Rx";

@Injectable()
export class MockHeroService extends HeroService {
    save():Promise<boolean> {
        return undefined;
    }
    getHeroes() {
        return Observable.create((observer) => {
            setTimeout(function () {
                observer.next(HEROES);
            }, 5000);
        });
    }
}