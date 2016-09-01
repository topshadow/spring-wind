import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';


@Component({
    selector: 'tuling-story',
    template: `
    
    <div [innerHTML]="selectedJoke"> </div>
    <a class="btn btn-primary" (click)="previous()">上一则</a>
    <a class="btn btn-default btn-xs">当前第{{jokes.indexOf(selectedJoke)+1 }}则故事</a> 
    
    <a class="btn btn-primary" (click)="next()">下一则</a>

     `
})
export class ApiTulingStoryComponent implements OnInit {
    jokes: string[] = [];
    selectedJoke: string;
    ngOnInit() {
        this.next();
    }
    previous() {
        if (this.jokes.indexOf(this.selectedJoke) == 0) {
            return;
        }
        this.selectedJoke = this.jokes[this.jokes.indexOf(this.selectedJoke) - 1];
    }

    next() {
        var tempThis = this;
        if ((!this.jokes.length&&!this.selectedJoke) ||
        (this.jokes.indexOf(this.selectedJoke)+1 == this.jokes.length && this.jokes.length != 0)) {
            $.ajax({
                method: "POST",
                url: "http://www.tuling123.com/openapi/api",
                data: { "key": "e4f269153b7a3e294babe2d6a76399e3", "info": "讲个故事" },
                success: function (rtn) {
                    // console.log(rtn);
                    tempThis.jokes.push(rtn.text);
                    tempThis.selectedJoke = rtn.text;

                }
            })
        } else {
            this.selectedJoke = this.jokes[this.jokes.indexOf(this.selectedJoke) + 1];
        }
    }

}