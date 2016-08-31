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
var core_1 = require('@angular/core');
var index_1 = require('../../parts/index');
var SystemIndexPageComponent = (function () {
    function SystemIndexPageComponent() {
    }
    SystemIndexPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'index-page',
            templateUrl: './index-page.html',
            directives: [index_1.SystemNavComponent, index_1.SystemBannerComponent, index_1.SystemFooterComponent,
                index_1.SystemProductAdvantageComponent, index_1.SystemCaseComponent, index_1.SystemDynamicComponent],
            styleUrls: ['./index-page.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SystemIndexPageComponent);
    return SystemIndexPageComponent;
}());
exports.SystemIndexPageComponent = SystemIndexPageComponent;
//# sourceMappingURL=index-page.component.js.map