import {Component} from '@angular/core';
import {SystemNavComponent,SystemBannerComponent,SystemCaseComponent,SystemDynamicComponent,SystemFooterComponent} from '../../parts/index';

@Component({
    moduleId:module.id,
    selector:'system-template-page',
    directives:[SystemNavComponent,SystemBannerComponent,SystemCaseComponent,SystemDynamicComponent,SystemFooterComponent],
    templateUrl:'./template-page.component.html'
})
export class SystemTemplatePageComponent{

}