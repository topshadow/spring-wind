//导出对象数组化

//页面
export * from './system/pages/index';

//组件

import {SignInPageComponent} from './sign/sign-in/sign-in.page.component';
import {SignUpPageComponent} from './sign/sign-up/sign-up.page.component';
import {CodeOnlineComponent} from './code-online/code-online.component';
import {HomePageComponent} from './sign/home-page/home-page.component';

export {SignInPageComponent,SignUpPageComponent,CodeOnlineComponent,HomePageComponent}



export default [SignInPageComponent,SignUpPageComponent,CodeOnlineComponent,HomePageComponent];

