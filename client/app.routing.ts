import { Routes, RouterModule } from '@angular/router';
import {SystemIndexPageComponent,SystemDownloadPageComponent,SystemCasePageComponent,SystemTemplatePageComponent} from './parts/index';
import {ApiTulingPageComponent} from './parts/api/index';

const appRoutes: Routes = [
    {
        path:"",
        redirectTo:"/system/index",
        pathMatch:"full"
    },
    {
        path:"system/index",
        component:SystemIndexPageComponent,
    },
    {
        path:"system/download",
        component:SystemDownloadPageComponent
    },
    {
        path:"system/case",
        component:SystemCasePageComponent
    },
    {
        path:"system/template",
        component:SystemTemplatePageComponent
    },
    {
        path:"api/tuling",
        component:ApiTulingPageComponent
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

