(function(app) {
    app.HeroDetailComponent = ng.core
        .Component({
            selector: 'my-hero-detail',
            template:
            '<div *ngIf="hero">' +
            '   <h2>{{hero.name}} details!</h2>' +
            '   <div><label>id: </label>{{hero.id}}</div>' +
            '   <div>' +
            '       <label>name: </label>' +
            '       <input [(ngModel)]="hero.name" placeholder="name"/>' +
            '       <button (click)="save()">Save</button>' +
            '       <p>{{savePromise | async}}</p>' +
            '   </div>' +
            '</div>',
            inputs: ['hero']
        })
        .Class({
            constructor: function() {
                this.savePromise = null;
            },

            save: function(){
                this.savePromise = this.hero.save().then(function(r){
                    return "The hero has been updated!";
                }, function(err){
                    return err;
                })
            }
        });
})(window.app || (window.app = {}));