// ng v - to check whether angular cli or not

// ng new projectname

// angular.json -> configuration
// 1 index.html -> directive -- <app-root></app-root> html tag

//main.ts -- app-comp reference

//component - part of the ui
//cli cmd -  ng generate component name

//standalone - independent component

// app-component - decorator - info about the html css and spec files linking

// interpolation - show the varibale in the ui, by accessing from the class {{}}
// property binding  - <input class="form-control" [value] = "firstName" [minLength]="mynumber" [type]="mytype" /> - []
// to pass dynamic value to the html elem properties or atribrute- just wrap with []

// two way dat modeling - FormsModule- import - where ever i am using the varible it is reflecting - forms only input use - [(ngModel)]
//event binding - // <button (click) ="showMessage()">test</button>

// data binding -- 2 types

//? 1. one way
//  1. .ts to .html(template)
//     1. property binding - html element assiging value to the property - or attribute (classname)
//     2. interpolation - {{}}
//  2.html(template) to .ts
//     1.event binding - click, change, mouseenter, mouseleave,

//? 2. two way
//    ng model - 2 way, when you type any letters inside the input box same typed var values will be reflcted in the where ever if you have used inside the component
// wiil only work in input not on p h1

//! Directives
// structural,
// attribute
// ngIf, ngFor || ngClass, ngStyle
// http module is deprecated
// services -  where we include all our resuable code, - ng g s master


//! routes

// routes
// router - outlet - responsible for rendering the routes
// router-link- to navigate
// router link active

//{path:"", component:name}
// in .app html -- <router-outlet></router-outlet>
// navigation
// next - in anchor instead of ahref - routerLink import RouterOutlet


// control flow Statement
// @if, @for,@switch - *ngIf and *ngFor (these control flow directives have been replaced with @if blocks as there is to no need ot import CommonModule, )

//reactive form - instead of ngModel -- formControlName="projectName", FormGroup, FormControl, validator, 
//signal - why? observable?  ZoneChangeDetection? 
// set, get, method
// firstName=signal<string>("Angular-18")
// pipe - date, uppercase, JsonPipe, AsyncPipe ---   userList$: Observable<any> = new Observable<any>;
// reusable component - @Input - parent to child - pass the attribute to make dynamic
// child to parent - @output