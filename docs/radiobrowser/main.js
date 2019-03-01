(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/app/router.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _new_station_new_station_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-station/new-station.component */ "./src/app/new-station/new-station.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _stations_stations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stations/stations.component */ "./src/app/stations/stations.component.ts");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faqs/faqs.component */ "./src/app/faqs/faqs.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_station_player_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/station-player.service */ "./src/app/shared/station-player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _stations_stations_component__WEBPACK_IMPORTED_MODULE_12__["StationsComponent"],
                _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__["FaqsComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _new_station_new_station_component__WEBPACK_IMPORTED_MODULE_10__["NewStationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["PaginatorModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                _router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            ],
            providers: [_shared_station_player_service__WEBPACK_IMPORTED_MODULE_15__["StationPlayerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/faqs/faqs.component.css":
/*!*****************************************!*\
  !*** ./src/app/faqs/faqs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcXMvZmFxcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faqs/faqs.component.html":
/*!******************************************!*\
  !*** ./src/app/faqs/faqs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <h1>FAQs</h1>\n  <p>This FAQ will grow as time goes by. Every question you ask in emails will get added here.</p>\n\n  <p-accordion>\n    <p-accordionTab header=\"How do I play stations?\">\n      <p>To play the stations, you need some media player software like:<p>\n      <ul>\n        <li>Winamp (Windows, OS X)</li>\n        <li> VLC (Windows, Linux, Android, OS X)</li>\n        <li>Clementine (Windows, Linux, OS X)</li>\n        <li>many many more...</li>\n        <li>yes, maybe Windows Media Player works too :)</li>\n      </ul>\n    </p-accordionTab>\n    <p-accordionTab header=\"Can I contribute?\">\n      <p>Please help by fixing stations in the tab \"broken\". The stations there do not work at the present time.<br>\n      If you do not know how to do that, please have a look at the tab \"improve\", and add more information to the stations like tags or country.<br>\n        If you find bugs in this webpage, report them to <a href=\"https://github.com/segler-alex/radiobrowser\" target=\"_blank\">Github</a><br>\n        If you find bugs in the webservice API, report them to <a href=\"https://github.com/segler-alex/radiobrowser-api\" target=\"_blank\">Github</a></p>\n    </p-accordionTab>\n    <p-accordionTab header=\"Why is my click not counted?\">\n      <p>I count only one click per ip aliress per station a day. Some people were clicking their favourite station 100s of times every day by using the programmers API.</p>\n    </p-accordionTab>\n    <p-accordionTab header=\"How often is every station checked?\">\n      <p>It depends on the overall number of stations in the database and if the station is currently marked as broken. Currently a cron job is run every 10 minutes which checks 50 working stations and 10 broken stations.</p>\n    </p-accordionTab>\n    <p-accordionTab header=\"In what order are the stations checked?\">\n      <p>The stations that were not checked for the longest time are checked first.</p>\n    </p-accordionTab>\n    <p-accordionTab header=\"Why are some stations marked as broken even when they are not?\">\n      <p>This can have multiple causes:</p>\n      <ul>\n        <li>Legal restrictions:<ul>\n          <li>There may be some countries which have legal restrictions prohibiting your favourite station from broadcasting worldwide. It has to be possible to connect to it from my server which is located in Germany.</li>\n        </ul></li>\n        <li>High Costs:<ul>\n          <li>Some others would allow global broadcast but let the stations pay huge amounts of money to copyright owners if they want to do that. Please talk to your station or your local political representative to ensure the freedom of global broadcasting.</li>\n        </ul></li>\n        <li>Status not up to date:<ul>\n          <li>Sometimes streams go down for some time. If the automatic check happens to be there at this exact time, they will be marked as broken. It will take some time that this station is checked again and marked as usable.</li>\n        </ul></li>\n        <li>Bugs:<ul>\n          <li>My program has a BUG :) If you think that is the case, please drop me a note or if you are a programmer, fix it on github.</li>\n        </ul></li>\n      </ul>\n    </p-accordionTab>\n    <p-accordionTab header=\"When will stations get deleted?\">\n      <p>There are 2 cases in which stations will get deleted automatically:</p>\n      <ul>\n        <li>New stations that never worked will get deleted after 3 days.</li>\n        <li>Stations that did work at some point, but have not been working for at least 30 days now will get deleted.</li>\n      </ul>\n    </p-accordionTab>\n    <p-accordionTab header=\"What is cached?\">\n      <p>The list of tags and the list of languages are calculated from the data. They are refreshed every 60 seconds.</p>\n    </p-accordionTab>\n    <p-accordionTab header=\"I want to setup my own radiobrowser api server. How do I do that?\">\n      <p>For now just look at the README at\n        <a target=\"_blank\" href=\"https://github.com/segler-alex/radiobrowser-api\">\n          radiobrowser-api\n        </a>.</p>\n    </p-accordionTab>\n    <p-accordionTab header=\"Project Structure\">\n      <ul>\n        <li><a href=\"https://github.com/segler-alex/radiobrowser-api\">radiobrowser-api</a>\n        <ul>\n          <li>Language: PHP<br>\n            Provides API documented at <a href=\"/webservice\">docs page</a>\n          </li>\n        </ul></li>\n      </ul>\n      <ul>\n        <li><a href=\"https://github.com/segler-alex/radiobrowser\">radiobrowser</a>\n        <ul>\n          <li>Language: HTML, Javascript, Angular 1<br>\n            Basic web page to list, play and ali stations. Communicate to radiobrowser-api through REST requests.\n          </li>\n        </ul></li>\n      </ul>\n      <ul>\n        <li><a href=\"https://github.com/segler-alex/stream-check-rust\">stream-check</a>\n        <ul>\n          <li>Language: Rust<br>\n            Depends on: av-stream-info<br>\n            Check streams every 24 hours for metadata and if they are still online. Save the data to the database.<br>\n            Remove broken stations after some time.\n          </li>\n        </ul>\n        </li>\n      </ul>\n      <ul>\n        <li><a href=\"https://github.com/segler-alex/radiobrowser-cleanup-tasks-rust\">radiobrowser-cleanup-tasks</a>\n        <ul>\n          <li>Language: Rust<br>\n            Refresh the caches.\n          </li>\n        </ul>\n        </li>\n\n      </ul>\n      <ul>\n        <li><a href=\"https://github.com/segler-alex/av-stream-info-rust\">av-stream-check</a>\n        <ul>\n          <li>Language: Rust<br>\n            Type: Library<br>\n            Repository: <a href=\"https://crates.io/crates/av-stream-info-rust\">crates.io</a><br>\n            Depends on: playlist-decoder<br>\n            Library that checks audio and video streams and extracts metadata.\n          </li>\n        </ul>\n        </li>\n      </ul>\n      <ul>\n        <li><a href=\"https://github.com/segler-alex/playlist-decoder-rust\">playlist-decoder</a>\n        <ul>\n          <li>Language: Rust<br>\n            Type: Library<br>\n            Repository: <a href=\"https://crates.io/crates/playlist-decoder\">crates.io</a><br>\n            Library that decodes various playlist formats (M3U,PLS,XSPF,)\n          </li>\n        </ul>\n        </li>\n      </ul>\n    </p-accordionTab>\n  </p-accordion>\n  <br>\n</div>\n\n"

/***/ }),

/***/ "./src/app/faqs/faqs.component.ts":
/*!****************************************!*\
  !*** ./src/app/faqs/faqs.component.ts ***!
  \****************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faqs',
            template: __webpack_require__(/*! ./faqs.component.html */ "./src/app/faqs/faqs.component.html"),
            styles: [__webpack_require__(/*! ./faqs.component.css */ "./src/app/faqs/faqs.component.css")]
        })
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#feature {\n  height: calc(100vh);\n  background-size: 150%;\n  background-position: -20vw -30vw;\n  background-repeat: no-repeat;\n  background-color: black;\n}\n#feature.image0 {\n  background-image: url('/assets/firdaus-roslan-596546-unsplash.jpg');\n}\n#feature.image1 {\n  background-image: url('/assets/ben-koorengevel-223854-unsplash.jpg');\n}\n#feature.image2 {\n  background-image: url('/assets/ryan-stefan-473230-unsplash.jpg');\n}\n#feature.image3 {\n  background-image: url('/assets/luca-volpe-1098844-unsplash.jpg');\n}\n#feature.image4 {\n  background-image: url('/assets/alex-kuk-1253621-unsplash.jpg');\n}\n#search {\n  position: absolute;\n  bottom: 100px;\n  left: 20px;\n  z-index: 2;\n}\n#search h1 {\n  color: black;\n  max-width: 400px;\n  background-color: white;\n  padding: 10px 20px;\n  text-align: center;\n  font-size: 50px;\n  margin: 0;\n}\n.form {\n  background-color: rgba(255,255,255,0.3);\n  display: inline-block;\n  padding: 20px;\n}\n.searchItem {\n  display: flex;\n  align-items: center;\n  height: 50px;\n}\n.searchItem img {\n  max-width: 50px;\n  max-height: 50px;\n  margin-right: 10px;\n}\n.searchItem div {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.form button {\n  height: 50px;\n  border: none;\n  border-radius: 0;\n  display: inline-block;\n  vertical-align: middle;\n  background-color: black;\n  color: white;\n  padding: 0 20px;\n  font-size: 20px;\n  font-weight: 100;\n}\n#stats {\n  max-width: 800px;\n  margin: auto;\n  text-align: center;\n}\n#stats i {\n  margin: auto;\n  display: flex;\n  font-size: 40px;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  height: 80px;\n  background-color: black;\n  border-radius: 100%;\n  color: white;\n  margin-bottom: 10px;\n}\n#stats p:first-of-type {\n  color: grey;\n  font-size: 30px;\n  margin: 0;\n}\n#stats p:last-of-type {\n  margin: 0;\n  margin-top: 10px;\n}\n.container {\n  max-width: 1000px;\n  margin: auto;\n}\n#apps {\n  max-width: 1000px;\n  margin: auto;\n}\n#apps a {\n  background-color: black;\n  color: white;\n  border-radius: 100%;\n  padding: 5px;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 10px 5px;\n}\n.app .wrapper {\n  text-align: center;\n  margin: 10px;\n}\n.app .border {\n  border: 1px solid black;\n  border-top: none;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.app p {\n  margin: 0;\n}\n.app .name {\n  padding: 10px 0;\n}\n.app .desc {\n  font-size: 12px;\n  font-weight: 100;\n}\n.icon {\n  background-color: rgba(214, 220, 228, 255);\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border: 1px solid black;\n  border-bottom: none;\n  padding: 30px 0;\n  text-align: center;\n}\n.app a:hover {\n  opacity: 0.8;\n}\n.icon img {\n  height: 60px;\n  margin: auto;\n  display: block;\n  max-width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxvRUFBb0U7Q0FDckU7QUFDRDtFQUNFLHFFQUFxRTtDQUN0RTtBQUNEO0VBQ0UsaUVBQWlFO0NBQ2xFO0FBQ0Q7RUFDRSxpRUFBaUU7Q0FDbEU7QUFDRDtFQUNFLCtEQUErRDtDQUNoRTtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztDQUNaO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0NBQ1g7QUFDRDtFQUNFLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0NBQ1g7QUFDRDtFQUNFLFVBQVU7RUFDVixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtDQUNoQztBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLDJDQUEyQztFQUMzQyw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmZWF0dXJlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjB2dyAtMzB2dztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4jZmVhdHVyZS5pbWFnZTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZmlyZGF1cy1yb3NsYW4tNTk2NTQ2LXVuc3BsYXNoLmpwZycpO1xufVxuI2ZlYXR1cmUuaW1hZ2UxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2Jlbi1rb29yZW5nZXZlbC0yMjM4NTQtdW5zcGxhc2guanBnJyk7XG59XG4jZmVhdHVyZS5pbWFnZTIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvcnlhbi1zdGVmYW4tNDczMjMwLXVuc3BsYXNoLmpwZycpO1xufVxuI2ZlYXR1cmUuaW1hZ2UzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2x1Y2Etdm9scGUtMTA5ODg0NC11bnNwbGFzaC5qcGcnKTtcbn1cbiNmZWF0dXJlLmltYWdlNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9hbGV4LWt1ay0xMjUzNjIxLXVuc3BsYXNoLmpwZycpO1xufVxuI3NlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDBweDtcbiAgbGVmdDogMjBweDtcbiAgei1pbmRleDogMjtcbn1cbiNzZWFyY2ggaDEge1xuICBjb2xvcjogYmxhY2s7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW46IDA7XG59XG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnNlYXJjaEl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uc2VhcmNoSXRlbSBpbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZWFyY2hJdGVtIGRpdiB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4jc3RhdHMge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzdGF0cyBpIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI3N0YXRzIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbn1cbiNzdGF0cyBwOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuI2FwcHMge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuI2FwcHMgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDEwcHggNXB4O1xufVxuLmFwcCAud3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmFwcCAuYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5hcHAgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5hcHAgLm5hbWUge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uYXBwIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjIwLCAyMjgsIDI1NSk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcCBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmljb24gaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"feature\" class=\"image{{randomImg}}\">\n  <div id=\"search\">\n    <h1>Find a Station</h1>\n    <div class=\"form\">\n      <!--<p-autoComplete-->\n        <!--[(ngModel)]=\"searchText\"-->\n        <!--[suggestions]=\"searchResults\"-->\n        <!--field=\"name\"-->\n        <!--(completeMethod)=\"getSearchResults($event)\"-->\n      <!--&gt;-->\n        <!--<ng-template let-searchItem pTemplate=\"item\">-->\n          <!--<div class=\"ui-helper-clearfix searchItem\">-->\n            <!--<img src=\"{{searchItem.favicon}}\">-->\n            <!--<div>{{searchItem.name}}</div>-->\n          <!--</div>-->\n        <!--</ng-template>-->\n      <!--</p-autoComplete>-->\n\n      <input\n        placeholder=\"Station name\"\n        type=\"text\"\n        pInputText\n        [(ngModel)]=\"searchText\"\n        (keyup.enter)=\"goToStations()\">\n\n      <!--<p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterBy\"></p-dropdown>-->\n      <button (click)=\"goToStations()\">Search</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"heading\">\n  <p>What We Offer</p>\n  <h1>CURRENT STATISTICS</h1>\n</div>\n\n<div id=\"stats\" class=\"ui-g\">\n  <div class=\"ui-g-3\">\n    <i class=\"fas fa-broadcast-tower\"></i>\n    <p *ngIf=\"stats !== undefined\">{{numberWithCommas(stats.stations)}}</p>\n    <p>Stations</p>\n  </div>\n  <div class=\"ui-g-3\">\n    <i class=\"fas fa-tags\"></i>\n    <p *ngIf=\"stats !== undefined\">{{numberWithCommas(stats.tags)}}</p>\n    <p>Tags</p>\n  </div>\n  <div class=\"ui-g-3\">\n    <i class=\"fas fa-globe\"></i>\n    <p *ngIf=\"stats !== undefined\">{{numberWithCommas(stats.countries)}}</p>\n    <p>Countries</p>\n  </div>\n  <div class=\"ui-g-3\">\n    <i class=\"fas fa-volume-up\"></i>\n    <p *ngIf=\"stats !== undefined\">{{numberWithCommas(stats.languages)}}</p>\n    <p>Languages</p>\n  </div>\n</div>\n\n<div class=\"invert\">\n  <div class=\"heading\">\n    <p>About the API</p>\n    <h1>Free For Everyone!</h1>\n  </div>\n  <div class=\"container\">\n    <p>• Everyone can use this station board in their software freely. Just have a look at the API documentation.<p>\n    <p>• Everyone is free to use the collected data (station names, tags, links to stream, links to homepages, language, country, state) in their works.</p>\n    <p>• I give all the rights I have at the accumulated data to the public domain.</p>\n    <p>• A daily backup of the MariaDB tables is at www.radio-browser.info/backups/ and latest.</p>\n  </div>\n</div>\n\n<div class=\"heading\">\n  <p>Get Involved</p>\n  <h1>Available Projects</h1>\n  <p>If you know an app that is using this service which is not listed here, please drop me a note. </p>\n</div>\n\n<div id=\"apps\" class=\"ui-g\">\n  <div class=\"ui-g-3 app\" *ngFor=\"let app of applications\">\n    <div class=\"wrapper\">\n      <div class=\"icon\">\n        <img src=\"{{app.icon}}\">\n      </div>\n      <div class=\"border\">\n        <p class=\"name\">{{app.name}}</p>\n        <p class=\"desc\">{{app.description}}</p>\n        <div *ngIf=\"app.hasOwnProperty('availability') && app.link !== undefined\">\n          <span *ngFor=\"let availability of app.availability; index as i\">\n            <a *ngIf=\"availability !== 'fab fa-sourceforge'\" target=\"_blank\" href=\"{{app.link[i]}}\"><i class=\"{{availability}}\"></i></a>\n            <a *ngIf=\"availability === 'fab fa-sourceforge'\" target=\"_blank\" href=\"{{app.link[i]}}\">sf</a>\n          </span>\n        </div>\n        <div *ngIf=\"!app.hasOwnProperty('availability') && app.link !== undefined\">\n          <a href=\"{{app.link[0]}}\" target=\"_blank\"><i class=\"fas fa-download\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui-g-3\">\n    <p>... and this website!</p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, router) {
        this.http = http;
        this.router = router;
        this.randomImg = this.randomIntFromInterval(0, 4);
        this.stats = {
            countries: 'Loading...',
            languages: 'Loading...',
            stations: 'Loading...',
            tags: 'Loading...'
        };
        this.searchResults = [];
        this.applications = [
            {
                icon: 'https://gitlab.gnome.org/GNOME/rhythmbox/raw/master/data/icons/hicolor/256x256/apps/rhythmbox.png',
                name: 'Rhythmbox-Radio-Browser',
                description: 'A plugin for Rhythmbox',
                link: ['https://www.programmierecke.net/programmed/rhythmbox-radio-browser.html']
            },
            {
                icon: 'https://gitlab.gnome.org/GNOME/rhythmbox/raw/master/data/icons/hicolor/256x256/apps/rhythmbox.png',
                name: 'Rhythmbox-Radio-Browser',
                description: 'GTK Fork for Rhythmbox',
                link: ['https://github.com/fossfreedom/radio-browser']
            },
            {
                icon: 'https://odio.io/imgs/logo_nav.png',
                name: 'Odio',
                description: 'GUI Player for Windows, Mac, Linux',
                link: ['https://odio.io/']
            },
            {
                icon: 'http://milki.include-once.org/streamtuner2/logo.png',
                name: 'StreamTuner2',
                description: 'Contributed Plugin',
                link: ['http://milki.include-once.org/streamtuner2/']
            },
            {
                icon: 'https://lh3.googleusercontent.com/ec5UdKD2rQi9j1Wc09B1-yTzeh2bb8eMXcRtI6NW7JDnciuoHa8FLRRahdPFsqOcLqM=s360-rw',
                name: 'RadioDroid',
                description: 'Android Application',
                availability: ['fab fa-google-play', 'fab fa-android', 'fab fa-github-square'],
                link: [
                    'https://play.google.com/store/apps/details?id=net.programmierecke.radiodroid2',
                    'https://f-droid.org/packages/net.programmierecke.radiodroid2/',
                    'https://github.com/segler-alex/RadioDroid'
                ]
            },
            {
                icon: 'https://www.b2b.satking.de/media/image/af/81/6c/dreambox_logo_grau.png',
                name: 'InternetRadio Plugin E2',
                description: 'DreamBox Plugin',
                link: ['https://dreambox.de/board/index.php?thread/16645-e2-plugin-internetradio-mit-musik-visualisierung-und-webinterface/&postID=111994#post111994']
            },
            {
                icon: 'https://lh3.googleusercontent.com/H2o1av-P8mgq3UGB5JgttKeaqaEadM2Fxh4nnro5r-TgJvW1DsM7ch43Zm6uzuToaOAi=s360-rw',
                name: 'Musicbox',
                description: 'Android Application',
                link: ['https://play.google.com/store/apps/details?id=com.humbergsoftware.musicbox.androidapp']
            },
            {
                icon: 'https://raw.githubusercontent.com/haecker-felix/gradio/master/data/icons/hicolor/256x256/apps/de.haeckerfelix.gradio.png',
                name: 'Gradio',
                description: 'Linux Application',
                link: ['https://github.com/haecker-felix/gradio']
            },
            {
                icon: 'https://kodi.tv/sites/default/themes/kodi/icon.png',
                name: 'Radio-Browser',
                description: 'Kodi/XBMC Plugin',
                availability: ['fas fa-download', 'fab fa-github-square'],
                link: [
                    'https://kodi.tv/addon/music-add-ons-plugins/radio-browserinfo',
                    'https://github.com/segler-alex/kodi-radio-browser'
                ]
            },
            {
                icon: 'https://image.flaticon.com/icons/png/512/70/70776.png',
                name: 'NetRadio',
                description: 'Windows Application',
                link: ['https://archive.codeplex.com/?p=netradio']
            },
            {
                icon: 'https://extensions.gnome.org/extension-data/icons/icon_836_zlraRvL.png',
                name: 'Internet Radio',
                description: 'GNOME Shell Radio Plugin',
                availability: ['fas fa-download', 'fab fa-github-square'],
                link: [
                    'https://extensions.gnome.org/extension/836/internet-radio/',
                    'https://github.com/hslbck/gnome-shell-extension-radio'
                ]
            },
            {
                icon: 'https://cdn.androidheadlines.com/wp-content/uploads/2014/01/Jolla-Sailfish.jpg',
                name: 'AllRadio',
                description: 'Jolla / Sailfish Application',
                availability: ['fas fa-download', 'fab fa-github-square'],
                link: [
                    'https://nesnomis.wordpress.com/sailfishosjolla/allradio/',
                    'https://github.com/nesnomis/harbour-allradio'
                ]
            },
            {
                icon: 'https://raw.githubusercontent.com/Pext/Pext/master/logo.png',
                name: 'RadioBrowser Module',
                description: 'RadioBrowser module for Pext',
                link: ['https://github.com/Pext/pext_module_radio']
            },
            {
                icon: 'https://radiolise.gitlab.io/img/logo.png',
                name: 'Radio-li-se',
                description: 'A beautiful web based client',
                link: ['https://radiolise.gitlab.io/']
            },
            {
                icon: 'https://bemba.surge.sh/assets/png/192.png',
                name: 'Radio Bempa',
                description: 'A nice web based client',
                link: ['https://bemba.surge.sh/']
            },
            {
                icon: 'https://www.b2b.satking.de/media/image/af/81/6c/dreambox_logo_grau.png',
                name: 'MusicCenter',
                description: 'For DreamOS enigma2',
                link: ['https://board.dreambox.tools/wbb/index.php?thread/9066-musiccenter-9-1-r0-musik-plugin-10-12-2017/&postID=169674#post169674']
            },
            {
                icon: 'https://image.flaticon.com/icons/png/512/70/70776.png',
                name: 'OCSP',
                description: 'Small and handy audio/video player',
                availability: ['fas fa-download', 'fab fa-sourceforge'],
                link: [
                    'https://talk.maemo.org/showthread.php?t=94590',
                    'https://sourceforge.net/projects/oscp/files/binaries/'
                ]
            },
            {
                icon: 'https://avatars1.githubusercontent.com/u/1558630?s=460&v=4',
                name: 'ZipTuner',
                description: 'Playlist fetcher for the console',
                link: ['https://github.com/deeice/ziptuner']
            },
            {
                icon: 'https://notabug.org/zPlus/InternetRadio/raw/85718d7d17bd4a64d12597a4f8aa8aca31034b7b/app/src/main/res/drawable/logo.png',
                name: 'Internet Radio',
                description: 'Simple, minimalist Android app',
                availability: ['fas fa-download', 'fab fa-android'],
                link: [
                    'https://notabug.org/zPlus/InternetRadio',
                    'https://f-droid.org/packages/community.peers.internetradio/'
                ]
            },
            {
                icon: 'https://lh3.googleusercontent.com/DMPdfo1zTLzAF5_ble9xszgBOwPN5wL2AlPfE5dqTm50aWVBUQ41BkmqbxUCyMjZ0Q=s360-rw',
                name: '335',
                description: 'Android app for visually impaired',
                availability: ['fas fa-download', 'fab fa-google-play', 'fab fa-github-square'],
                link: [
                    'http://www.indr.ch/projects/',
                    'https://play.google.com/store/apps/details?id=ch.indr.threethreefive',
                    'https://github.com/indr/335'
                ]
            },
            {
                icon: 'https://lh3.googleusercontent.com/9ieIgFDwXMsnC3wqdqffIEsBtW8Y2ICrJyvJBuzuK3Y7ja6mp4bqbWTEPKi3lUkPCA=s360-rw',
                name: 'RadioS2S',
                description: 'Radio app for android',
                availability: ['fas fa-download', 'fab fa-google-play', 'fab fa-github-square'],
                link: [
                    'https://radios2s.scriptel.nl/',
                    'https://play.google.com/store/apps/details?id=com.scriptel.simplyradio',
                    'https://github.com/fsch0203/radios2s'
                ]
            },
            {
                icon: 'https://apps.nextcloud.com/static/assets/img/favicon-180.png',
                name: 'Radio',
                description: 'Radio plugin for NextCloud',
                link: ['https://apps.nextcloud.com/apps/radio']
            },
            {
                icon: 'https://lh3.googleusercontent.com/sT_xCxNoSoj7xtsPpAoVsA-wvA9pnpooBAl3hqzIlkTLyBET2T6IluTaXh2-berADw=s360-rw',
                name: 'Castro',
                description: 'Chromecast Radio',
                link: ['https://play.google.com/store/apps/details?id=guru.tall.castro']
            },
            {
                icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
                name: 'Radiobrowser4j',
                description: 'Java Library',
                link: ['https://github.com/sfuhrm/radiobrowser4j']
            },
            {
                icon: 'https://lh3.googleusercontent.com/LNU3wSeIqCtYvvbcklHr4mAQbG4EAVZ_kamQZ_6ECmyYqudAX3FoZy42bIGnSj3pFE5n=s360-rw',
                name: 'Radio FM Player',
                description: 'TuneFM Plugin',
                link: ['https://play.google.com/store/apps/details?id=fm.radio.sanity.radiofm']
            },
        ];
        this.getServerStats();
        var this1 = this;
        setInterval(function () {
            this1.randomImg = this1.randomIntFromInterval(0, 4);
        }, 10000);
    }
    HomeComponent.prototype.getServerStats = function () {
        var _this = this;
        this.http.get('http://www.radio-browser.info/webservice/json/stats').subscribe(function (res) {
            _this.stats = res;
        });
    };
    HomeComponent.prototype.getSearchResults = function (event) {
        var _this = this;
        if (event.query.length > 0 && event.query === this.searchText) {
            this.http.get('http://www.radio-browser.info/webservice/json/stations/byname/' + event.query).subscribe(function (res) {
                var returnArray = res;
                if (returnArray.length <= 50) {
                    _this.searchResults = res;
                    console.log(res);
                }
                else {
                    _this.searchResults = [];
                }
            });
        }
    };
    HomeComponent.prototype.goToStations = function () {
        this.router.navigate(['/stations'], { queryParams: { search: this.searchText } });
    };
    HomeComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    HomeComponent.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new-station/new-station.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-station/new-station.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper span {\n  display: inline-block;\n}\n.page-wrapper .error {\n  color: red;\n  margin-left: 10px;\n}\n.page-wrapper button {\n  border: none;\n  border-radius: 5px;\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  font-size: 20px;\n}\n.page-wrapper button:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n.tags-toggle {\n  background-color: rgba(0, 111, 211, 255);\n  display: inline-block;\n  vertical-align: middle;\n  color: white;\n  height: 33px;\n  padding: 8px 20px;\n  border-radius: 3px;\n  border: 1px solid #007ad9;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.tags-toggle:hover {\n  opacity: 0.8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXN0YXRpb24vbmV3LXN0YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvbmV3LXN0YXRpb24vbmV3LXN0YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wYWdlLXdyYXBwZXIgLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucGFnZS13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wYWdlLXdyYXBwZXIgYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFncy10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMSwgMjExLCAyNTUpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzM3B4O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YWQ5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhZ3MtdG9nZ2xlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/new-station/new-station.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-station/new-station.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <h1>Create New Station</h1>\n  <p>The information provided here will be released under the public domain.</p>\n  <p>Radio-browser.info only saves links. The content of the streams or the favicons or the homepages of the stations are property of the radio stations themselves.</p>\n\n  <br>\n\n  <span class=\"ui-float-label\">\n    <input [(ngModel)]=\"name\" id=\"float-input1\" type=\"text\" size=\"80\" pInputText required>\n    <label for=\"float-input1\">Name <span style=\"color: red;\">*</span></label>\n  </span>\n  <span *ngIf=\"!hasContent('name')\" class=\"error\">This field is required.</span>\n\n  <br><br>\n\n  <span class=\"ui-float-label\">\n    <input [(ngModel)]=\"url\" id=\"float-input2\" type=\"text\" size=\"80\" pInputText required>\n    <label for=\"float-input2\">URL <span style=\"color: red;\">*</span></label>\n  </span>\n  <span *ngIf=\"!hasContent('url')\" class=\"error\">This field is required.</span>\n\n  <br><br>\n\n  <span class=\"ui-float-label\">\n    <input [(ngModel)]=\"homepage\" id=\"float-input3\" type=\"text\" size=\"80\" pInputText>\n    <label for=\"float-input3\">Homepage</label>\n  </span>\n\n  <br><br>\n\n  <span class=\"ui-float-label\">\n    <input [(ngModel)]=\"favicon\" id=\"float-input4\" type=\"text\" size=\"80\" pInputText>\n    <label for=\"float-input4\">Favicon</label>\n  </span>\n\n  <br>\n\n  <img style=\"display: block; max-height: 100px;\" *ngIf=\"favicon && favicon.length > 0\" src=\"{{favicon}}\">\n\n  <br>\n\n  <span class=\"ui-float-label\">\n    <p-autoComplete\n      size=\"80\"\n      id=\"float-input5\"\n      [(ngModel)]=\"country\"\n      field=\"name\"\n      [forceSelection]=\"true\"\n      [suggestions]=\"filteredCountries\"\n      (completeMethod)=\"searchCountries($event)\"\n    ></p-autoComplete>\n    <label for=\"float-input5\">Country</label>\n  </span>\n\n\n\n\n  <br><br>\n\n  <span class=\"ui-float-label\">\n    <p-autoComplete\n      size=\"80\"\n      id=\"float-input6\"\n      [(ngModel)]=\"state\"\n      field=\"name\"\n      [forceSelection]=\"true\"\n      [suggestions]=\"filteredStates\"\n      (completeMethod)=\"searchStates($event)\"\n    ></p-autoComplete>\n    <label for=\"float-input6\">State</label>\n  </span>\n\n  <br><br>\n\n  <span class=\"ui-float-label\">\n    <p-autoComplete\n      size=\"80\"\n      id=\"float-input7\"\n      [(ngModel)]=\"language\"\n      field=\"name\"\n      [forceSelection]=\"true\"\n      [suggestions]=\"filteredLanguages\"\n      (completeMethod)=\"searchLanguages($event)\"\n    ></p-autoComplete>\n    <label for=\"float-input7\">Language</label>\n  </span>\n\n  <br><br>\n\n  <span class=\"ui-float-label\" *ngIf=\"selectMode\">\n    <p-autoComplete\n      id=\"float-input8\"\n      [(ngModel)]=\"tags\"\n      field=\"name\"\n      [dropdown]=\"true\"\n      [multiple]=\"true\"\n      [suggestions]=\"filteredTags\"\n      (completeMethod)=\"searchTags($event)\"\n    ></p-autoComplete>\n    <label for=\"float-input8\">Tags</label>\n  </span>\n\n  <span class=\"ui-float-label\" *ngIf=\"!selectMode\">\n    <input [(ngModel)]=\"tagsString\" id=\"float-input9\" type=\"text\" size=\"60\" pInputText>\n    <label for=\"float-input9\">Tags</label>\n  </span>\n\n  <span class=\"tags-toggle\" *ngIf=\"selectMode\" (click)=\"this.selectMode = this.selectMode !== true;\">\n    Text Mode\n  </span>\n  <span class=\"tags-toggle\" *ngIf=\"!selectMode\" (click)=\"this.selectMode = this.selectMode !== true;\">\n    Select Mode\n  </span>\n\n  <p *ngIf=\"!selectMode\" style=\"color: red;\">You are in text mode. Separate tags with commas, no spaces between tags.</p>\n\n  <br><br>\n\n  <button (click)=\"submitStation()\">Submit Station</button>\n\n  <br><br>\n</div>\n\n"

/***/ }),

/***/ "./src/app/new-station/new-station.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-station/new-station.component.ts ***!
  \******************************************************/
/*! exports provided: NewStationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStationComponent", function() { return NewStationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewStationComponent = /** @class */ (function () {
    function NewStationComponent(http) {
        var _this = this;
        this.http = http;
        this.selectMode = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.http.get('http://www.radio-browser.info/webservice/json/countries'),
            this.http.get('http://www.radio-browser.info/webservice/json/states'),
            this.http.get('http://www.radio-browser.info/webservice/json/languages'),
            this.http.get('http://www.radio-browser.info/webservice/json/tags')
        ]).subscribe(function (_a) {
            var countries = _a[0], states = _a[1], languages = _a[2], tags = _a[3];
            _this.countries = countries;
            _this.states = states;
            _this.languages = languages;
            _this.allTags = tags;
        });
    }
    NewStationComponent.prototype.submitStation = function () {
        var _this = this;
        if (this.name !== '' && this.name !== undefined &&
            this.url !== '' && this.url !== undefined) {
            var countryName = null;
            var stateName = null;
            var languageName = null;
            var tagsCommaSeperated = null;
            if (this.country !== undefined) {
                var country = this.country;
                countryName = country.name;
            }
            if (this.state !== undefined) {
                var state = this.state;
                stateName = state.name;
            }
            if (this.language !== undefined) {
                var language = this.language;
                languageName = language.name;
            }
            if (this.tags !== undefined && this.tags.length > 0 && this.selectMode) {
                var tagsArray = this.tags;
                tagsCommaSeperated = tagsArray.map(function (tag) {
                    return tag.name;
                }).join();
            }
            if (this.tagsString !== undefined && this.tagsString.length > 0 && !this.selectMode) {
                tagsCommaSeperated = this.tagsString;
            }
            var submission = {
                name: this.name,
                url: this.url,
                homepage: this.homepage,
                favicon: this.favicon,
                tags: tagsCommaSeperated,
                language: languageName,
                state: stateName,
                country: countryName
            };
            console.log(submission);
            this.http.post('http://www.radio-browser.info/webservice/json/add', submission).subscribe(function (res) {
                _this.name = '';
                _this.url = '';
                _this.homepage = '';
                _this.favicon = '';
                _this.tags = '';
                _this.tagsString = '';
                _this.language = '';
                _this.state = '';
                _this.country = '';
                console.log(res);
            });
        }
    };
    NewStationComponent.prototype.searchCountries = function (event) {
        this.filteredCountries = this.countries.filter(function (country) { return country.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    NewStationComponent.prototype.searchStates = function (event) {
        this.filteredStates = this.states.filter(function (state) { return state.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    NewStationComponent.prototype.searchLanguages = function (event) {
        this.filteredLanguages = this.languages.filter(function (language) { return language.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    NewStationComponent.prototype.searchTags = function (event) {
        this.filteredTags = this.allTags.filter(function (tag) { return tag.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    NewStationComponent.prototype.hasContent = function (element) {
        return this[element] !== '';
    };
    NewStationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-station',
            template: __webpack_require__(/*! ./new-station.component.html */ "./src/app/new-station/new-station.component.html"),
            styles: [__webpack_require__(/*! ./new-station.component.css */ "./src/app/new-station/new-station.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewStationComponent);
    return NewStationComponent;
}());



/***/ }),

/***/ "./src/app/router.ts":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_station_new_station_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-station/new-station.component */ "./src/app/new-station/new-station.component.ts");
/* harmony import */ var _stations_stations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stations/stations.component */ "./src/app/stations/stations.component.ts");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faqs/faqs.component */ "./src/app/faqs/faqs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'stations/new', component: _new_station_new_station_component__WEBPACK_IMPORTED_MODULE_3__["NewStationComponent"], pathMatch: 'full' },
    { path: 'stations', component: _stations_stations_component__WEBPACK_IMPORTED_MODULE_4__["StationsComponent"], pathMatch: 'full' },
    { path: 'faqs', component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__["FaqsComponent"], pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
var Router = /** @class */ (function () {
    function Router() {
    }
    Router = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Router);
    return Router;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: rgba(214, 220, 228, 255);\n  font-size: 14px;\n  color: rgba(0,0,0,0.5);\n  text-align: center;\n}\nfooter .container {\n  width: 90vw;\n  margin: auto;\n}\nfooter h3 {\n  color: black;\n}\nfooter .button a {\n  color: rgba(0,0,0,0.5);\n}\nfooter .button:hover {\n  opacity: 0.8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjIwLCAyMjgsIDI1NSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyIC5jb250YWluZXIge1xuICB3aWR0aDogOTB2dztcbiAgbWFyZ2luOiBhdXRvO1xufVxuZm9vdGVyIGgzIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuZm9vdGVyIC5idXR0b24gYSB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG59XG5mb290ZXIgLmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-3\">\n        <h3>License</h3>\n        GNU Affero General Public License v3.0<br>\n        Additional Questions? <a href=\"mailto:segler_alex@web.de\">Email Me</a>\n      </div>\n      <div class=\"ui-g-3\">\n        <h3>Audio Player</h3>\n        <div class=\"offset\" *ngIf=\"isPlayingStation\">\n          <p>{{station.name}}</p>\n          <audio controls autoplay>\n            <source *ngIf=\"station.codec === 'mp3'\" src=\"{{station.url}}\" type=\"audio/{{station.codec}}\">\n            <source *ngIf=\"station.codec !== 'mp3'\" src=\"{{station.url}}\" type=\"audio/mp4\">\n            Your browser does not support the audio element.\n          </audio>\n        </div>\n        <p *ngIf=\"!isPlayingStation\">No station playing</p>\n      </div>\n      <div class=\"ui-g-3\">\n        <h3>Bugtracker</h3>\n        <div style=\"display: inline-block\" class=\"button\">\n          <a target=\"_blank\" href=\"https://github.com/segler-alex/radiobrowser\">Webpage</a>\n        </div> &nbsp;\n        <div style=\"display: inline-block\" class=\"button\">\n          <a target=\"_blank\" href=\"https://github.com/segler-alex/radiobrowser-api\">API Server</a>\n        </div>\n      </div>\n      <div class=\"ui-g-3\">\n        <h3>Legal Note</h3>\n        <p>I'm not in any way responsible for the entries on this webpage, nor am I responsible for the radio stations themselves.</p>\n        <p>This is a community driven effort (like Wikipedia for example).</p>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _station_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../station-player.service */ "./src/app/shared/station-player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(player) {
        var _this = this;
        this.player = player;
        this.isPlayingStation = false;
        this.player.stationReplaySubject.subscribe(function (res) {
            console.log('update');
            var this1 = _this;
            _this.isPlayingStation = false;
            setTimeout(function () {
                this1.station = res;
                this1.isPlayingStation = true;
            }, 1000);
        });
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_station_player_service__WEBPACK_IMPORTED_MODULE_1__["StationPlayerService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 100%;\n  color: rgba(214, 220, 228, 255);\n  font-weight: 100;\n  padding: 10px;\n  transition: all;\n  transition-duration: .4s;\n  background-color: transparent;\n  z-index: 5;\n}\nheader.false, header.not-docked {\n  background-color: black;\n}\nheader.true {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\nheader .logo {\n  display: inline-block;\n  cursor: pointer;\n}\n#navigation span {\n  margin-left: 20px;\n  cursor: pointer;\n}\n#navigation span:hover {\n  opacity: 0.8;\n}\n#navigation .button a {\n  color: rgba(214, 220, 228, 255);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixXQUFXO0NBQ1o7QUFDRDtFQUNFLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxRQUFRO0NBQ1Q7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0NBQWdDO0NBQ2pDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogcmdiYSgyMTQsIDIyMCwgMjI4LCAyNTUpO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGw7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC40cztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDU7XG59XG5oZWFkZXIuZmFsc2UsIGhlYWRlci5ub3QtZG9ja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5oZWFkZXIudHJ1ZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuaGVhZGVyIC5sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbmF2aWdhdGlvbiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNuYXZpZ2F0aW9uIHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG4jbmF2aWdhdGlvbiAuYnV0dG9uIGEge1xuICBjb2xvcjogcmdiYSgyMTQsIDIyMCwgMjI4LCAyNTUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"{{isOnHome}} {{docked}}\">\n  <div class=\"ui-g\">\n    <div class=\"ui-g-6\">\n      <div class=\"logo\" [routerLink]=\"['/']\">\n        Community Radio Browser\n      </div>\n    </div>\n    <div class=\"ui-g-6 text-right\">\n      <div id=\"navigation\">\n        <span [routerLink]=\"['/faqs']\">FAQ</span>\n        <span [routerLink]=\"['/stations']\">Stations</span>\n        <span [routerLink]=\"['/stations/new']\">New Station</span>\n        <span class=\"button\"><a target=\"_blank\" href=\"http://www.radio-browser.info/webservice\">Developer API</a></span>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.docked = 'docked';
        this.scrollEvent = function (event) {
            if (document.documentElement.scrollTop < 1) {
                _this.docked = 'docked';
            }
            else {
                _this.docked = 'not-docked';
            }
        };
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.isOnHome = event.url === '/';
            }
        });
        window.addEventListener('scroll', this.scrollEvent, true);
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/station-player.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/station-player.service.ts ***!
  \**************************************************/
/*! exports provided: StationPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationPlayerService", function() { return StationPlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StationPlayerService = /** @class */ (function () {
    function StationPlayerService() {
        this.isStationPlaying = false;
        this.isStationPlayingReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.stationReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    StationPlayerService.prototype.playSong = function (station) {
        this.isStationPlaying = true;
        this.isStationPlayingReplaySubject.next(this.isStationPlaying);
        this.stationReplaySubject.next(station);
    };
    StationPlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StationPlayerService);
    return StationPlayerService;
}());



/***/ }),

/***/ "./src/app/stations/stations.component.css":
/*!*************************************************!*\
  !*** ./src/app/stations/stations.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favicon {\n  max-width: 50px;\n  max-height: 50px;\n}\n.img-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n}\n.chip {\n  background-color: black;\n  color: white;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n}\n.container .label {\n  display: inline-block;\n  width: 80px;\n  font-weight: bold;\n}\n.page-wrapper button {\n  border: none;\n  border-radius: 5px;\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  font-size: 20px;\n}\n.page-wrapper button:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n.actions i {\n  font-size: 20px;\n  margin: 0 2px;\n}\n.actions i:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n.actions a {\n  color: #333333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbnMvc3RhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9ucy9zdGF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdmljb24ge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG4uaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYWdlLXdyYXBwZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnBhZ2Utd3JhcHBlciBidXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3Rpb25zIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMCAycHg7XG59XG4uYWN0aW9ucyBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWN0aW9ucyBhIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/stations/stations.component.html":
/*!**************************************************!*\
  !*** ./src/app/stations/stations.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <h1>Stations</h1>\n\n  <p>To view stations, please enter a search term into at least one of the fields below.</p>\n\n  <p-accordion id=\"accordian-search\">\n    <p-accordionTab\n      header=\"Search Terms\"\n      [selected]=\"searchIsSelected\"\n      (keyup.enter)=\"searchStations()\"\n    >\n\n      <div class=\"container\">\n        <p class=\"label\">Name</p>\n        <input class=\"full-width\" autocomplete=\"dont\" [(ngModel)]=\"searchName\" type=\"text\" pInputText>\n      </div>\n\n      <br>\n\n      <div class=\"container\">\n        <p class=\"label\">Country</p>\n        <p-autoComplete\n          autocomplete=\"dont\"\n          [(ngModel)]=\"searchCountry\"\n          field=\"name\"\n          [forceSelection]=\"true\"\n          [suggestions]=\"filteredCountries\"\n          (completeMethod)=\"searchCountries($event)\"\n        ></p-autoComplete>\n      </div>\n\n      <br>\n\n      <div class=\"container\">\n        <p class=\"label\">State</p>\n        <p-autoComplete\n          autocomplete=\"dont\"\n          [(ngModel)]=\"searchState\"\n          field=\"name\"\n          [forceSelection]=\"true\"\n          [suggestions]=\"filteredStates\"\n          (completeMethod)=\"searchStates($event)\"\n        ></p-autoComplete>\n      </div>\n\n      <br>\n\n      <div class=\"container\">\n        <p class=\"label\">Language</p>\n        <p-autoComplete\n          autocomplete=\"dont\"\n          [(ngModel)]=\"searchLanguage\"\n          field=\"name\"\n          [forceSelection]=\"true\"\n          [suggestions]=\"filteredLanguages\"\n          (completeMethod)=\"searchLanguages($event)\"\n        ></p-autoComplete>\n      </div>\n\n      <br>\n\n      <div class=\"container\">\n        <p class=\"label\">Tags</p>\n        <p-autoComplete\n          autocomplete=\"dont\"\n          [(ngModel)]=\"searchTags\"\n          field=\"name\"\n          [dropdown]=\"true\"\n          [multiple]=\"true\"\n          [forceSelection]=\"true\"\n          [suggestions]=\"filteredTags\"\n          (completeMethod)=\"searchAllTags($event)\"\n        ></p-autoComplete>\n      </div>\n\n      <br>\n\n      <button (click)=\"searchStations()\">Search Stations</button>\n    </p-accordionTab>\n  </p-accordion>\n\n\n\n  <p *ngIf=\"tableData && noResults\">\n    No results for this query.\n  </p>\n  <!--<p-multiSelect-->\n    <!--[options]=\"cols\"-->\n    <!--[(ngModel)]=\"visibleColumns\"-->\n    <!--(onChange)=\"filterColumns();\"-->\n    <!--optionLabel=\"header\">-->\n  <!--</p-multiSelect>-->\n  <p-table\n           *ngIf=\"(tableData && !noResults) || loading\"\n           [columns]=\"cols\"\n           [value]=\"tableData\"\n           [paginator]=\"true\"\n           [responsive]=\"true\"\n           [autoLayout]=\"true\"\n           dataKey=\"id\"\n           [rowsPerPageOptions]=\"[5,10,25,50,100]\"\n           [rows]=\"10\"\n           [loading]=\"loading\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <ng-container *ngFor=\"let col of cols\">\n          <th *ngIf=\"col.show\" [pSortableColumn]=\"col.field\" width=\"{{col.width}}\">\n            {{col.header}}\n            <p-sortIcon *ngIf=\"col.sortable\" [field]=\"col.field\"></p-sortIcon>\n          </th>\n        </ng-container>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-station>\n      <tr>\n        <ng-container *ngFor=\"let col of cols\">\n          <td *ngIf=\"col.show && col.field !== 'actions'\">\n            <div *ngIf=\"col.field === 'stream-info'\">\n              <div *ngIf=\"station.lastcheckok === '0'\">\n                <span class=\"chip\">BROKEN</span>\n              </div>\n              <div *ngIf=\"station.lastcheckok === '1'\">\n                <span class=\"chip\">{{station.codec}}</span>\n                <span class=\"chip\">{{station.bitrate}} kbps</span>\n              </div>\n            </div>\n            <div *ngIf=\"col.field === 'tags'\">\n              <div *ngIf=\"station.tags.length !== 0\">\n                <span class=\"chip\" *ngFor=\"let tag of station.tags.split(',')\">{{tag}}</span>\n              </div>\n            </div>\n\n            <div *ngIf=\"col.field === 'logo'\">\n              <div class=\"img-container\"><img class=\"favicon\" src=\"{{station.favicon}}\"></div>\n            </div>\n            <div\n              *ngIf=\"\n              col.field !== 'stream-info' &&\n              col.field !== 'logo' &&\n              col.field !== 'tags'\">\n              {{station[col.field]}}\n            </div>\n          </td>\n        </ng-container>\n        <td class=\"actions\">\n          <i (click)=\"playStation(station)\" class=\"fas fa-play-circle\"></i>\n          <a target=\"_blank\" href=\"http://www.radio-browser.info/webservice/pls/url/{{station.id}}\">\n            <i class=\"fas fa-save\"></i>\n          </a>\n          <a target=\"_blank\" href=\"{{station.homepage}}\"><i class=\"fas fa-home\"></i></a>\n          <i class=\"fas fa-like\"></i>\n          <i class=\"fas fa-step-backward\"></i>\n\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br>\n\n"

/***/ }),

/***/ "./src/app/stations/stations.component.ts":
/*!************************************************!*\
  !*** ./src/app/stations/stations.component.ts ***!
  \************************************************/
/*! exports provided: StationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationsComponent", function() { return StationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_station_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/station-player.service */ "./src/app/shared/station-player.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StationsComponent = /** @class */ (function () {
    function StationsComponent(http, route, player) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.player = player;
        this.loading = false;
        this.noResults = true;
        this.searchIsSelected = true;
        this.visibleColumns = [];
        this.cols = [
            {
                header: 'Logo',
                field: 'logo',
                show: true,
                sortable: false,
                width: 'auto'
            },
            {
                header: 'Votes',
                field: 'votes',
                show: true,
                sortable: true,
                width: 'auto'
            },
            {
                header: 'Name',
                field: 'name',
                show: true,
                sortable: true,
                width: '200'
            },
            {
                header: 'Stream Info',
                field: 'stream-info',
                show: true,
                sortable: false,
                width: 'auto'
            },
            {
                header: 'Tags',
                field: 'tags',
                show: true,
                sortable: false,
                width: 'auto'
            },
            {
                header: 'Country',
                field: 'country',
                show: false,
                sortable: true,
                width: 'auto'
            },
            {
                header: 'Last Online Check (CEST)',
                field: 'last-online-check',
                show: false,
                sortable: true,
                width: 'auto'
            },
            {
                header: 'Last Contact (CEST)',
                field: 'last-contact',
                show: false,
                sortable: true,
                width: 'auto'
            },
            {
                header: 'Last Change (CEST)',
                field: 'last-change',
                show: false,
                sortable: true,
                width: 'auto'
            },
            {
                header: 'Actions',
                field: 'actions',
                show: true,
                sortable: false,
                width: '125'
            }
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.route.queryParams,
            this.http.get('http://www.radio-browser.info/webservice/json/countries'),
            this.http.get('http://www.radio-browser.info/webservice/json/states'),
            this.http.get('http://www.radio-browser.info/webservice/json/languages'),
            this.http.get('http://www.radio-browser.info/webservice/json/tags')
        ]).subscribe(function (_a) {
            var queryParams = _a[0], countries = _a[1], states = _a[2], languages = _a[3], tags = _a[4];
            if (queryParams.hasOwnProperty('search') && queryParams.search.length > 0) {
                _this.searchName = queryParams.search;
                _this.searchStations();
                _this.searchIsSelected = false;
            }
            _this.countries = countries;
            _this.states = states;
            _this.languages = languages;
            _this.allTags = tags;
        });
    }
    StationsComponent.prototype.searchStations = function () {
        var _this = this;
        this.loading = true;
        var countryName = null;
        var stateName = null;
        var languageName = null;
        var tagsCommaSeperated = null;
        if (this.searchCountry !== undefined) {
            var country = this.searchCountry;
            countryName = country.name;
        }
        if (this.searchState !== undefined) {
            var state = this.searchState;
            stateName = state.name;
        }
        if (this.searchLanguage !== undefined) {
            var language = this.searchLanguage;
            languageName = language.name;
        }
        if (this.searchTags !== undefined && this.searchTags.length > 0) {
            var tagsArray = this.searchTags;
            tagsCommaSeperated = tagsArray.map(function (tag) {
                return tag.name;
            }).join();
        }
        var searchParams = {
            name: this.searchName,
            country: countryName,
            state: stateName,
            language: languageName,
            tagList: tagsCommaSeperated
        };
        console.log(searchParams);
        this.http.post('http://www.radio-browser.info/webservice/json/stations/search', searchParams).subscribe(function (res) {
            _this.tableData = res;
            _this.loading = false;
            _this.noResults = _this.tableData.length === 0;
        });
    };
    StationsComponent.prototype.playStation = function (station) {
        this.player.playSong(station);
    };
    StationsComponent.prototype.searchCountries = function (event) {
        this.filteredCountries = this.countries.filter(function (country) { return country.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    StationsComponent.prototype.searchStates = function (event) {
        this.filteredStates = this.states.filter(function (state) { return state.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    StationsComponent.prototype.searchLanguages = function (event) {
        this.filteredLanguages = this.languages.filter(function (language) { return language.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    StationsComponent.prototype.searchAllTags = function (event) {
        this.filteredTags = this.allTags.filter(function (tag) { return tag.name.toLowerCase().includes(event.query.toLowerCase()); });
    };
    StationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stations',
            template: __webpack_require__(/*! ./stations.component.html */ "./src/app/stations/stations.component.html"),
            styles: [__webpack_require__(/*! ./stations.component.css */ "./src/app/stations/stations.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_station_player_service__WEBPACK_IMPORTED_MODULE_3__["StationPlayerService"]])
    ], StationsComponent);
    return StationsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/juwhite/Desktop/radiobrowser/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map