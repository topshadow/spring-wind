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
var tuling_story_component_1 = require('../../parts/tuling-story/tuling-story.component');
var ApiTulingPageComponent = (function () {
    function ApiTulingPageComponent() {
    }
    ApiTulingPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tuling-page',
            templateUrl: 'tuling-page.component.html',
            directives: [tuling_story_component_1.ApiTulingStoryComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ApiTulingPageComponent);
    return ApiTulingPageComponent;
}());
exports.ApiTulingPageComponent = ApiTulingPageComponent;
//# sourceMappingURL=tuling-page.component.js.map