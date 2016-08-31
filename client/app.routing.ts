import { Routes, RouterModule } from '@angular/router';
import {IndexPageComponent} from './parts/index';


const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/index",
        pathMatch: 'full'
    },
    {
        path:"index",
        component:IndexPageComponent,
        pathMatch:'full'
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

