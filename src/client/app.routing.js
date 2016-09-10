"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./parts/index');
var index_2 = require('./parts/api/index');
var index_3 = require('./parts/index');
var appRoutes = [
    {
        path: "",
        redirectTo: "/home-page",
        pathMatch: "full"
    },
    {
        path: "home-page",
        component: index_3.HomePageComponent
    },
    {
        path: "code-online",
        component: index_3.CodeOnlineComponent
    },
    {
        path: "sign-in",
        component: index_3.SignInPageComponent
    }, {
        path: "sign-up",
        component: index_3.SignUpPageComponent
    },
    {
        path: "system/index",
        component: index_1.SystemIndexPageComponent,
    },
    {
        path: "system/download",
        component: index_1.SystemDownloadPageComponent
    },
    {
        path: "system/case",
        component: index_1.SystemCasePageComponent
    },
    {
        path: "system/template",
        component: index_1.SystemTemplatePageComponent
    },
    {
        path: "api/tuling",
        component: index_2.ApiTulingPageComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map