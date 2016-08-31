"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./parts/index');
var appRoutes = [
    {
        path: "",
        redirectTo: "/index",
        pathMatch: 'full'
    },
    {
        path: "index",
        component: index_1.IndexPageComponent,
        pathMatch: 'full'
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map