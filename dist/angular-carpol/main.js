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

module.exports = "/* #container {\n    display: flex; \n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;}\n.child {\n    width: 200px;\n    height: 200px; }\n#child1 {\n    background-color: red; }\n#child2 {\n    background-color: green; }\n#child3 {\n    background-color: blue; } */\n\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n}\n\nmat-sidenav {\n    width: 250px;\n}\n\na {\n    color:white;\n    text-decoration: none;\n}\n\na:hover, a:active {\n    color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Z0NBYWdDOztBQUVoQztJQUNJLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjt9XG4uY2hpbGQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4OyB9XG4jY2hpbGQxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cbiNjaGlsZDIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyB9XG4jY2hpbGQzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyB9ICovXG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbm1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbmEge1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIsIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container>\n\n      <mat-sidenav #sidenav opened=\"false\" >\n          <mat-nav-list>\n      \n            <a *ngIf=\"loggedIn\" mat-list-item routerLink=\"profile\" (click)=\"myProfile(); sidenav.close()\">\n              <mat-icon>person</mat-icon>\n              My Profile\n            </a>\n            <a *ngIf=\"loggedIn\" mat-list-item routerLink=\"/\" (click)=\"sidenav.close(); signOut()\">\n              <mat-icon>exit_to_app</mat-icon>\n              Sing out\n            </a>\n          </mat-nav-list>\n        </mat-sidenav>\n        <mat-sidenav-content>\n          <mat-toolbar color=\"primary\" *ngIf=\"loggedIn\">\n              <div fxHide.gt-xs>\n                <button mat-raised-button color=\"accent\" (click)=\"sidenav.toggle()\">\n                  <mat-icon>menu</mat-icon>\n                </button>\n              </div>\n              \n              <div fxFlex fxLayoutAlign=\"end\" fxLayoutGap=\"15px\" fxHide.xs>\n    \n               <div  [matMenuTriggerFor]=\"menu\" >\n                  <a href=\"javascript:;\" fxLayoutAlign=\"center center\">\n                      {{this.userService.getCurrenSession().contact_email}}\n                  <mat-icon>expand_more</mat-icon>\n                  </a>\n                </div>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item routerLink=\"/profile\" (click)=\"myProfile()\">My Profile</button>\n                  <button mat-menu-item routerLink=\"/\" (click)=\"signOut()\">Sign Out</button>\n                </mat-menu>\n              </div>\n          </mat-toolbar>\n \n   <router-outlet></router-outlet>\n  </mat-sidenav-content>\n    \n  </mat-sidenav-container>\n\n\n\n\n"

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
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'angular-app';
        this.loggedIn = false;
    }
    AppComponent.prototype.setLoggedIn = function (value) {
        this.loggedIn = value;
    };
    AppComponent.prototype.signOut = function () {
        this.loggedIn = false;
    };
    AppComponent.prototype.myProfile = function () {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile"]);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./frontpage/login/login.component */ "./src/app/frontpage/login/login.component.ts");
/* harmony import */ var _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frontpage/signup/signup.component */ "./src/app/frontpage/signup/signup.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_reputation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/reputation.service */ "./src/app/services/reputation.service.ts");
/* harmony import */ var _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/drive_rides.service */ "./src/app/services/drive_rides.service.ts");
/* harmony import */ var _dashboard_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/profile/edit-profile/edit-profile.component */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _dashboard_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"], _services_reputation_service__WEBPACK_IMPORTED_MODULE_13__["ReputationService"], _services_drive_rides_service__WEBPACK_IMPORTED_MODULE_14__["DriveRidesService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _dashboard_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/edit-profile/edit-profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/profile/edit-profile/edit-profile.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert{\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n    position: relative;\n    padding: .75rem 1.25rem;\n    margin-bottom: 1rem;\n    border: 1px solid transparent;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    border-radius: .25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnR7XG4gICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/profile/edit-profile/edit-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/profile/edit-profile/edit-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n    <section fxLayout=\"column\" fxLayoutAlign=\"center center\">        \n            <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"\n            #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n        <!---------------------------------------------------------------------------------------------------------------------------------------->\n        \n            <mat-form-field appearance=\"outline\">\n                <mat-label>First Name</mat-label>\n                <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"First name\" [(ngModel)]=\"currentUser.fname\" name=\"firstName\" required #firstNameInput=\"ngModel\" > \n                <mat-error *ngIf=\"firstNameInput.hasError('required')\">Please write Your first name.</mat-error>\n                <mat-error *ngIf=\"!firstNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\">\n                  <mat-label>Last Name</mat-label>\n                <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"Last name\" [(ngModel)]=\"currentUser.lname\" name=\"lastName\" required #lastNameInput=\"ngModel\">\n                <mat-error *ngIf=\"lastNameInput.hasError('required')\">Please write Your last name.</mat-error>\n                <mat-error *ngIf=\"!lastNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\">\n                  <mat-label>Mobile Phone Number</mat-label>\n                <input type=\"tel\" pattern=\"[0]{1}[0-9]{9}\" matInput placeholder=\"Mobile phone number\" [(ngModel)]=\"currentUser.contact_phone\" name=\"phone\" required #phoneInput=\"ngModel\" minlength=\"6\">\n                <mat-error *ngIf=\"phoneInput.hasError('required')\">Please write Your mobile number.</mat-error>\n                <mat-error *ngIf=\"!phoneInput.hasError('required')\">Phone number should start with 0 followed by 9 digits afterwards</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\">\n                  <mat-label>Address</mat-label>\n                <input type=\"text\" matInput placeholder=\"Address\" [(ngModel)]=\"currentUser.contact_address\" name=\"address\" required #adressInput=\"ngModel\">\n                <mat-error *ngIf=\"adressInput.hasError('required')\">Please write Your full address.</mat-error>\n              </mat-form-field>\n        \n        <!---------------------------------------------------------------------------------------------------------------------------------------->\n            <mat-form-field appearance=\"outline\" hintLabel=\"This will be used for signing in.\">\n                <mat-label>Email Address</mat-label>\n                <input type=\"email\" matInput placeholder=\"Your email\" [(ngModel)]=\"currentUser.contact_email\" name=\"email\" email required #emailInput=\"ngModel\">\n                <mat-error *ngIf=\"emailInput.hasError('required')\">Please write Your email address.</mat-error>\n                <mat-error *ngIf=\"!emailInput.hasError('required')\">Please use the correct email format.</mat-error>\n              </mat-form-field>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n              <mat-form-field appearance=\"outline\" hintLabel=\"Please enter minimum 6 characters.\">\n                <mat-label>Your password</mat-label>\n                <input type=\"password\" matInput placeholder ngModel name=\"password\" [(ngModel)]=\"currentUser.password\" required minlength=\"6\" #passInput=\"ngModel\">\n                <mat-hint align=\"end\">{{ passInput.value?.length }} /6 </mat-hint>\n                <mat-error *ngIf=\"passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n                <mat-error *ngIf=\"!passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n              </mat-form-field>\n          \n          <div class=\"alert\" *ngIf=\"errorString !=''\">{{ errorString }}</div>\n          <!---------------------------------------------------------------------------------------------------------------------------------------->\n          <div fxLayoutGap=\"20px\" fxLayout=\"row\" fxLayoutAlign=\"center center\" > \n              <button mat-raised-button color=\"warn\" (click)=\"onCancel()\">\n                  Cancel\n                </button>\n              <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">\n                EDIT\n              </button>\n          </div>\n            </form>\n        \n    \n      </section>\n\n\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/edit-profile/edit-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/profile/edit-profile/edit-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(dialogRef, data, userService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.errorString = "";
        this.userTEMP = userService.getProfileData(data.userid);
        this.currentUser = { id_user: -1,
            fname: "",
            lname: "",
            contact_email: "",
            contact_phone: "",
            contact_address: "",
            password: ""
        };
        Object.keys(this.userTEMP).forEach(function (key) { return _this.currentUser[key] = _this.userTEMP[key]; });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    EditProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        Object.keys(this.currentUser).forEach(function (key) { return _this.userTEMP[key] = _this.currentUser[key]; });
        this.onCancel();
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-500px{\n    width: 500px;\n    max-width: 500px;\n}\n\n.green-text{\n    color: #009933;\n}\n\n.red-text{\n    color: #990000;\n}\n\n.gray-text{\n    color:#424040;\n}\n\n.sectionClass{\n    margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aC01MDBweHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmdyZWVuLXRleHR7XG4gICAgY29sb3I6ICMwMDk5MzM7XG59XG4ucmVkLXRleHR7XG4gICAgY29sb3I6ICM5OTAwMDA7XG59XG4uZ3JheS10ZXh0e1xuICAgIGNvbG9yOiM0MjQwNDA7XG59XG5cbi5zZWN0aW9uQ2xhc3N7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  fxLayoutAlign=\"center center\" fxLayout=\"column\" class=\"sectionClass\">\n  <mat-card>\n      <mat-card-header fxLayoutGap=\"100px\" >\n          <div mat-card-avatar ><img mat-card-image src={{imgSRC}} class=\"resize-img\"/></div>\n          <mat-card-title>{{userToShow.fname }} {{userToShow.lname }}</mat-card-title>\n          <mat-card-subtitle>Customer</mat-card-subtitle>\n       </mat-card-header>\n       <mat-card-content>\n          <button *ngIf=\"userIDtoShow == userService.getCurrenSession().id_user\" mat-stroked-button color=\"primary\"  (click)=\"editProfile()\">Edit</button>\n          <mat-list >\n              <mat-divider></mat-divider>\n              <mat-list-item><mat-icon>star_rate</mat-icon>Raiting</mat-list-item>\n              <mat-list-item class=\"green-text\">Positive {{repData?.rep_positive}}</mat-list-item>\n              <mat-list-item class=\"red-text\">Negative {{repData?.rep_negative}}</mat-list-item>\n              <mat-divider></mat-divider>\n              \n              <mat-list-item><mat-icon>mail_outline</mat-icon>Email:</mat-list-item>\n              <p class=\"gray-text\" fxLayoutGap=\"100px\" fxLayoutAlign=\"center center\">{{userToShow.contact_email}}</p>\n              <mat-divider></mat-divider>\n              <mat-list-item><mat-icon>phone</mat-icon>Phone: </mat-list-item>\n              <p class=\"gray-text\" fxLayoutGap=\"100px\" fxLayoutAlign=\"center center\">{{userToShow.contact_phone}}</p>\n              <mat-divider></mat-divider>\n              <mat-list-item><mat-icon>home</mat-icon>Address: </mat-list-item>\n              <p class=\"gray-text\" fxLayoutGap=\"100px\" fxLayoutAlign=\"center center\">{{userToShow.contact_address}}</p>\n            </mat-list>\n       </mat-card-content> \n\n\n       <h4>REVIEWS</h4>\n       <div *ngIf=\"repData.rep_comment\">\n       <div fxLayoutAlign=\"flex-start\" fxLayoutAlign=\"flex-start\"  role=\"list\" *ngFor=\"let item of repData.rep_comment; index as i;\">\n          <mat-card>\n              <mat-card-header fxLayoutGap=\"100px\" >\n                  <a [routerLink]=\"['/profile']\" [queryParams]=\"{userID: item.id_user_from}\" (click)=\"reloadComponent(item.id_user_from)\">\n                  {{userService.getProfileData(item.id_user_from).fname }} {{userService.getProfileData(item.id_user_from).lname }}\n                </a>\n                </mat-card-header>\n                <mat-card-content>\n                    {{item.comment}}\n                </mat-card-content>\n          </mat-card>\n       </div>\n    </div>\n      </mat-card>\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reputation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/reputation.service */ "./src/app/services/reputation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/dashboard/profile/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, appComponent, router, route, repService, dialog) {
        this.userService = userService;
        this.appComponent = appComponent;
        this.router = router;
        this.route = route;
        this.repService = repService;
        this.dialog = dialog;
        this.userIDtoShow = -1;
        var urlParse = this.router.url.split("=");
        if (typeof urlParse[1] != 'undefined' || urlParse[1] != null) {
            this.userIDtoShow = Number(urlParse[1]);
        }
        if (this.userIDtoShow == -1) {
            this.userIDtoShow = userService.getCurrenSession().id_user;
        }
        this.userToShow = userService.getProfileData(this.userIDtoShow);
        this.imgSRC = "https://robohash.org/" + this.userToShow.fname + ".png";
        this.repData = repService.getReputationOfOneUser(this.userIDtoShow);
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.editProfile = function () {
        this.dialog.open(_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], { data: { userid: this.userIDtoShow } });
    };
    ProfileComponent.prototype.reloadComponent = function (id) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate(["/profile", { userID: id }]);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_reputation_service__WEBPACK_IMPORTED_MODULE_4__["ReputationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/frontpage/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/frontpage/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 300px;\n}\nh1{\n    margin-bottom: 20px;\n}\nsection{\n    height:30%;\n    width:50%;\n\t\n\ttop:0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n}\nimg{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    position: static;\n    width: 33%;\n    height: 33%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n.alert{\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n    position: relative;\n    padding: .75rem 1.25rem;\n    margin-bottom: 1rem;\n    border: 1px solid transparent;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    border-radius: .25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxVQUFVOztDQUViLE1BQU07Q0FDTixVQUFVO0NBQ1YsUUFBUTtDQUNSLFNBQVM7Q0FDVCxhQUFhO0NBQ2I7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9mcm9udHBhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5oMXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuc2VjdGlvbntcbiAgICBoZWlnaHQ6MzAlO1xuICAgIHdpZHRoOjUwJTtcblx0XG5cdHRvcDowO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRtYXJnaW46IGF1dG87XG59XG5pbWd7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4uYWxlcnR7XG4gICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/frontpage/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/frontpage/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <img src=\"/assets/loginbackground.jpg\"/>\n  </div>\n  \n  <h1 fxLayout=\"row\" fxLayoutGap=\"10px\"  fxLayoutAlign=\"center center\">LOGIN page</h1>\n  <form fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n  <mat-form-field>\n    <input type=\"email\" matInput placeholder=\"Your email\" ngModel name=\"email\" email required #emailInput=\"ngModel\">\n    <mat-error *ngIf=\"emailInput.hasError('required')\">Field should not be left empty.</mat-error>\n    <mat-error *ngIf=\"!emailInput.hasError('required')\">Please provide correct email format.</mat-error>\n  </mat-form-field>\n  <mat-form-field appearance=\"standard\"  hintLabel=\"Please provide minimum 6 characters.\">\n    <input [(ngModel)]=password type=\"password\" matInput placeholder=\"Your password\" ngModel name=\"password\" required minlength=\"6\" #pwdInput=\"ngModel\">\n    <mat-label>Your password</mat-label>\n    <mat-hint align=\"end\">{{ pwdInput.value?.length }} / 6</mat-hint>\n    <mat-error *ngIf=\"pwdInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n        <mat-error *ngIf=\"!pwdInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n  </mat-form-field> \n  <div class=\"alert\" *ngIf=\"errorString !=''\">{{ errorString }}</div>\n  <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Login</button>\n  </form> \n\n  \n  \n  <p fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">\n    Don't have an account\n     <a routerLink=\"/signup\" >\n      Consider registering here!\n     </a></p> \n  \n  </section>\n"

/***/ }),

/***/ "./src/app/frontpage/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/frontpage/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, appComponent, router) {
        this.userService = userService;
        this.appComponent = appComponent;
        this.router = router;
        this.errorString = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.userService.validateLogin(form.value.email, form.value.password)) {
            this.appComponent.setLoggedIn(true);
            this.errorString = "";
            //___________________________________________ reddirect
            if (this.userService.getCurrenSession().id_user != -1) {
                var reddirect_path_1 = "/";
                if (this.userService.getCurrenSession().acc_type == "driver") {
                    reddirect_path_1 = "/view-current-rides";
                }
                else {
                    reddirect_path_1 = "/search-active-rides";
                }
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                    return _this.router.navigate([reddirect_path_1]);
                });
            }
            //___________________________________________ reddirect end
        }
        else {
            this.errorString = "Invalid email and/or password provided!";
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/frontpage/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/frontpage/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/frontpage/signup/signup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/frontpage/signup/signup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 300px;\n}\n\nh1{\n    margin-bottom: 20px;\n}\n\nsection{\n    height:30%;\n    width:50%;\n\t\n\ttop:0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n}\n\nimg{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    position: static;\n    width: 33%;\n    height: 33%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n\n.alert{\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n    position: relative;\n    padding: .75rem 1.25rem;\n    margin-bottom: 1rem;\n    border: 1px solid transparent;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    border-radius: .25rem;\n}\n\n.section-css{\n    margin-top: 50px;\n}\n\n.pClass{\n    margin-bottom: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsVUFBVTs7Q0FFYixNQUFNO0NBQ04sVUFBVTtDQUNWLFFBQVE7Q0FDUixTQUFTO0NBQ1QsYUFBYTtDQUNiOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7Q0FDekI7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9mcm9udHBhZ2Uvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuaDF7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuc2VjdGlvbntcbiAgICBoZWlnaHQ6MzAlO1xuICAgIHdpZHRoOjUwJTtcblx0XG5cdHRvcDowO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRtYXJnaW46IGF1dG87XG59XG5pbWd7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4uYWxlcnR7XG4gICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuLnNlY3Rpb24tY3Nze1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ucENsYXNze1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/frontpage/signup/signup.component.html":
/*!********************************************************!*\
  !*** ./src/app/frontpage/signup/signup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-css\">\n    <div  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img src=\"/assets/registerImage.jpg\"/>\n    </div>\n    <h1 fxLayout=\"row\" fxLayoutGap=\"10px\"  fxLayoutAlign=\"center center\">REGISTRATION page</h1>\n\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"\n    #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <!---------------------------------------------------------------------------------------------------------------------------------------->\n  \n<!---------------------------------------------------------------------------------------------------------------------------------------->\n\n    <mat-form-field>\n        <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"First name\" ngModel name=\"firstName\" required #firstNameInput=\"ngModel\" > \n        <mat-error *ngIf=\"firstNameInput.hasError('required')\">Please write Your first name.</mat-error>\n        <mat-error *ngIf=\"!firstNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field>\n        <input type=\"text\" pattern=\"[A-Z]{1}[a-z]{2,20}\" matInput placeholder=\"Last name\" ngModel name=\"lastName\" required #lastNameInput=\"ngModel\">\n        <mat-error *ngIf=\"lastNameInput.hasError('required')\">Please write Your last name.</mat-error>\n        <mat-error *ngIf=\"!lastNameInput.hasError('required')\">First lether should be capital letter followed by at least 2 words</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field>\n        <input type=\"tel\" pattern=\"[0]{1}[0-9]{9}\" matInput placeholder=\"Mobile phone number\" ngModel name=\"phone\" required #phoneInput=\"ngModel\" minlength=\"6\">\n        <mat-error *ngIf=\"phoneInput.hasError('required')\">Please write Your mobile number.</mat-error>\n        <mat-error *ngIf=\"!phoneInput.hasError('required')\">Phone number should start with 0 followed by 9 digits afterwards</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Address\" ngModel name=\"address\" required #adressInput=\"ngModel\">\n        <mat-error *ngIf=\"adressInput.hasError('required')\">Please write Your full address.</mat-error>\n      </mat-form-field>\n\n<!---------------------------------------------------------------------------------------------------------------------------------------->\n    <!-- <font *ngIf=\"emailInUse\" color=\"red\">Email already in use. Please enter another email address!</font> -->\n    <mat-form-field hintLabel=\"This will be used for signing in.\">\n        <input type=\"email\" matInput placeholder=\"Your email\" ngModel name=\"email\" email required #emailInput=\"ngModel\">\n        <mat-error *ngIf=\"emailInput.hasError('required')\">Please write Your email address.</mat-error>\n        <mat-error *ngIf=\"!emailInput.hasError('required')\">Please use the correct email format.</mat-error>\n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <mat-form-field appearance=\"standard\" hintLabel=\"Please enter minimum 6 characters.\">\n        <mat-label>Your password</mat-label>\n        <input type=\"password\" matInput placeholder ngModel name=\"password\" [(ngModel)]=password required minlength=\"6\" #passInput=\"ngModel\">\n        <mat-hint align=\"end\">{{ passInput.value?.length }} /6 </mat-hint>\n        <mat-error *ngIf=\"passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n        <mat-error *ngIf=\"!passInput.hasError('required')\">Please enter minimum 6 characters.</mat-error> \n      </mat-form-field>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <mat-checkbox color=\"primary\" ngModel name=\"acceptance\" required></mat-checkbox>\n      <!-- I accept the <font face=\"verdana\" color=\"blue\" (click)=\"onTos()\"><u>terms and conditions</u></font> of use. -->\n      I accept the <a href=\"javascript:;\" (click)=\"onTos()\">terms and conditions</a> of use.\n    </div>\n  \n  <div class=\"alert\" *ngIf=\"errorString !=''\">{{ errorString }}</div>\n  <!---------------------------------------------------------------------------------------------------------------------------------------->\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">\n        Sign up!\n      </button>\n    </form>\n\n\n<p fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" class=\"pClass\">\n    Already have an account?\n     <a routerLink=\"/\" >\n      Consider to login here!\n     </a></p> \n</section>"

/***/ }),

/***/ "./src/app/frontpage/signup/signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/frontpage/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_reputation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reputation.service */ "./src/app/services/reputation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, userService, appComponent, repService) {
        this.router = router;
        this.userService = userService;
        this.appComponent = appComponent;
        this.repService = repService;
        this.errorString = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.userService.doesEmailExists(form.value.email)) {
            var newID = this.userService.addUser(form.value.firstName, form.value.lastName, form.value.email, form.value.phone, form.value.address, form.value.password, form.value.typeOfUser);
            this.errorString = "";
            this.appComponent.setLoggedIn(true);
            this.userService.validateLogin(form.value.email, form.value.password);
            this.repService.initReputation(newID);
            //___________________________________________ reddirect
            if (this.userService.getCurrenSession().id_user != -1) {
                var reddirect_path_1 = "/";
                if (this.userService.getCurrenSession().acc_type == "driver") {
                    reddirect_path_1 = "/view-current-rides";
                }
                else {
                    reddirect_path_1 = "/search-active-rides";
                }
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                    return _this.router.navigate([reddirect_path_1]);
                });
            }
            //___________________________________________ reddirect end
        }
        else {
            this.errorString = "This email already exist!";
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/frontpage/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/frontpage/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _services_reputation_service__WEBPACK_IMPORTED_MODULE_3__["ReputationService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* Modul za registraciju Angular Material komponenti */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var matModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: matModules.slice(),
            exports: matModules.slice()
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontpage/login/login.component */ "./src/app/frontpage/login/login.component.ts");
/* harmony import */ var _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontpage/signup/signup.component */ "./src/app/frontpage/signup/signup.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var rute = [
    { path: '', component: _frontpage_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'signup', component: _frontpage_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(rute)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/drive_rides.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/drive_rides.service.ts ***!
  \*************************************************/
/*! exports provided: DriveRidesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveRidesService", function() { return DriveRidesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DriveRidesService = /** @class */ (function () {
    function DriveRidesService() {
        this.driveRideList = [
            {
                id_drive_rides: 1,
                id_driver: 2,
                name: "drive1",
                start_location: "start loc1",
                end_location: "end loc 1",
                departure_time: "10:30",
                start_time: "10:30",
                end_time: "11:30",
                drive_ride_status: 'ongoing',
                passengers_limit: 5,
                current_passengers_number: 2,
                current_passengers_data: [
                    { id_user: 1 },
                    { id_user: 3 }
                ],
                drive_ride_stops: [
                    { stop_name: "stop1" },
                    { stop_name: "stop2" }
                ],
                date: new Date()
            },
            {
                id_drive_rides: 2,
                id_driver: 2,
                name: "drive2",
                start_location: "start loc2",
                end_location: "end loc 2",
                departure_time: "12:30",
                start_time: "12:30",
                end_time: "13:30",
                drive_ride_status: 'finished',
                passengers_limit: 5,
                current_passengers_number: 1,
                current_passengers_data: [
                    { id_user: 1 }
                ],
                drive_ride_stops: [
                    { stop_name: "stop1" },
                    { stop_name: "stop2" }
                ],
                date: new Date()
            }, {
                id_drive_rides: 3,
                id_driver: 2,
                name: "drive3",
                start_location: "start loc2",
                end_location: "end loc 2",
                departure_time: "01:30",
                start_time: "03:30",
                end_time: "03:30",
                drive_ride_status: 'ongoing',
                passengers_limit: 5,
                current_passengers_number: 0,
                current_passengers_data: [],
                drive_ride_stops: [
                    { stop_name: "stop1" },
                    { stop_name: "stop2" }
                ],
                date: new Date()
            }
        ];
    }
    DriveRidesService.prototype.setDriveRide = function (id_driver, name, start_location, end_location, start_time, end_time, passengers_limit, date, drive_ride_stops) {
        var newID = this.driveRideList[this.driveRideList.length - 1].id_drive_rides + 1;
        this.driveRideList.push({
            id_drive_rides: newID,
            id_driver: id_driver,
            name: name,
            start_location: start_location,
            end_location: end_location,
            departure_time: "",
            start_time: start_time,
            end_time: end_time,
            drive_ride_status: 'ongoing',
            passengers_limit: passengers_limit,
            current_passengers_number: 0,
            current_passengers_data: [],
            drive_ride_stops: drive_ride_stops,
            date: date
        });
    };
    DriveRidesService.prototype.getDriverRides = function (id_driver) {
        var driveRideList2 = [];
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_driver"] == id_driver) {
                driveRideList2.push(this.driveRideList[i]);
            }
        }
        return driveRideList2;
    };
    DriveRidesService.prototype.getUniqueRide = function (id_ride) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == id_ride) {
                return this.driveRideList[i];
            }
        }
    };
    DriveRidesService.prototype.removeUniqueRide = function (id_ride) {
        var filtered = this.driveRideList.filter(function (el) { return el.id_drive_rides != id_ride; });
        this.driveRideList = filtered;
    };
    DriveRidesService.prototype.getPassengersArray = function (id_drive) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == id_drive) {
                return this.driveRideList[i]["current_passengers_data"];
            }
        }
    };
    DriveRidesService.prototype.getStopsArray = function (id_drive) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == id_drive) {
                return this.driveRideList[i]["drive_ride_stops"];
            }
        }
    };
    DriveRidesService.prototype.getOngoingDrives = function () {
        var returnDriveRideList = [];
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["drive_ride_status"] == 'ongoing') {
                returnDriveRideList.push(this.driveRideList[i]);
            }
        }
        return returnDriveRideList;
    };
    DriveRidesService.prototype.getSpecificInactivePassengerRides = function (pID) {
        var returnDriveRideList = [];
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["drive_ride_status"] != 'ongoing') {
                for (var j = 0; j < this.driveRideList[i].current_passengers_data.length; j++) {
                    if (this.driveRideList[i].current_passengers_data[j]["id_user"] == pID) {
                        returnDriveRideList.push(this.driveRideList[i]);
                    }
                }
            }
        }
        return returnDriveRideList;
    };
    DriveRidesService.prototype.addPassengerToDriveListIfThereIsFreeSpace = function (in_id_drive, in_id_pass) {
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == in_id_drive) {
                if (this.driveRideList[i]["current_passengers_number"] < this.driveRideList[i]["passengers_limit"]) {
                    for (var elem in this.driveRideList[i]["current_passengers_data"]) {
                        if (this.driveRideList[i]["current_passengers_data"][elem].id_user == in_id_pass) {
                            return "aleardy_exist";
                        }
                    }
                    this.driveRideList[i]["current_passengers_data"].push({ id_user: in_id_pass });
                    this.driveRideList[i]["current_passengers_number"] += 1;
                    return "success";
                }
                else {
                    return "full";
                }
            }
        }
    };
    DriveRidesService.prototype.isRequestAvailableForUniqueUser = function (in_id_drive, in_id_pass) {
        console.log("in_id_pass " + in_id_pass);
        console.log("in_id_drive " + in_id_drive);
        for (var i = 0; i < this.driveRideList.length; i++) {
            if (this.driveRideList[i]["id_drive_rides"] == in_id_drive) {
                if (this.driveRideList[i]["current_passengers_number"] < this.driveRideList[i]["passengers_limit"]) {
                    for (var elem in this.driveRideList[i]["current_passengers_data"]) {
                        if (this.driveRideList[i]["current_passengers_data"][elem].id_user == in_id_pass) {
                            return "aleardy_exist";
                        }
                    }
                    return "success";
                }
                else {
                    return "full";
                }
            }
        }
    };
    DriveRidesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DriveRidesService);
    return DriveRidesService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
        this.notificationList = [
            {
                notification_id: 1,
                id_passenger: 1,
                id_driver: 2,
                type: 'request',
                approved: false,
                dismissed_by_driver: false,
                ride_id: 1,
            },
            {
                notification_id: 2,
                id_passenger: 5,
                id_driver: 2,
                type: 'request',
                approved: false,
                dismissed_by_driver: false,
                ride_id: 3,
            },
            {
                notification_id: 3,
                id_passenger: 1,
                id_driver: 2,
                type: 'ride_end',
                ride_end_rated_driver: false,
                ride_end_rated_passenger: false,
                ride_id: 1,
            }
        ];
    }
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setNewRequest = function (in_id_pass, in_id_driver, ride_id) {
        var newID = this.notificationList[this.notificationList.length - 1].notification_id + 1;
        this.notificationList.push({
            ride_id: ride_id,
            notification_id: newID,
            id_passenger: in_id_pass,
            id_driver: in_id_driver,
            type: 'request',
            approved: false,
            dismissed_by_driver: false
        });
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setNewDriveEnd = function (in_id_pass, in_id_driver, ride_id) {
        var newID = this.notificationList[this.notificationList.length - 1].notification_id + 1;
        this.notificationList.push({
            ride_id: ride_id,
            notification_id: newID,
            id_passenger: in_id_pass,
            id_driver: in_id_driver,
            type: 'ride_end',
            ride_end_rated_driver: false,
            ride_end_rated_passenger: false,
        });
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setRequestApprovedTrue = function (notiID) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == notiID) {
                this.notificationList[i]["approved"] = true;
            }
        }
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.setDissmissedTrue = function (notiID) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == notiID) {
                this.notificationList[i]["dismissed_by_driver"] = true;
            }
        }
    };
    // ------------------------------------------------------------------------------------
    NotificationsService.prototype.getNotificationsForSpecificUserRequest = function (in_id) {
        var returnList = [];
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["type"] == "request") {
                if (this.notificationList[i]["id_passenger"] == in_id) {
                    returnList.push(this.notificationList[i]);
                }
            }
        }
        return returnList;
    };
    NotificationsService.prototype.getNotificationsForSpecificDriverRequest = function (in_id) {
        var returnList = [];
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["type"] == "request") {
                if (this.notificationList[i]["id_driver"] == in_id) {
                    if (!this.notificationList[i]["dismissed_by_driver"] && !this.notificationList[i]["approved"])
                        returnList.push(this.notificationList[i]);
                }
            }
        }
        return returnList;
    };
    NotificationsService.prototype.getNotificationsForSpecificUserEndedRides = function (in_id) {
        var returnList = [];
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["type"] == "ride_end") {
                if (this.notificationList[i]["id_passenger"] == in_id && this.notificationList[i]["ride_end_rated_passenger"] == false) {
                    returnList.push(this.notificationList[i]);
                }
                else if (this.notificationList[i]["id_driver"] == in_id && this.notificationList[i]["ride_end_rated_driver"] == false) {
                    returnList.push(this.notificationList[i]);
                }
            }
        }
        return returnList;
    };
    NotificationsService.prototype.setRideEndRatedDriver = function (id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == id) {
                this.notificationList[i]["ride_end_rated_driver"] = true;
            }
        }
    };
    NotificationsService.prototype.setRideEndRatedPassenger = function (id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == id) {
                this.notificationList[i]["ride_end_rated_passenger"] = true;
            }
        }
    };
    NotificationsService.prototype.getPassengerIdFromNotification = function (in_id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == in_id) {
                return this.notificationList[i]["id_passenger"];
            }
        }
    };
    NotificationsService.prototype.getRideIDFromNotification = function (in_id) {
        for (var i = 0; i < this.notificationList.length; i++) {
            if (this.notificationList[i]["notification_id"] == in_id) {
                return this.notificationList[i]["ride_id"];
            }
        }
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/services/reputation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/reputation.service.ts ***!
  \************************************************/
/*! exports provided: ReputationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReputationService", function() { return ReputationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReputationService = /** @class */ (function () {
    function ReputationService() {
        this.repList = [
            {
                id_reputation: 1,
                id_user: 1,
                rep_positive: 4,
                rep_negative: 0,
                rep_comment: [{
                        id_user_from: 2,
                        comment: "great ride!"
                    }, {
                        id_user_from: 3,
                        comment: "bad ride!"
                    }],
            },
            {
                id_reputation: 2,
                id_user: 2,
                rep_positive: 1,
                rep_negative: 2,
                rep_comment: [{
                        id_user_from: 1,
                        comment: "awesome ride!"
                    }, {
                        id_user_from: 3,
                        comment: "great!"
                    }],
            },
            {
                id_reputation: 3,
                id_user: 3,
                rep_positive: 0,
                rep_negative: 0,
                rep_comment: [],
            },
            {
                id_reputation: 4,
                id_user: 4,
                rep_positive: 0,
                rep_negative: 0,
                rep_comment: [],
            },
            {
                id_reputation: 5,
                id_user: 5,
                rep_positive: 0,
                rep_negative: 0,
                rep_comment: [],
            }
        ];
    }
    ReputationService.prototype.getReputationOfOneUser = function (id_user) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id_user) {
                return this.repList[i];
            }
        }
    };
    ReputationService.prototype.initReputation = function (id_user) {
        var newID = this.repList[this.repList.length - 1].id_reputation + 1;
        this.repList.push({
            id_reputation: newID,
            id_user: id_user,
            rep_positive: 0,
            rep_negative: 0,
            rep_comment: [],
        });
    };
    ReputationService.prototype.addPositive = function (id) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id) {
                this.repList[i]["rep_positive"] = this.repList[i]["rep_positive"] + 1;
            }
        }
    };
    ReputationService.prototype.setNegative = function (id) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id) {
                this.repList[i]["rep_negative"] = this.repList[i]["rep_positive"] + 1;
            }
        }
    };
    ReputationService.prototype.setNewComment = function (id, id_from, comment) {
        for (var i = 0; i < this.repList.length; i++) {
            if (this.repList[i]["id_user"] == id) {
                this.repList[i]["rep_comment"].push({
                    id_user_from: id_from,
                    comment: comment
                });
            }
        }
    };
    ReputationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ReputationService);
    return ReputationService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersService = /** @class */ (function () {
    function UsersService() {
        this.current_session = {
            id_user: -1,
            fname: "",
            lname: "",
            contact_email: "",
            contact_phone: "",
            contact_address: "",
            password: "",
            acc_type: 'passenger'
        };
        /// setting userList---------------------------------------------------------------------------------
        this.userList = [
            {
                id_user: 1,
                fname: "Jeremiah",
                lname: "Riley",
                contact_email: "jeremiah@example.com",
                contact_phone: "0123456789",
                contact_address: "2014 Public Works Drive Chattanooga, TN 37421",
                password: "secret",
                acc_type: 'passenger'
            },
            {
                id_user: 2,
                fname: "Pam",
                lname: "Smith",
                contact_email: "pam.pSmith@example.com",
                contact_phone: "0123456789",
                contact_address: "3246 Boring Lane Inverness, CA 94937",
                password: "secret",
                acc_type: 'driver'
            },
            {
                id_user: 3,
                fname: "John",
                lname: "Dusek",
                contact_email: "johnn@example.com",
                contact_phone: "0123456789",
                contact_address: "3762 Briarwood Drive Camden, NJ 08102",
                password: "secret",
                acc_type: 'passenger'
            },
            {
                id_user: 4,
                fname: "Jared",
                lname: "Leighton",
                contact_email: "jaredd@example.com",
                contact_phone: "0123456789",
                contact_address: "60 Pheasant Ridge Road Philadelphia, PA 19103",
                password: "secret",
                acc_type: 'driver'
            },
            {
                id_user: 5,
                fname: "Ingrid",
                lname: "Monsen",
                contact_email: "imonsen@example.com",
                contact_phone: "0123456789",
                contact_address: "Serenade Opus 108 9700 Volkegem",
                password: "secret",
                acc_type: 'passenger'
            },
        ];
    }
    /// end userList---------------------------------------------------------------------------------
    //---------------------------------- getuserList -------------------------------------------------
    UsersService.prototype.getuserList = function () {
        return this.userList;
    };
    //---------------------------------- getCurrenSession ----------------------------------------------
    UsersService.prototype.getCurrenSession = function () {
        return this.current_session;
    };
    UsersService.prototype.setCurrenSession = function (current_session_in) {
        this.current_session = current_session_in;
    };
    //---------------------------------- getProfileData -------------------------------------------------
    UsersService.prototype.getProfileData = function (id_user) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["id_user"] == id_user) {
                return this.userList[i];
            }
        }
        // TODO return reputation and comments as well
    };
    //---------------------------------- setUser --------------------------------------------------------
    UsersService.prototype.addUser = function (in_fname, in_lname, in_contact_email, in_contact_phone, in_contact_address, in_password, in_acc_type) {
        var newID = this.userList[this.userList.length - 1].id_user + 1;
        this.userList.push({
            id_user: newID,
            fname: in_fname,
            lname: in_lname,
            contact_email: in_contact_email,
            contact_phone: in_contact_phone,
            contact_address: in_contact_address,
            password: in_password,
            acc_type: in_acc_type == 'driver' ? 'driver' : 'passenger'
        }); // end push;
        return newID;
    }; //end setUser;
    //---------------------------------- doesEmailExists ------------------------------------------
    UsersService.prototype.doesEmailExists = function (email_in) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["contact_email"] == email_in) {
                return true;
            }
        }
        return false;
    };
    //---------------------------------- validateLogin ----------------------------------------------
    UsersService.prototype.validateLogin = function (email_in, pwd_in) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["contact_email"] == email_in && this.userList[i]["password"] == pwd_in) {
                this.setCurrenSession(this.userList[i]);
                return true;
            }
        }
        return false;
    }; // validateLogin end;
    //---------------------------------- updateUser ----------------------------------------------
    UsersService.prototype.updateUser = function (in_model) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i]["id_user"] == in_model.id_user) {
                this.userList[i] = in_model;
            }
        }
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UsersService);
    return UsersService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /mnt/72E89499E8945CE3/Novo/KWA Danilo rezerva/carpol/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map