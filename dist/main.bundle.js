webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_component__ = __webpack_require__("../../../../../src/app/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_customer_verify_customer_component__ = __webpack_require__("../../../../../src/app/verify-customer/verify-customer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_component__["a" /* LogInComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'verify-customer', component: __WEBPACK_IMPORTED_MODULE_6__verify_customer_verify_customer_component__["a" /* VerifyCustomerComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__["a" /* SignUpComponent */], __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_component__["a" /* LogInComponent */], __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_6__verify_customer_verify_customer_component__["a" /* VerifyCustomerComponent */]];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab {\r\n  /* background-color: red; */\r\n  color: black;\r\n  border-color: black;\r\n}\r\n\r\n/* .tabs-transparent {\r\n  color: pink;\r\n  background-color: white;\r\n} */\r\n\r\n.tab:hover {\r\n  /* color: pink; */\r\n  background-color: #a4bed2;\r\n}\r\n\r\n.tabs .indicator {\r\n  background-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-extended\" style=\"background-color:#0b182a;\">\r\n  <div class=\"container nav-content\">\r\n    <ul class=\"tabs tabs-transparent\">\r\n      <img src=\"./assets/images/facepal_logo.png\" alt=\"Smiley face\" height=\"42\">\r\n      <li class=\"tab\">\r\n        <a routerLink=\"home\">Home</a>\r\n      </li>\r\n      <li *ngIf=\"!isSignIn\" class=\"tab\">\r\n        <a routerLink=\"signup\">Sign Up</a>\r\n      </li>\r\n      <li *ngIf=\"!isSignIn\" class=\"tab\">\r\n        <a routerLink=\"login\">Log In</a>\r\n      </li>\r\n      <li *ngIf=\"isSignIn\" class=\"tab\">\r\n        <a routerLink=\"profile\">Profile</a>\r\n      </li>\r\n\r\n      <li *ngIf=\"isSignIn\" class=\"tab\">\r\n        <a routerLink=\"verify-customer\">Send Money</a>\r\n      </li>\r\n      <li *ngIf=\"isSignIn\" class=\"tab\">\r\n        <a (click)=\"logOut()\">Log Out</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<!--router views-->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-->\r\n<nav class=\"nav-extended\">\r\n  <div class=\"nav-wrapper\">\r\n    <a href=\"#\" class=\"brand-logo\">FacePal</a>\r\n    <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\">\r\n      <i class=\"material-icons\">menu</i>\r\n    </a>\r\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n      <li>\r\n        <a routerLink=\"home\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"logOut()\">Log Out</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"side-nav\" id=\"mobile-demo\">\r\n      <li>\r\n        <a routerLink=\"home\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"logOut()\">Log Out</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"nav-content\">\r\n    <ul class=\"tabs tabs-transparent\">\r\n\r\n      <li *ngIf=\"!isSignIn\" class=\"tab\">\r\n        <a routerLink=\"signup\">Sign Up</a>\r\n      </li>\r\n      <li *ngIf=\"!isSignIn\" class=\"tab\">\r\n        <a routerLink=\"login\">Log In</a>\r\n      </li>\r\n      <li *ngIf=\"isSignIn\" class=\"tab\">\r\n        <a routerLink=\"profile\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"isSignIn\" class=\"tab\">\r\n        <a routerLink=\"verify-customer\">Send Money</a>\r\n      </li>\r\n      <li *ngIf=\"isSignIn\" class=\"tab\">\r\n        <a (click)=\"logOut()\">Log Out</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<!--router views-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'FacePal';
        this.isSignIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['home']);
    };
    AppComponent.prototype.logOut = function () {
        this.isSignIn = false;
        this.router.navigate(['home']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["b" /* routingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_async_local_storage__["a" /* AsyncLocalStorageModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_webcam__["a" /* WebcamModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  padding: 3%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container wow animated fadeIn\">\r\n\r\n  <div class=\"col s12\" style=\"margin-bottom:50px\">\r\n    <div class=\"carousel\">\r\n      <a class=\"carousel-item\" href=\"#three!\">\r\n        <img src=\"./assets/images/Depositphotos_24071337_s-2015.jpg\">\r\n      </a>\r\n      <a class=\"carousel-item\" href=\"#one!\">\r\n        <img src=\"./assets/images/Depositphotos_66269141_s-2015.jpg\">\r\n      </a>\r\n      <a class=\"carousel-item\" href=\"#two!\">\r\n        <img src=\"./assets/images/Depositphotos_66266877_s-2015.jpg\">\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row animated fadeInUp\">\r\n    <div class=\"col s12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content white-text\">\r\n          <span id=\"homeTitle\" class=\"card-title center-align\">\r\n            <img src=\"./assets/images/facepal_logo.png\" alt=\"Smiley face\" height=\"42\">\r\n          </span>\r\n          <div class=\"row center-align\">\r\n            <div class=\"col s12\">\r\n              <p>Combine the security of facial recognition software with electronic payments - all at your fingertips with\r\n                this easy-to-use app!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row center-align\">\r\n            <div class=\"col s12\">\r\n              <a class=\"waves-effect waves-light btn-large\" (click)=\"routeSignUp()\">Sign Up</a>\r\n              <a class=\"waves-effect waves-light btn-large\" (click)=\"routeLogIn()\">Login</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col s12 m6\">\r\n            <h5>Technologies used:</h5>\r\n            <ul class=\"fa-ul\">\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                <a href=\"https://angular.io/\" target=\"_blank\">Angular 5</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                <a href=\"https://www.kairos.com/\" target=\"_blank\">Kairos Face Recognition API</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                <a href=\"https://jqueryvalidation.org/\" target=\"_blank\">jQuery Validate</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                <a href=\"http://materializecss.com/\" target=\"_blank\">Materialize.css</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                <a href=\"http://mynameismatthieu.com/WOW/\" target=\"_blank\">WOW.js</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                <a href=\"http://docs.sequelizejs.com/\" target=\"_blank\">Sequelize</a>\r\n              </li>\r\n\r\n              <li>\r\n                <i class=\"fa-li fa fa-check\"></i>\r\n                <a href=\"https://www.mysql.com/\" target=\"_blank\">MySQL</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col s12 m6\">\r\n            <h5>Built by:</h5>\r\n            <ul class=\"fa-ul\">\r\n              <li>\r\n                <i class=\"fa-li fa fa-github\"></i>\r\n                <a href=\"https://www.github.com/emilyhosoya\" target=\"_blank\">@emilyhosoya</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-github\"></i>\r\n                <a href=\"https://github.com/garviswbs\" target=\"_blank\">@garviswbs</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-github\"></i>\r\n                <a href=\"https://github.com/mkalivod\" target=\"_blank\">@mkalivod</a>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa-li fa fa-github\"></i>\r\n                <a href=\"https://github.com/kennyt85\" target=\"_blank\">@kennyt85</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel();
        setTimeout($('.carousel').carousel('next'), 4000);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        $('.carousel').carousel();
        setInterval(function () { $('.carousel').carousel('next'); }, 4000);
    };
    HomeComponent.prototype.routeSignUp = function () {
        this.router.navigate(["signup"]);
    };
    HomeComponent.prototype.routeLogIn = function () {
        this.router.navigate(["login"]);
    };
    HomeComponent.prototype.autoplay = function () {
        $('.carousel').carousel(('next'), 4000);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.card {\r\n  margin: 5%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m10 offset-m1\">\r\n        <div class=\"card\">\r\n          <div class=\"card-title white-text center-align\">\r\n            <h4>Log In</h4>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <form (ngSubmit)=\"onSubmit()\" #logInForm=\"ngForm\" [ngFormOptions]=\"{updateOn: 'change'}\">\r\n\r\n              <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\">\r\n\r\n              <input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"customer.password\" #password=\"ngModel\">\r\n\r\n              <div class=\"alert alert-danger\" *ngIf=\"isIncorrect\">\r\n                Your password or email is incorrect.\r\n              </div>\r\n\r\n              <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogInComponent = /** @class */ (function () {
    function LogInComponent(httpClient, router, appComponent) {
        this.httpClient = httpClient;
        this.router = router;
        this.appComponent = appComponent;
        this.isIncorrect = false;
        this.customer = {
            email: '',
            password: ''
        };
    }
    LogInComponent.prototype.onSubmit = function () {
        var _this = this;
        //TODO: CHANGE TO './api/customer
        this.httpClient.get('http://localhost:3000/api/customer/' + this.customer.email + "+" + this.customer.password).subscribe(function (data) {
            if (data) {
                _this.appComponent.isSignIn = true;
                _this.appComponent.customer = data;
                _this.router.navigate(['profile']);
            }
            else {
                _this.isIncorrect = true;
            }
        });
    };
    LogInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-log-in',
            template: __webpack_require__("../../../../../src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h6 {\r\n  font-size: 110%;\r\n  text-decoration: underline;\r\n}\r\n\r\nsection {\r\n  margin-top: 40px;\r\n}\r\n\r\nform {\r\n  padding: 3%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\r\n  <div class=\"container\">\r\n    <div id=\"profile-page\" class=\"section\">\r\n      <div id=\"profile-page-header\" class=\"card\">\r\n        <div class=\"card-image waves-effect waves-block waves-light\">\r\n          <img class=\"activator\" src=\"https://images.unsplash.com/photo-1518199117568-a0fc6494fedf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3096e2c38cec09b33cd1a962dfa6130&auto=format&fit=crop&w=1955&q=80\"\r\n            alt=\"user background\">\r\n        </div>\r\n        <figure class=\"card-profile-image\">\r\n          <img src=\"https://cdn3.iconfinder.com/data/icons/black-easy/512/538303-user_512x512.png\" alt=\"profile image\" class=\"circle z-depth-2 responsive-img activator\">\r\n        </figure>\r\n        <div class=\"card-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col s4 offset-s2\">\r\n              <h1 class=\"card-title white-text text-darken-4\">{{customer.firstName}}</h1>\r\n            </div>\r\n            <div class=\"col s5 center-align\">\r\n              <h4 class=\"card-title white-text text-darken-4\">Available Balance:</h4>\r\n              <h3 class=\"white-text\">$ {{customer.availableFunds}}</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <form (ngSubmit)=\"onSubmit()\" #signUpForm=\"ngForm\" [ngFormOptions]=\"{updateOn: 'change'}\">\r\n          <label>First Name:</label>\r\n          <input placeholder=\"First Name\" type=\"text\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\">\r\n          <label>Last Name:</label>\r\n          <input placeholder=\"Last Name\" type=\"text\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\">\r\n          <label>Data Of Birth:</label>\r\n          <input placeholder=\"Date Of Birth\" type=\"date\" name=\"DOB\" [(ngModel)]=\"customer.DOB\" #DOB=\"ngModel\">\r\n          <label>Email:</label>\r\n          <input placeholder=\"Email\" type=\"text\" name=\"email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\">\r\n\r\n          <div *ngIf=\"isMissingField\">\r\n            <h5>Please fill out all fields</h5>\r\n          </div>\r\n          <div *ngIf=\"isMissingPhoto\">\r\n            <h5>Please fill out all fields</h5>\r\n          </div>\r\n          <a class=\"waves-effect waves-light btn\" type=\"button\" (click)=\"takeAPicture()\">Retake Picture</a>\r\n\r\n          <button type=\"submit\" class=\"btn btn-default\">Update Info</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"container animated fadeIn\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-content white-text\">\r\n              <span class=\"card-title\">Recent Activity</span>\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th>Sender</th>\r\n                    <th>Receiver</th>\r\n                    <th>Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tr *ngFor=\"let T of customer.Transactions\">\r\n                  <td>{{T.sender}}</td>\r\n                  <td>{{T.receiver}}</td>\r\n                  <td>$ {{T.amount}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Modal Structure -->\r\n<div id=\"modal1\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <div style=\"text-align:center\">\r\n      <div *ngIf=\"!isPicture\">\r\n        <webcam [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\"></webcam>\r\n        <br/>\r\n        <button id=\"snapshotBtn\" (click)=\"triggerSnapshot();\">Take a Picture</button>\r\n      </div>\r\n\r\n      <div class=\"snapshot\" *ngIf=\"webcamImage && isPicture\">\r\n        <img [src]=\"webcamImage.imageAsDataUrl\" />\r\n        <button (click)=\"isPicture = false\">Retake Picture</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//webcam

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, appComponent, httpClient) {
        this.route = route;
        this.appComponent = appComponent;
        this.httpClient = httpClient;
        this.isPicture = false;
        this.profileImg = '';
        // webcam snapshot trigger
        this.trigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        // latest snapshot
        this.webcamImage = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customer = this.appComponent.customer || this.route.navigate(['signup']);
        this.httpClient.get('http://localHost:3000/api/profile/' + this.customer.email).subscribe(function (data) {
            _this.customer = data;
            _this.appComponent.customer = data;
            console.log(data);
        });
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        $('#modal1').modal();
    };
    ProfileComponent.prototype.retakePicture = function () {
        $('#modal1').modal('open');
    };
    ProfileComponent.prototype.onSubmit = function () {
        this.httpClient.put('http://localHost:3000/api/updateCustomer', this.customer).subscribe(function (data) {
            console.log("successfully create customer");
        });
    };
    ProfileComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
        this.isPicture = true;
    };
    ProfileComponent.prototype.handleImage = function (webcamImage) {
        console.info("received webcam image", webcamImage);
        this.webcamImage = webcamImage;
        this.profileImg = this.webcamImage.imageAsDataUrl.split(",")[1];
    };
    Object.defineProperty(ProfileComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    margin: 10%;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col s12 m10 offset-m1\">\r\n      <div class=\"card\">\r\n        <div class=\"card-title white-text center-align\">\r\n          <h4>Create Your Profile</h4>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <form (ngSubmit)=\"onSubmit()\" #signUpForm=\"ngForm\" [ngFormOptions]=\"{updateOn: 'change'}\">\r\n\r\n            <input placeholder=\"First Name\" type=\"text\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\">\r\n\r\n            <input placeholder=\"Last Name\" type=\"text\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\">\r\n\r\n            <input placeholder=\"Date Of Birth\" type=\"date\" name=\"DOB\" [(ngModel)]=\"customer.DOB\" #DOB=\"ngModel\">\r\n\r\n            <input placeholder=\"Email\" type=\"text\" name=\"email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\">\r\n\r\n            <input placeholder=\"Password\" type=\"password\" name=\"password\" [(ngModel)]=\"customer.password\" #password=\"ngModel\">\r\n\r\n            <div *ngIf=\"isMissingFields\">\r\n              <h5>Please fill out all fields.</h5>\r\n            </div>\r\n            <div *ngIf=\"isMissingPhoto\">\r\n              <h5>Please take a picture.</h5>\r\n            </div>\r\n            <a class=\"waves-effect waves-light btn\" type=\"button\" (click)=\"takeAPicture()\">Take Picture</a>\r\n\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Structure -->\r\n<div id=\"modal1\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <div style=\"text-align:center\">\r\n      <div *ngIf=\"!isPicture\">\r\n        <webcam [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\"></webcam>\r\n        <br/>\r\n        <button id=\"snapshotBtn\" (click)=\"triggerSnapshot();\">Take a Picture</button>\r\n      </div>\r\n\r\n      <div class=\"snapshot\" *ngIf=\"webcamImage && isPicture\">\r\n        <img [src]=\"webcamImage.imageAsDataUrl\" />\r\n        <button (click)=\"isPicture = false\">Retake Picture</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Webcam

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(httpClient, router, appComponent) {
        this.httpClient = httpClient;
        this.router = router;
        this.appComponent = appComponent;
        this.profileImage = '';
        this.isMissingFields = false;
        this.isMissingPhoto = false;
        this.isPicture = false;
        this.customer = {
            firstName: '',
            lastName: '',
            DOB: '',
            email: '',
            password: ''
        };
        // webcam snapshot trigger
        this.trigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        // latest snapshot
        this.webcamImage = null;
    }
    SignUpComponent.prototype.ngAfterViewInit = function () {
        $('#modal1').modal();
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isMissingFields, this.isMissingPhoto = false;
        var inputs = $("input");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                this.isMissingFields = true;
                break;
            }
            else {
                this.isMissingFields = false;
            }
        }
        if (this.profileImage === '') {
            this.isMissingPhoto = true;
        }
        if (!this.isMissingFields && !this.isMissingPhoto) {
            //TODO: DELETE localhost:3000 when deploy to heroku
            this.httpClient.post('http://localHost:3000/api/customer', this.customer).subscribe(function (data) {
                _this.onEnroll();
                _this.appComponent.isSignIn = true;
                _this.appComponent.customer = data;
                _this.router.navigate(['profile']);
            });
        }
    };
    SignUpComponent.prototype.takeAPicture = function () {
        $('#modal1').modal('open');
    };
    SignUpComponent.prototype.onEnroll = function () {
        var request = new XMLHttpRequest();
        request.open("POST", "https://api.kairos.com/enroll");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("app_id", "299078c0");
        request.setRequestHeader("app_key", "0004235442d8fe37c6a315b2de0a40e8");
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log("Status:", this.status);
                console.log("Headers:", this.getAllResponseHeaders());
                console.log("Body:", this.responseText);
            }
        };
        var body = {
            'image': this.profileImage,
            'subject_id': this.customer.firstName + this.customer.lastName,
            'gallery_name': "FirstGallery",
        };
        request.send(JSON.stringify(body));
    };
    SignUpComponent.prototype.triggerSnapshot = function () {
        this.isPicture = true;
        this.trigger.next();
    };
    SignUpComponent.prototype.handleImage = function (webcamImage) {
        console.info("received webcam image", webcamImage);
        this.webcamImage = webcamImage;
        this.profileImage = this.webcamImage.imageAsDataUrl.split(",")[1];
    };
    Object.defineProperty(SignUpComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/verify-customer/verify-customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verify-customer/verify-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col s12 m10 offset-m1\">\r\n      <div class=\"card\">\r\n        <div class=\"card-title white-text center-align\">\r\n          <h4>Send Money</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <form (ngSubmit)=\"onSubmit()\" #logInForm=\"ngForm\" [ngFormOptions]=\"{updateOn: 'change'}\">\r\n            <input type=\"text\" placeholder=\"Payee Email\" name=\"email\" [(ngModel)]=\"transaction.receiver\" #email=\"ngModel\">\r\n\r\n            <input id=\"amount\" type=\"number\" name=\"amount\" placeholder=\"$\" [(ngModel)]=\"transaction.amount\" #amount=\"ngModel\">\r\n\r\n            <div class=\"alert alert-danger\" *ngIf=\"!isUser\">\r\n              <h5>User doesn't exist.</h5>\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!isFunds\">\r\n              <h5>Not Enough Funds.</h5>\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!isVerified\">\r\n              <h5>Does not recognize.</h5>\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"verifyImage==''\">\r\n              <h5>Please take a picture.</h5>\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"isMissingFields\">\r\n              <h5>Please fill out all fields</h5>\r\n            </div>\r\n\r\n            <a class=\"waves-effect waves-light btn\" type=\"button\" (click)=\"takeAPicture()\">Lets verify!</a>\r\n\r\n            <button type=\"submit\" class=\"btn btn-default\">Send</button>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal Structure -->\r\n<div id=\"modal1\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <div style=\"text-align:center\">\r\n      <div *ngIf=\"!isPicture\">\r\n        <button id=\"snapshotBtn\" (click)=\"triggerSnapshot()\">Verify!!</button>\r\n        <webcam [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\"></webcam>\r\n      </div>\r\n\r\n      <div class=\"snapshot\" *ngIf=\"webcamImage && isPicture\">\r\n        <img [src]=\"webcamImage.imageAsDataUrl\" />\r\n        <button (click)=\"isPicture = false\">Retake Picture</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/verify-customer/verify-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//webcam


var confidenceNumber = 0;
var VerifyCustomerComponent = /** @class */ (function () {
    function VerifyCustomerComponent(httpClient, appComponent, router) {
        this.httpClient = httpClient;
        this.appComponent = appComponent;
        this.router = router;
        this.verifyImage = '';
        this.isPicture = false;
        this.isFunds = true;
        this.isUser = true;
        this.isVerified = true;
        this.isMissingFields = false;
        this.transaction = {
            sender: '',
            receiver: '',
            amount: '',
            CustomerId: 0,
        };
        // webcam snapshot trigger
        this.trigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        // latest snapshot
        this.webcamImage = null;
    }
    VerifyCustomerComponent.prototype.ngAfterViewInit = function () {
        $('#modal1').modal();
    };
    VerifyCustomerComponent.prototype.ngOnInit = function () {
        this.customer = this.appComponent.customer || this.router.navigate(['signup']);
        this.transaction.sender = this.customer.email;
        this.transaction.CustomerId = this.customer.id;
    };
    VerifyCustomerComponent.prototype.takeAPicture = function () {
        $('#modal1').modal('open');
    };
    VerifyCustomerComponent.prototype.triggerSnapshot = function () {
        this.isPicture = true;
        this.trigger.next();
        this.getConfidenceNumber();
    };
    VerifyCustomerComponent.prototype.handleImage = function (webcamImage) {
        this.webcamImage = webcamImage;
        this.verifyImage = this.webcamImage.imageAsDataUrl.split(",")[1];
    };
    Object.defineProperty(VerifyCustomerComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    VerifyCustomerComponent.prototype.onSubmit = function () {
        var _this = this;
        var inputs = $("input");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                this.isMissingFields = true;
                break;
            }
        }
        if (confidenceNumber > 0.6 && !this.isMissingFields) {
            //check to see if there are enough funds
            if (this.customer.availableFunds >= this.transaction.amount) {
                this.customer.availableFunds -= +this.transaction.amount;
                console.log(this.transaction);
                //update receiver fund
                this.httpClient.put('http://localHost:3000/api/addFunds', { 'email': this.transaction.receiver, 'amount': this.transaction.amount }).subscribe(function (receiver) {
                    console.log('updated receiver funds');
                    //TODO: DELETE localhost:3000 when deploy to heroku
                    //adding transaction to sender
                    _this.httpClient.post('http://localHost:3000/api/transaction/:', _this.transaction).subscribe(function (data) {
                        console.log("add transaction to sender.");
                    }, function (error) { return console.log(error); });
                    //adding transaction to receiver
                    _this.transaction.CustomerId = receiver.id;
                    _this.httpClient.post('http://localHost:3000/api/transaction/:', _this.transaction).subscribe(function (data) {
                        console.log("added transaction to receiver.");
                    }, function (error) { return console.log(error); });
                    // update sender fund
                    _this.httpClient.put('http://localHost:3000/api/subtractFunds', { 'email': _this.transaction.sender, 'amount': _this.transaction.amount }).subscribe(function (sender) {
                        console.log(sender);
                        _this.appComponent.customer = sender;
                        _this.router.navigate(['profile']);
                    }, function (error) { return console.log(error); });
                }, function (error) {
                    console.log('User not found.', error);
                    _this.isUser = false;
                });
            }
            else {
                this.isFunds = false;
            }
        }
        else {
            this.isVerified = false;
        }
    };
    VerifyCustomerComponent.prototype.getConfidenceNumber = function () {
        var request = new XMLHttpRequest();
        request.open("POST", "https://api.kairos.com/verify");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("app_id", "299078c0");
        request.setRequestHeader("app_key", "0004235442d8fe37c6a315b2de0a40e8");
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log("Status:", this.status);
                console.log("Headers:", this.getAllResponseHeaders());
                var res = JSON.parse(this.responseText);
                console.log("Body:", res);
                console.log(res.images[0].transaction.confidence);
                confidenceNumber = res.images[0].transaction.confidence;
            }
        };
        var body = {
            'image': this.verifyImage,
            'subject_id': this.customer.firstName + this.customer.lastName,
            'gallery_name': "FirstGallery",
        };
        request.send(JSON.stringify(body));
    };
    VerifyCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verify-customer',
            template: __webpack_require__("../../../../../src/app/verify-customer/verify-customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/verify-customer/verify-customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], VerifyCustomerComponent);
    return VerifyCustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map