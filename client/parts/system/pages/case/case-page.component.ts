import {Component} from '@angular/core';
import {SystemNavComponent,SystemBannerComponent,SystemTemplateTypeComponent,SystemCaseDemoComponent ,SystemDynamicComponent,SystemFooterComponent} from '../../parts/index';

@Component({
    moduleId:module.id,
    selector:'system-case-page',
    directives:[SystemNavComponent,SystemBannerComponent,SystemTemplateTypeComponent,
    SystemCaseDemoComponent,
    SystemDynamicComponent,SystemFooterComponent],
    templateUrl:'./case-page.component.html'
})
export class SystemCasePageComponent{

}