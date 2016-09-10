import { Routes, RouterModule } from '@angular/router';
import {SystemIndexPageComponent, SystemDownloadPageComponent, SystemCasePageComponent, SystemTemplatePageComponent} from './parts/index';
import {ApiTulingPageComponent} from './parts/api/index';
import {SignInPageComponent, SignUpPageComponent, CodeOnlineComponent,HomePageComponent} from './parts/index'

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/home-page",
        pathMatch: "full"
    },
    {
        path:"home-page",
        component:HomePageComponent
    },
     {
        path:"code-online",
        component:CodeOnlineComponent
    },
    {
        path: "sign-in",
        component: SignInPageComponent
    }, {
        path: "sign-up",
        component: SignUpPageComponent
    },
    {
        path: "system/index",
        component: SystemIndexPageComponent,
    },
    {
        path: "system/download",
        component: SystemDownloadPageComponent
    },
    {
        path: "system/case",
        component: SystemCasePageComponent
    },
    {
        path: "system/template",
        component: SystemTemplatePageComponent
    },
    {
        path: "api/tuling",
        component: ApiTulingPageComponent
    }

    /*
    {
        path: "sign-in",
        component: SignInComponent
    },
    {
        path: ':path',
        component: PageComponent,
        pathMatch: 'full'
    }
    */
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

