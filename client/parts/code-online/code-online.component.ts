import {Component, OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {SocketComponent} from '../../proxy/socket.component';


@Component({
    moduleId: module.id,
    selector: 'code-online',
    templateUrl: './code-online.html',
    styleUrls:[`./code-online.css`]
})
export class CodeOnlineComponent extends SocketComponent implements OnInit {
    // code="";
    constructor(public router:Router,public el:ElementRef){super();}

    ngOnInit() {
        this.socket.on('output',(data)=>{
            console.log('output',data);
            this.setPreviewHTMLContent(data.html)
        });
    }

    keypress(md) {
        var html =window['markdown'].toHTML(md);
        this.socket.emit('input',{html});
        
        this.setPreviewHTMLContent(html); 
    }

    setPreviewHTMLContent(html){
        var el =window['$']('.preview').html(html);
        // this.code=html;
    }

    closeSocket(){

    }
}