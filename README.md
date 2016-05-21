# Angular 2 Click Outside Directive (using DOM event bubbling)
This is a basic starter project contains the Click-Outside directive.
This directive is for detecting clicks outside of a DOM element where the directive is placed on.

See: https://embed.plnkr.co/m6QXd3EQSGfPg8tiIe0y/

Unlike many other click-outside detecting techniques (usually some kind of DOM traversing),
this directive will detect the outSide click using DOM event bubbling.

##Explenation
If an click event is triggered within our component it will bubble up all the way up the DOM, passing our Host element, till it reaches the Document root level.
As seen below, we are binding to the Element:click, and to the Document:click.
Element click:
If we click from inside the Element, the 1st method to be called is the trackEvent(event)- where we save a reference to the event.
Document click:
Every click will eventually (unless stopped - highly not recommended https://css-tricks.com/dangers-stopping-event-propagation/ ) will reach the document level.
At that point we compare to see if the event passed the Element Host component.

```[html]
@Directive({
    selector: '[clickOutside]',
    host: {
        "(click)": "trackEvent( $event )",            // save a reference to the event click
        "(document: click)": "compareEvent( $event )" // compare the event that bubbled up to the one we save in the trackEvent method
    }
})
```

## Setup
To use this project please do the following steps;

- Clone the project

```bash
git clone https://github.com/giladym/angular2-click-outside-directive
```
- Install all the dependencies

```bash
npm install
```
- Run the app

```bash
npm start
```

Keep in mind that the app, view and style folder are created when starting/compiling the app. Please also make sure you have NodeJs installed.

### References
For the directive heavily inspired by:
[Ben Nadel] (http://www.bennadel.com/blog/3009-tracking-click-events-outside-the-current-component-in-angular-2-beta-1.htm)

