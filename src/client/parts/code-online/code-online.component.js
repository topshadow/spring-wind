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
var router_1 = require('@angular/router');
var socket_component_1 = require('../../proxy/socket.component');
var CodeOnlineComponent = (function (_super) {
    __extends(CodeOnlineComponent, _super);
    // code="";
    function CodeOnlineComponent(router, el) {
        _super.call(this);
        this.router = router;
        this.el = el;
    }
    CodeOnlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('output', function (data) {
            console.log('output', data);
            _this.setPreviewHTMLContent(data.html);
        });
    };
    CodeOnlineComponent.prototype.keypress = function (md) {
        var html = window['markdown'].toHTML(md);
        this.socket.emit('input', { html: html });
        this.setPreviewHTMLContent(html);
    };
    CodeOnlineComponent.prototype.setPreviewHTMLContent = function (html) {
        var el = window['$']('.preview').html(html);
        // this.code=html;
    };
    CodeOnlineComponent.prototype.closeSocket = function () {
    };
    CodeOnlineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'code-online',
            templateUrl: './code-online.html',
            styleUrls: ["./code-online.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], CodeOnlineComponent);
    return CodeOnlineComponent;
}(socket_component_1.SocketComponent));
exports.CodeOnlineComponent = CodeOnlineComponent;
//# sourceMappingURL=code-online.component.js.map