"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./parts/index');
var index_2 = require('./parts/api/index');
var appRoutes = [
    {
        path: "",
        redirectTo: "/system/index",
        pathMatch: "full"
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