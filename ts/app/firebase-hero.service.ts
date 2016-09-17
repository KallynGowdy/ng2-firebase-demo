import {Injectable} from "@angular/core";
import {HeroService} from "./hero.service";
import {HEROES} from './mock-heroes';
import {Observable} from "rxjs/Rx";
import {FirebaseService, FirebaseArray} from 'ng2-firebase/core';
import {Hero} from "./hero";

@Injectable()
export class FirebaseHeroService extends HeroService {

    private array: FirebaseArray;

    constructor(firebaseService: FirebaseService) {
        super();
        this.array = firebaseService.child('heroes').asArray();
    }

    getHeroes() {
        var arr = this.array;
        return arr.map((h: Hero, i) => {
            // TODO: Cleanup
            return {
                id: h.id,
                name: h.name,
                save: function() {
                    return arr.set(i, {
                        id: this.id,
                        name: this.name
                    });
                }
            };
        });
    }
}