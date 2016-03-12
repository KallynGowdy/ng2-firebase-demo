(function(app) {
    app.FirebaseHeroService = ng.core
        .Class({
            constructor: function(firebaseService) {
                this.array = firebaseService.child('heroes').asArray();
            },

            getHeroes: function() {
                var _this = this;
                var arr = _this.array;
                return arr.map(function(h, i) {
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
        });
})(window.app || (window.app = {}));