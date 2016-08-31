import { Routes, RouterModule } from '@angular/router';
import {SystemIndexPageComponent,SystemDownloadPageComponent,SystemCasePageComponent} from './parts/index';


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

