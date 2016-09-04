import {Component} from '@angular/core';
import {Base} from '../../../base';

@Component({
    moduleId:module.id,
    selector:'sign-up',
    templateUrl:'./sign-up.page.component.html',
    styleUrls:['../sign-in/sign-in.page.component.css']
})
export class SignUpPageComponent extends Base{
    user:User={userId:"",password:""};

    signUp(){
            this.$.ajax({
                method:"POST",
                url:'localhost:3000/sign-up',
                data:this.user,
                success:(rtn)=>{
                    console.log(rtn);
                }

            })
    }
    
}