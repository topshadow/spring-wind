//导出对象数组化
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
//页面
__export(require('./system/pages/index'));
//组件
var sign_in_page_component_1 = require('./sign/sign-in/sign-in.page.component');
exports.SignInPageComponent = sign_in_page_component_1.SignInPageComponent;
var sign_up_page_component_1 = require('./sign/sign-up/sign-up.page.component');
exports.SignUpPageComponent = sign_up_page_component_1.SignUpPageComponent;
var code_online_component_1 = require('./code-online/code-online.component');
exports.CodeOnlineComponent = code_online_component_1.CodeOnlineComponent;
var home_page_component_1 = require('./sign/home-page/home-page.component');
exports.HomePageComponent = home_page_component_1.HomePageComponent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [sign_in_page_component_1.SignInPageComponent, sign_up_page_component_1.SignUpPageComponent, code_online_component_1.CodeOnlineComponent, home_page_component_1.HomePageComponent];
//# sourceMappingURL=index.js.map