import {Injectable} from "angular2/core";
import {HeroService} from "./hero.service";
import {HEROES} from './mock-heroes';
import {Observable} from "rxjs/Rx";
import {FirebaseService} from 'ng2-firebase/core';
import {Hero} from "./hero";

@Injectable()
export class FirebaseHeroService extends HeroService {

    private service:FirebaseService;

    constructor(firebaseService:FirebaseService) {
        super();
        this.service = firebaseService.child('heroes');
    }

    getHeroes() {
        var service = this.service;
        return service.value.map((heroes) => {
            return heroes.map((h, i) => {
                // TODO: Cleanup
                return {
                    id: h.id,
                    name: h.name,
                    save: function () {
                        return service.child(i.toString()).setData({
                            id: this.id,
                            name: this.name
                        });
                    }
                }
            })
        });
    }
}