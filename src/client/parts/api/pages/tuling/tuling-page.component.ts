import {Component} from '@angular/core';
import ApiDirective  from '../../index';
import {ApiTulingStoryComponent} from '../../parts/tuling/tuling-story/tuling-story.component';

@Component({
    moduleId:module.id,
    selector: 'tuling-page',
    templateUrl:'tuling-page.component.html',
    directives: [ApiTulingStoryComponent]
})
export class ApiTulingPageComponent {

}