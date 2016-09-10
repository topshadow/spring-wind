"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var base_1 = require('../../../base');
var SignUpPageComponent = (function (_super) {
    __extends(SignUpPageComponent, _super);
    function SignUpPageComponent() {
        _super.apply(this, arguments);
        this.user = { userId: "", password: "" };
    }
    SignUpPageComponent.prototype.signUp = function () {
        this.$.ajax({
            method: "POST",
            url: 'localhost:3000/sign-up',
            data: this.user,
            success: function (rtn) {
                console.log(rtn);
            }
        });
    };
    SignUpPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-up',
            templateUrl: './sign-up.page.component.html',
            styleUrls: ['../sign-in/sign-in.page.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SignUpPageComponent);
    return SignUpPageComponent;
}(base_1.Base));
exports.SignUpPageComponent = SignUpPageComponent;
//# sourceMappingURL=sign-up.page.component.js.map