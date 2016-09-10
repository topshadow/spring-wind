import {Component} from '@angular/core';
import {SystemNavComponent,SystemBannerComponent,
    SystemProductAdvantageComponent,SystemCaseComponent,SystemDynamicComponent,
    SystemFooterComponent
} from '../../parts/index';


@Component({
    moduleId:module.id,
    selector:'index-page',
    templateUrl:'./index-page.html',
    directives:[SystemNavComponent,SystemBannerComponent,SystemFooterComponent,
    SystemProductAdvantageComponent,SystemCaseComponent,SystemDynamicComponent],
    styleUrls:['./index-page.css']
})
export class SystemIndexPageComponent{

}