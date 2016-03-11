(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent, [
            // TODO: Improve Injection to be modular
            //       For some reason, the modular versions break the app
            ng.core.provide(
                app.FirebaseHeroService,
                {
                    useFactory: function () {
                        return new app.FirebaseHeroService(
                            new ng2Firebase.FirebaseService(
                                new Firebase('https://fb-angular2-demo.firebaseio.com/')
                            )
                        );
                    }
                })
        ]);
    });
})(window.app || (window.app = {}));