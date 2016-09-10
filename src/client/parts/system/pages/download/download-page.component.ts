import {Component} from '@angular/core';
import {SystemNavComponent,SystemBannerComponent,
    SystemProductAdvantageComponent,SystemDynamicComponent,
    SystemFooterComponent
} from '../../parts/index';

@Component({
    moduleId:module.id,
    selector:'system-download-page',
    directives:[SystemNavComponent,SystemBannerComponent,
    SystemFooterComponent,
    SystemProductAdvantageComponent,SystemDynamicComponent],
    templateUrl:'./download-page.component.html'
})
export  class SystemDownloadPageComponent{

}