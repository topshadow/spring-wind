export class Base{
    public get  history(){
        return window['history'];
    }  
    public get $(){
        return window['$'];
    }
    
    constructor(){}

}