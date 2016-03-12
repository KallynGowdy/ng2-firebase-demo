(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require(undefined), require(undefined));
	else if(typeof define === 'function' && define.amd)
		define(["angular2/core", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["ng2Firebase"] = factory(require("angular2/core"), require("rxjs/Rx"));
	else
		root["ng2Firebase"] = factory(root["ng"]["core"], root["Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	//export * from './src/imports';
	__export(__webpack_require__(1));
	__export(__webpack_require__(3));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(9));
	__export(__webpack_require__(8));
	__export(__webpack_require__(10));
	__export(__webpack_require__(5));
	//# sourceMappingURL=core.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/// <
	var core_1 = __webpack_require__(2);
	var firebase_utils_1 = __webpack_require__(3);
	var firebase_array_1 = __webpack_require__(5);
	/**
	 * Defines a service that wraps the Firebase Javascript API in a nice, Observable-enabled manner.
	 *
	 * **Example**:
	 *
	 * ```TypeScript
	 * import {FirebaseService} from 'ng2-firebase/core';
	 *
	 * // Tell TypeScript that the Firebase SDK has created a global for us
	 * declare var Firebase;
	 *
	 * var firebase = new FirebaseService(
	 *    new Firebase('https://YOUR-FIREBASE-URL.firebaseio-demo.com')
	 * );
	 *
	 * // Use Service
	 * ```
	 *
	 * **Angular 2 Example:**
	 * ```
	 * // some.component.ts
	 * import { Component, OnInit, provide } from 'angular2/core';
	 * import { FirebaseService, FirebaseServiceFactory } from 'ng2-firebase/core';
	 * import { Observable } from 'rxjs/Rx';
	 *
	 * @@Component({
	 *    // FirebaseServiceFactory is not Implemented yet...
	 *    selector: 'some-component',
	 *
	 *    // Make sure to include the async pipe so that the most recent value
	 *    // is resolved from the data observable.
	 *    template: 'My Data: {{data | async}}',
	 *
	 *    // Declare the providers that should be used for the service.
	 *    providers: [
	 *      provide(FirebaseService, { useFactory: FirebaseServiceFactory })
	 *    ]
	 * })
	 * export class SomeComponent implements OnInit {
	 *   private firebase: FirebaseService;
	 *   data: Observable<any>;
	 *
	 *   constructor(firebase: FirebaseService) {
	 *      this.firebase = firebase;
	 *   }
	 *
	 *   observeData() {
	 *      this.data = this.firebase.data;
	 *   }
	 *
	 *   ngOnInit() {
	 *      this.observeData();
	 *   }
	 * }
	 * ```
	 */
	var FirebaseService = (function () {
	    /**
	     * Creates a new FirebaseService using the given Firebase JavaScript API Object.
	     * @param firebase The Object that represents the instantiated Firebase JavaScript API Object.
	     */
	    function FirebaseService(firebase) {
	        this._firebase = firebase;
	    }
	    Object.defineProperty(FirebaseService.prototype, "firebase", {
	        /**
	         * Gets the internal Firebase Instance.
	         * @returns {Firebase}
	         */
	        get: function () {
	            return this._firebase;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Wraps the given Firebase event type as an observable.
	     * @param eventType {string} One of the following strings: "value", "child_added", "child_changed", "child_removed", or "child_moved."
	     */
	    FirebaseService.prototype.wrapFirebaseEvent = function (eventType) {
	        return firebase_utils_1.FirebaseUtils.wrapFirebaseEvent(this.firebase, eventType);
	    };
	    /**
	     * Retrieves an observable that wraps the given event from the Firebase API.
	     * @param eventType {string} One of the following strings: "value", "child_added", "child_changed", "child_removed", or "child_moved."
	     * @returns {Observable<FirebaseDataSnapshot>} An object that represents the asynchronous stream of events.
	     */
	    FirebaseService.prototype.on = function (eventType) {
	        return this.wrapFirebaseEvent(eventType);
	    };
	    Object.defineProperty(FirebaseService.prototype, "valueRaw", {
	        /**
	         * Gets the raw event stream for the 'value' event from the underlying Firebase Object.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.wrapFirebaseEvent('value');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "value", {
	        /**
	         * Gets an observable that resolves with the value in this Firebase location and whenever the data is updated.
	         * Internally, this maps to the 'value' event emitted by Firebase.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.valueRaw.map(function (data) { return data[0].val(); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "dataRaw", {
	        /**
	         * Alias for .valueRaw.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.valueRaw;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "data", {
	        /**
	         * Gets an observable that resolves with the data in this Firebase location and whenever the data is updated.
	         * Semantically the same as calling .value.
	         * Internally, this maps to the 'value' event emitted by Firebase.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childAddedRaw", {
	        /**
	         * Gets the raw event stream for the 'child_added' event from the underlying Firebase Object.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.wrapFirebaseEvent('child_added');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childAdded", {
	        /**
	         * Gets an observable that resolves whenever a child is added to this Firebase location.
	         * Internally, this maps to the 'child_added' event emitted by Firebase.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.childAddedRaw.map(function (data) { return data[0].val(); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childChangedRaw", {
	        /**
	         * Gets the raw event stream for the 'child_changed' event from the underlying Firebase Object.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.wrapFirebaseEvent('child_changed');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childChanged", {
	        /**
	         * Gets an observable that resolves whenever the data of a child in this Firebase location is modified.
	         * Internally, this maps to the 'child_changed' event emitted by Firebase.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.childChangedRaw.map(function (data) { return data[0].val(); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childRemovedRaw", {
	        /**
	         * Gets the raw event stream for the 'child_removed' event from the underlying Firebase Object.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.wrapFirebaseEvent('child_removed');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childRemoved", {
	        /**
	         * Gets an observable that resolves whenever a child is removed from this Firebase location.
	         * Internally, this maps to the 'child_removed' event emitted by Firebase.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.childRemovedRaw.map(function (data) { return data[0].val(); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childMoved", {
	        /**
	         * Gets an observable that resolves whenever a child is moved in this Firebase location.
	         * Internally, this maps to the 'child_moved' event emitted by Firebase.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.childMovedRaw.map(function (data) { return data[0].val(); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseService.prototype, "childMovedRaw", {
	        /**
	         * Gets the raw event stream for the 'child_moved' event from the underlying Firebase Object.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            return this.wrapFirebaseEvent('child_moved');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Sets the data exact data that this Firebase location should contain and
	     * returns an observable that represents the operation.
	     * @param data The data that should be set to this location.
	     * @returns {Promise<boolean>} Returns a promise that resolves `true` if the data was set. Otherwise the promise rejects if there was an error.
	     */
	    FirebaseService.prototype.setData = function (data) {
	        return firebase_utils_1.FirebaseUtils.wrapFirebaseAsyncCall(this.firebase, this.firebase.set, [data]).then(function () { return true; });
	    };
	    /**
	     * @alias setData(data)
	     */
	    FirebaseService.prototype.set = function (data) {
	        return this.setData(data);
	    };
	    /**
	     * Adds the given data to this Firebase location.
	     * @param data The data that should be added.
	     * @returns {Promise<boolean>}
	     */
	    FirebaseService.prototype.push = function (data) {
	        return firebase_utils_1.FirebaseUtils.wrapFirebaseAsyncCall(this.firebase, this.firebase.push, [data]).then(function () { return true; });
	    };
	    /**
	     * Removes the child with the given key from this location.
	     * If a key is not provided, then this location will be removed from it's parent location.
	     * @param key The key of the child that should be removed from this location.
	     * @returns {Promise<boolean>}
	     */
	    FirebaseService.prototype.remove = function (key) {
	        var firebase = this.firebase;
	        if (key) {
	            firebase = firebase.child(key);
	        }
	        return firebase_utils_1.FirebaseUtils.wrapFirebaseAsyncCall(firebase, this.firebase.remove, []).then(function () { return true; });
	    };
	    /**
	     * Wraps this FirebaseService in a new FirebaseArray object.
	     * The FirebaseArray service provides functionality for dealing with synchronized order lists of objects.
	     * @returns {FirebaseArray}
	     */
	    FirebaseService.prototype.asArray = function () {
	        return new firebase_array_1.FirebaseArray(this);
	    };
	    /**
	     * Gets a child Firebase service that represents the data at the given path.
	     * @param path The relative path from this Firebase location to the requested location.
	     * @returns {FirebaseService}
	     */
	    FirebaseService.prototype.child = function (path) {
	        return new FirebaseService(this.firebase.child(path));
	    };
	    FirebaseService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [Object])
	    ], FirebaseService);
	    return FirebaseService;
	}());
	exports.FirebaseService = FirebaseService;
	//# sourceMappingURL=firebase.service.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Rx_1 = __webpack_require__(4);
	/**
	 * A class that defines utility functions that help Wrap the Firebase JavaScript API.
	 */
	var FirebaseUtils = (function () {
	    function FirebaseUtils() {
	    }
	    /**
	     * Wraps the given Firebase call in a Promise.
	     * When the async call returns, the Promise resolves with the callback
	     * arguments in an array.
	     * @param obj The object that the given function should be called on. This is typically your Firebase ref instance.
	     * @param fn The function that should be wrapped.
	     * @param args The Arguments that should be given to Firebase.
	     * @returns {Promise<any[]>}
	     */
	    FirebaseUtils.wrapFirebaseAsyncCall = function (obj, fn, args) {
	        if (args === void 0) { args = []; }
	        args = args.slice();
	        return new Promise(function (resolve, reject) {
	            args.push(callback);
	            function callback(err) {
	                if (err !== null) {
	                    reject(err);
	                }
	                else {
	                    resolve(Array.prototype.slice.call(arguments));
	                }
	            }
	            fn.apply(obj, args);
	        });
	    };
	    /**
	     * Gets an observable that represents the given event name for the internal Firebase instance.
	     * Whenever the event is triggered by the internal Firebase instance, the Observable will resolve with the new data.
	     * This function is useful to map Firebase events to Observables.
	     * When the observable is disposed, the event listener is removed.
	     * @param firebase The Raw Firebase JavaScript API Object.
	     * @param eventName The name of the event that should be listened to.
	     * @returns {Observable<any>}
	     */
	    FirebaseUtils.wrapFirebaseEvent = function (firebase, eventName) {
	        return Rx_1.Observable.create(function (observer) {
	            var callback = firebase.on(eventName, function () {
	                observer.next(Array.prototype.slice.call(arguments));
	            }, function (err) {
	                observer.error(err);
	            });
	            return function () {
	                firebase.off(eventName, callback);
	            };
	        });
	    };
	    return FirebaseUtils;
	}());
	exports.FirebaseUtils = FirebaseUtils;
	//# sourceMappingURL=firebase-utils.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var firebase_service_1 = __webpack_require__(1);
	var Rx_1 = __webpack_require__(4);
	var ArrayValue = (function () {
	    function ArrayValue() {
	    }
	    return ArrayValue;
	}());
	// Polyfill Array.find()
	if (!Array.prototype.find) {
	    Array.prototype.find = function (predicate) {
	        if (this === null) {
	            throw new TypeError('Array.prototype.find called on null or undefined');
	        }
	        if (typeof predicate !== 'function') {
	            throw new TypeError('predicate must be a function');
	        }
	        var list = Object(this);
	        var length = list.length >>> 0;
	        var thisArg = arguments[1];
	        var value;
	        for (var i = 0; i < length; i++) {
	            value = list[i];
	            if (predicate.call(thisArg, value, i, list)) {
	                return value;
	            }
	        }
	        return undefined;
	    };
	}
	// Polyfill for Array.findIndex()
	if (!Array.prototype.findIndex) {
	    Array.prototype.findIndex = function (predicate) {
	        if (this === null) {
	            throw new TypeError('Array.prototype.findIndex called on null or undefined');
	        }
	        if (typeof predicate !== 'function') {
	            throw new TypeError('predicate must be a function');
	        }
	        var list = Object(this);
	        var length = list.length >>> 0;
	        var thisArg = arguments[1];
	        var value;
	        for (var i = 0; i < length; i++) {
	            value = list[i];
	            if (predicate.call(thisArg, value, i, list)) {
	                return i;
	            }
	        }
	        return -1;
	    };
	}
	/**
	 * Defines a class that provides capabilities to synchronize ordered lists for a Firebase Object.
	 *
	 * **Example**:
	 *
	 * ```TypeScript
	 * import {FirebaseService} from 'ng2-firebase/core';
	 *
	 * // Get the Array
	 * var arr = new FirebaseService(
	 *    new Firebase('https://YOUR-FIREBASE-URL.firebaseio-demo.com')
	 * ).asArray();
	 *
	 * // Use Array
	 * ```
	 *
	 * **Angular 2 Example**:
	 *
	 * ```TypeScript
	 * // some.component.ts
	 * import { Component, OnInit, provide } from 'angular2/core';
	 * import { FirebaseArray, FirebaseService, FirebaseServiceFactory } from 'ng2-firebase/core';
	 * import { Observable } from 'rxjs/Rx';
	 *
	 * @@Component({
	 *    // FirebaseServiceFactory is not Implemented yet...
	 *    selector: 'some-component',
	 *
	 *    // Make sure to include the async pipe so that the most recent value
	 *    // is resolved from the data observable.
	 *    template:
	 *      'I have {{users.length}} users!' +
	 *      '<div *ngFor="#user of (users.observable | async)">' +
	 *      '   {{user.name}}' +
	 *      '</div>' +
	 *      '<h2>Users over 18:</h2>' +
	 *      '<div *ngFor="#user of (over18 | async)>' +
	 *      ' {{user.name}}' +
	 *      '</div>' +,
	 *
	 *    // Declare the providers that should be used for the service.
	 *    providers: [
	 *      provide(
	 *          FirebaseArray,
	 *          {
	 *              useValue: new FirebaseService(
	 *                  new Firebase('https://YOUR-FIREBASE-URL.firebaseio-demo.com')
	 *              ).asArray()
	 *          }
	 *      )
	 *    ]
	 * })
	 * export class SomeComponent implements OnInit {
	 *   private users: FirebaseArray;
	 *   private over18: Observable<User>;
	 *
	 *   constructor(users: FirebaseArray) {
	 *      this.users = users;
	 *   }
	 *
	 *   findOver18(): Observable<User> {
	 *      this.over18 = this.users.filter(u => u.age > 18);
	 *   }
	 *
	 *   ngOnInit() {
	 *      findOver18();
	 *   }
	 * }
	 * ```
	 *
	 */
	var FirebaseArray = (function () {
	    /**
	     * Creates a new FirebaseArray using the given FirebaseService.
	     * @param firebaseService
	     */
	    function FirebaseArray(firebaseService) {
	        /**
	         * Whether inner array should be copied when notifying observers.
	         * Defaults to true.
	         * @type {boolean}
	         */
	        this.copyArray = true;
	        /**
	         * @type {boolean}
	         * @private
	         */
	        this._initialized = false;
	        this._subject = new Rx_1.Subject();
	        this._service = firebaseService;
	        this._list = [];
	        this._arr = [];
	        this._init();
	    }
	    /**
	     * Adds the given data to the end of this array.
	     * Returns a promise that represents the async operation.
	     * @param data The data that should be added to the data structure.
	     * @returns {Promise<boolean>}
	     */
	    FirebaseArray.prototype.add = function (data) {
	        if (typeof data === 'undefined' || data === null) {
	            throw new Error('Cannot add nulls to synchronized array as they cannot be reliably tracked. ' +
	                'If you want a "null"-like value, use a special trigger value, such as a custom Unit or Void object.');
	        }
	        return this._service.push(data);
	    };
	    /**
	     * Removes the child at the given index(a.k.a. key) from this array.
	     * @param index The key of the child that should be removed from the data structure.
	     * @returns {Promise<boolean>}
	     */
	    FirebaseArray.prototype.remove = function (index) {
	        if (index === null) {
	            throw new Error('The provided index is invalid. Please make sure that it is in the range of 0 - array.length');
	        }
	        return this._service.remove(index.toString());
	    };
	    /**
	     * Sets the data stored at the given index (a.k.a. key).
	     * @param index The key of the child whose data should be replaced.
	     * @param data The data that the child should be replaced with.
	     * @returns {Promise<boolean>}
	     */
	    FirebaseArray.prototype.set = function (index, data) {
	        if (data.hasOwnProperty('$id')) {
	            delete data.$id;
	        }
	        return this._service.child(index.toString()).set(data);
	    };
	    /**
	     * Gets an observable that resolves with the index of the given key is found.
	     * @param key
	     * @returns {Observable<number>}
	     */
	    FirebaseArray.prototype.indexOfKey = function (key) {
	        return this._subject.map(function (arr) { return FirebaseArray._getPositionFor(key.toString(), arr); }).distinctUntilChanged();
	    };
	    /**
	     * Gets an observable that resolves whenever the index of the given value is found.
	     * @param val
	     * @param fromIndex
	     * @returns {Observable<number>}
	     */
	    FirebaseArray.prototype.indexOf = function (val) {
	        return this.observable.map(function (arr) {
	            return arr.indexOf(val);
	        }).distinctUntilChanged();
	    };
	    /**
	     * Filters each of the elements in the observed arrays based on whether they match the provided comparison function.
	     * @param callback
	     * @param thisArg
	     */
	    FirebaseArray.prototype.filter = function (callback, thisArg) {
	        return this.observable.map(function (arr) {
	            return arr.filter(callback, thisArg);
	        });
	    };
	    /**
	     * Maps each observed array to a new array that is made up of the results of calling the given callback function.
	     * @param callback
	     * @param thisArg
	     */
	    FirebaseArray.prototype.map = function (callback, thisArg) {
	        return this.observable.map(function (arr) { return arr.map(callback, thisArg); });
	    };
	    /**
	     * Returns an observable that resolves whenever a new value is found in the underlying array.
	     * If the value was removed, or was originally not present in the array, `undefined` is returned.
	     * @param callback The function that is used to determine if a value is "found".
	     * @param thisArg The object that the callback should be called on.
	     * @returns {Observable<any>}
	     */
	    FirebaseArray.prototype.find = function (callback, thisArg) {
	        return this.observable.map(function (arr) { return arr.find(callback, thisArg); }).distinctUntilChanged();
	    };
	    /**
	     * Returns an observable that resolves with the index of the item whenever a new value is found in the underlying array.
	     * If the value was removed, or was originally not present in the array, `-1` is returned.
	     * @param callback The function that is used to determine if a value is "found".
	     * @param thisArg The object that the callback should be called on.
	     * @returns {Observable<any>}
	     */
	    FirebaseArray.prototype.findIndex = function (callback, thisArg) {
	        // <any> cast is to get typescript compiler to ignore "incorrect" arguments
	        return this.observable.map(function (arr) { return arr.findIndex(callback, thisArg); }).distinctUntilChanged();
	    };
	    /**
	     * Registers handlers for notification when this array is updated.
	     * @param onNext
	     * @param onError
	     * @param onComplete
	     * @returns {Subscription}
	     */
	    FirebaseArray.prototype.subscribe = function (onNext, onError, onComplete) {
	        return this.observable.subscribe(onNext, onError, onComplete);
	    };
	    Object.defineProperty(FirebaseArray.prototype, "service", {
	        /**
	         * Gets the underlying service for this array.
	         * @returns {FirebaseService}
	         */
	        get: function () {
	            return this._service;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseArray.prototype, "length", {
	        /**
	         * Gets an observable for the length of the array.
	         * @returns {Observable<number>}
	         */
	        get: function () {
	            return this.observable.map(function (a) { return a.length; }).distinctUntilChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseArray.prototype, "array", {
	        /**
	         * Gets the array that is currently stored in this service.
	         * @returns {*[]}
	         */
	        get: function () {
	            return this.copyArray ? FirebaseArray._mapArrayValues(this._list) : this._arr;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseArray.prototype, "observable", {
	        /**
	         * Gets an observable that notifies whenever the underlying array is updated.
	         * @returns {Observable<any>}
	         */
	        get: function () {
	            var _this = this;
	            return this.copyArray ? this._subject.map(FirebaseArray._mapArrayValues) : this._subject.map(function (arr) { return _this._arr; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FirebaseArray._mapArrayValues = function (arr) {
	        return arr.map(function (v) { return v.value; });
	    };
	    /**
	     * @private
	     */
	    FirebaseArray.prototype._init = function () {
	        if (!this._initialized) {
	            this._subscribeToEvent(this._service.childAddedRaw, this._childAdded.bind(this));
	            this._subscribeToEvent(this._service.childRemovedRaw, this._childRemoved.bind(this));
	            this._subscribeToEvent(this._service.childChangedRaw, this._childChanged.bind(this));
	            this._subscribeToEvent(this._service.childMovedRaw, this._childMoved.bind(this));
	            this._initialized = true;
	        }
	    };
	    /**
	     * @param observable
	     * @param reciever
	     * @private
	     */
	    FirebaseArray.prototype._subscribeToEvent = function (observable, reciever) {
	        observable.subscribe(this._wrap(reciever), this._subject.error.bind(this._subject), this._subject.complete.bind(this._subject));
	    };
	    /**
	     * @param func
	     * @returns {function(any[]): undefined}
	     * @private
	     */
	    FirebaseArray.prototype._wrap = function (func) {
	        return function (args) {
	            var child = args[0];
	            func.apply(void 0, [child.val(), child.key()].concat(args));
	        };
	    };
	    /**
	     * @param key
	     * @param list
	     * @returns {number}
	     * @private
	     */
	    FirebaseArray._getPositionFor = function (key, list) {
	        for (var i = 0; i < list.length; i++) {
	            var v = list[i];
	            if (v.id === key) {
	                return i;
	            }
	        }
	        return -1;
	    };
	    /**
	     * @param prevChildKey
	     * @param list
	     * @returns {any}
	     * @private
	     */
	    FirebaseArray._getPositionAfter = function (prevChildKey, list) {
	        if (prevChildKey === null) {
	            return 0;
	        }
	        else {
	            var i = FirebaseArray._getPositionFor(prevChildKey, list);
	            if (i === -1) {
	                return list.length;
	            }
	            else {
	                return i + 1;
	            }
	        }
	    };
	    FirebaseArray.prototype._emit = function () {
	        this._subject.next(this._list);
	    };
	    /**
	     * @param child
	     * @private
	     */
	    FirebaseArray.prototype._childAdded = function (val, key, snap, prevChild) {
	        var value = {
	            value: val,
	            id: key
	        };
	        var pos = FirebaseArray._getPositionAfter(prevChild, this._list);
	        this._applyChildAdded(pos, value);
	    };
	    /**
	     * Applies the child_added event handler logic to the arrays.
	     */
	    FirebaseArray.prototype._applyChildAdded = function (pos, value) {
	        this._list.splice(pos, 0, value);
	        this._arr.splice(pos, 0, value.value);
	        this._emit();
	    };
	    /**
	     *
	     * @param child
	     * @private
	     */
	    FirebaseArray.prototype._childRemoved = function (val, key) {
	        var pos = FirebaseArray._getPositionFor(key, this._list);
	        this._applyChildRemoved(pos);
	    };
	    /**
	     * Applies the child_removed event handler logic to the arrays.
	     */
	    FirebaseArray.prototype._applyChildRemoved = function (pos) {
	        if (pos > -1) {
	            this._list.splice(pos, 1);
	            this._arr.splice(pos, 1);
	            this._emit();
	        }
	    };
	    /**
	     * @param child
	     * @private
	     */
	    FirebaseArray.prototype._childMoved = function (val, key, snap, prevChildKey) {
	        var pos = FirebaseArray._getPositionFor(key, this._list);
	        var newPos = FirebaseArray._getPositionAfter(prevChildKey, this._list);
	        this._applyChildMoved(pos, newPos);
	    };
	    /**
	     * Applies the child_moved event handler logic to the given array.
	     */
	    FirebaseArray.prototype._applyChildMoved = function (pos, newPos) {
	        if (pos > -1) {
	            FirebaseArray._moveValue(this._list, pos, newPos);
	            FirebaseArray._moveValue(this._arr, pos, newPos);
	            this._emit();
	        }
	    };
	    /**
	     * Moves the value in the given array at the given position to the given new position.
	     */
	    FirebaseArray._moveValue = function (arr, pos, newPos) {
	        var data = arr.splice(pos, 1)[0];
	        arr.splice(newPos, 0, data);
	    };
	    /**
	     * @param child
	     * @private
	     */
	    FirebaseArray.prototype._childChanged = function (val, key) {
	        var pos = FirebaseArray._getPositionFor(key, this._list);
	        this._applyChildChanged(pos, val, key);
	    };
	    /**
	     * Applies the child_moved event handler logic to the given array.
	     */
	    FirebaseArray.prototype._applyChildChanged = function (pos, newValue, newKey) {
	        if (pos > -1) {
	            this._list[pos] = {
	                value: newValue,
	                id: newKey
	            };
	            this._arr[pos] = newValue;
	            this._emit();
	        }
	    };
	    FirebaseArray = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
	    ], FirebaseArray);
	    return FirebaseArray;
	}());
	exports.FirebaseArray = FirebaseArray;
	//# sourceMappingURL=firebase-array.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var firebase_service_1 = __webpack_require__(1);
	var firebase_utils_1 = __webpack_require__(3);
	/**
	 * Defines a Firebase Service that provides Auth & Auth features.
	 */
	var FirebaseAuthService = (function () {
	    /**
	     * Initializes a new FirebaseAuthService using the given FirebaseService.
	     * @param firebase
	     */
	    function FirebaseAuthService(firebase) {
	        this._firebase = firebase;
	    }
	    Object.defineProperty(FirebaseAuthService.prototype, "service", {
	        /**
	         * Gets the FirebaseService that this Auth service is using.
	         * @returns {FirebaseService}
	         */
	        get: function () {
	            return this._firebase;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseAuthService.prototype, "firebase", {
	        /**
	         * Gets the internal Firebase JavaScript API Service.
	         * @returns {Firebase}
	         */
	        get: function () {
	            return this.service.firebase;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Authenticates the Firebase client using email & password credentials.
	     * This will start a session that is connected to the FirebaseService.
	     * @param credentials
	     */
	    FirebaseAuthService.prototype.authWithPassword = function (credentials) {
	        return firebase_utils_1.FirebaseUtils.wrapFirebaseAsyncCall(this.firebase, this.firebase.authWithPassword, [credentials])
	            .then(function (args) { return args[1]; });
	    };
	    FirebaseAuthService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
	    ], FirebaseAuthService);
	    return FirebaseAuthService;
	}());
	exports.FirebaseAuthService = FirebaseAuthService;
	//# sourceMappingURL=firebase-auth.service.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var firebase_service_factory_1 = __webpack_require__(8);
	/**
	 * Defines an object that represents configuration for a FirebaseService.
	 */
	var FirebaseConfig = (function () {
	    /**
	     * Creates a new FirebaseConfig object using the given Firebase URL.
	     * @param url The URL that should be used to connect to Firebase.
	     */
	    function FirebaseConfig(url) {
	        this.url = url;
	    }
	    /**
	     * Creates a new Firebase JavaScript API Object from this configuration.
	     * @returns {Firebase}
	     */
	    FirebaseConfig.prototype.createFirebase = function () {
	        return new Firebase(this.url);
	    };
	    /**
	     * Creates a new Firebase Service using the this configuration.
	     */
	    FirebaseConfig.prototype.createService = function () {
	        return firebase_service_factory_1.FirebaseServiceFactory(this.createFirebase());
	    };
	    FirebaseConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [String])
	    ], FirebaseConfig);
	    return FirebaseConfig;
	}());
	exports.FirebaseConfig = FirebaseConfig;
	//# sourceMappingURL=firebase.config.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/firebase/firebase.d.ts"/>
	var firebase_service_1 = __webpack_require__(1);
	/**
	 * Gets the default factory function for FirebaseService objects.
	 *
	 * Usage:
	 *
	 * ```TypeScript
	 * // Make sure you included the Firebase SDK.
	 * import {FirebaseServiceFactory} from 'ng2-firebase/core';
	 * var service = FirebaseServiceFactory(Firebase);
	 * ```
	 *
	 * Semantically, using this function is equivalent to the following statements:
	 *
	 * ```TypeScript
	 * // Make sure you included the Firebase SDK.
	 * import {FirebaseService} from 'ng2-firebase/core';
	 * var firebaseService = new FirebaseService(Firebase);
	 * ```
	 *
	 * @param Firebase
	 * @returns {FirebaseService}
	 * @constructor
	 */
	function FirebaseServiceFactory(Firebase) {
	    return new firebase_service_1.FirebaseService(Firebase);
	}
	exports.FirebaseServiceFactory = FirebaseServiceFactory;
	//# sourceMappingURL=firebase.service.factory.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var firebase_service_1 = __webpack_require__(1);
	var firebase_service_factory_1 = __webpack_require__(8);
	/**
	 * Gets the default Provider for FirebaseService services.
	 * Semantically, using this variable is equivalent to the following statements:
	 *
	 * ```TypeScript
	 * import {FirebaseService, FirebaseServiceFactory} from 'ng2-firebase/core';
	 * var provider = provide(FirebaseService, {useFactory: FirebaseServiceFactory})
	 * ```
	 *
	 * @type {Provider}
	 */
	exports.FirebaseServiceProvider = core_1.provide(firebase_service_1.FirebaseService, {
	    useFactory: firebase_service_factory_1.FirebaseServiceFactory,
	    deps: ['Firebase']
	});
	//# sourceMappingURL=firebase.service.provider.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	if (typeof Firebase === 'undefined') {
	    console.warn('"Firebase" is either not defined or is null. Please make sure that you are including the Firebase SDK script before loading this or related angular2-firebase scripts.');
	}
	/**
	 * Declares a basic provider for the Global Firebase API object that is loaded by the Firebase JavaScript SDK.
	 *
	 * Usage:
	 *
	 * ```TypeScript
	 * import {FirebaseProvider} from 'ng2-firebase/core';
	 *
	 * // Later in the application when you are declaring the providers...
	 *
	 * bootstrap(MyAppComponent, [FirebaseProvider, MyOtherProvider]);
	 * ```
	 *
	 * @type {Provider}
	 */
	exports.FirebaseProvider = core_1.provide('Firebase', {
	    useFactory: function () {
	        if (Firebase === undefined || Firebase === null) {
	            console.error('"Firebase" is either not defined or is null. Please make sure that you are including the Firebase SDK script before loading this or related angular2-firebase scripts.');
	        }
	        return Firebase;
	    }
	});
	//# sourceMappingURL=firebase.provider.js.map

/***/ }
/******/ ])
});
;