import { Directive, Output, EventEmitter } from 'angular2/core';

@Directive({
    selector: '[clickOutside]',
    host: {
        "(click)": "trackEvent( $event )",            // we can use instead =>  @HostListener('click', ['$event'])
        "(document: click)": "compareEvent( $event )" // we can use instead =>  @HostListener('document:click', ['$event'])
    }
})
export class ClickOutsideDirective {
    @Output('clickOutside') clickOutside:EventEmitter<any> = new EventEmitter();

    private localEvent = null;
    constructor() {}

    /** Compare event at the Document level to a reference of the Element:click
     * This method triggers when we are on Document level  - Document was clicked or event bubbling
     * If the Document click DON'T MATCH the Event:click reference  => than the click is from outside of the Element
     * @param event
     */
    compareEvent(event){
        if ( event !== this.localEvent ) {
            this.clickOutside.emit( event );
        }
        this.localEvent = null;
    }


    /** Track user click from inside the bound target
     *  We use this to track the click Event when it bubbles up the DOM tree
     * @param event
     */
    trackEvent(event){
        this.localEvent = event;
    }
}