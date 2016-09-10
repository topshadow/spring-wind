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
var ApiTulingStoryComponent = (function () {
    function ApiTulingStoryComponent() {
        this.jokes = [];
    }
    ApiTulingStoryComponent.prototype.ngOnInit = function () {
        this.next();
    };
    ApiTulingStoryComponent.prototype.previous = function () {
        if (this.jokes.indexOf(this.selectedJoke) == 0) {
            return;
        }
        this.selectedJoke = this.jokes[this.jokes.indexOf(this.selectedJoke) - 1];
    };
    ApiTulingStoryComponent.prototype.next = function () {
        var tempThis = this;
        if ((!this.jokes.length && !this.selectedJoke) ||
            (this.jokes.indexOf(this.selectedJoke) + 1 == this.jokes.length && this.jokes.length != 0)) {
            window['$'].ajax({
                method: "POST",
                url: "http://www.tuling123.com/openapi/api",
                data: { "key": "e4f269153b7a3e294babe2d6a76399e3", "info": "讲个故事" },
                success: function (rtn) {
                    // console.log(rtn);
                    tempThis.jokes.push(rtn.text);
                    tempThis.selectedJoke = rtn.text;
                }
            });
        }
        else {
            this.selectedJoke = this.jokes[this.jokes.indexOf(this.selectedJoke) + 1];
        }
    };
    ApiTulingStoryComponent = __decorate([
        core_1.Component({
            selector: 'tuling-story',
            template: "\n    \n    <div [innerHTML]=\"selectedJoke\"> </div>\n    <a class=\"btn btn-primary\" (click)=\"previous()\">\u4E0A\u4E00\u5219</a>\n    <a class=\"btn btn-default btn-xs\">\u5F53\u524D\u7B2C{{jokes.indexOf(selectedJoke)+1 }}\u5219\u6545\u4E8B</a> \n    \n    <a class=\"btn btn-primary\" (click)=\"next()\">\u4E0B\u4E00\u5219</a>\n\n     "
        }), 
        __metadata('design:paramtypes', [])
    ], ApiTulingStoryComponent);
    return ApiTulingStoryComponent;
}());
exports.ApiTulingStoryComponent = ApiTulingStoryComponent;
//# sourceMappingURL=tuling-story.component.js.map