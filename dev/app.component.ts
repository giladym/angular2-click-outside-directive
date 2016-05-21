import { Component, OnInit } from 'angular2/core';
import { ClickOutsideDirective} from './click-outside.directive';

@Component({
    selector: 'my-app',
    templateUrl: '/view/app.html',
    directives: [ClickOutsideDirective]
})

export class AppComponent implements OnInit {
    title: string;
    clickResult:string;
    isInside:boolean;
    
    constructor() { 
        this.title = "Angular 2 - Click-Outside directive example";
    }

    ngOnInit() { }

    handleClick(event){
        this.isInside = true; 
        this.clickResult = `Inside Button, on element: ${event.target.tagName}`;
    }

    handleClickOutside(event){
        this.isInside = false;
        this.clickResult = `Outside Button, on element: ${event.target.tagName}`;
    }

}
