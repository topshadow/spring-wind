import {Component} from '@angular/core';
import {Base} from '../../../base';

@Component({
    moduleId: module.id,
    selector: "sign-in",
    templateUrl: './sign-in.page.component.html',
    styleUrls: ['sign-in.page.component.css']
})
export class SignInPageComponent extends Base{
    user:User={userId:"",password:""};
    login() {
            console.log(this.user);
    }
}