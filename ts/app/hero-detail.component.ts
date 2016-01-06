import {Component} from 'angular2/core';
import {Hero} from "./hero";

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
            <button (click)="save()">Save</button>
            <p>{{savePromise | async}}</p>
          </div>
        </div>
    `,
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero:Hero;
    public savePromise:Promise<string>;

    save() {
        this.savePromise = this.hero.save().then((r) => {
            return "The hero has been updated!"
        }, function (err) {
            return err;
        });
    }
}