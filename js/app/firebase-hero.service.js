(function (app) {
    app.FirebaseHeroService = ng.core
        .Class({
            constructor: function (firebaseService) {
                this.service = firebaseService.child('heroes');
            },

            getHeroes: function () {
                var _this = this;
                var service = _this.service;
                return service.value.map(function (heroes) {
                    return heroes.map(function (h, i) {
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
        });
})(window.app || (window.app = {}));