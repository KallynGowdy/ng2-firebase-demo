(function (app) {
    app.AppModule = ng.core.NgModule({
        imports: [
            ng2Firebase.FirebaseModule.forRoot({url: 'https://fb-angular2-demo.firebaseio.com/'}),
            ng.platformBrowser.BrowserModule,
            ng.forms.FormsModule
        ],
        providers: [app.FirebaseHeroService],
        declarations: [app.AppComponent, app.HeroDetailComponent],
        bootstrap: [app.AppComponent]
    })
        .Class({
            constructor: function () {}
        })
})(window.app || (window.app = {}));