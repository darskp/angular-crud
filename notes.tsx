//! 1. Overview
// ng v - to check whether angular cli or not
// How angular render by default?

// ng new projectname
// what is single page application - one index html and based on the route the component will execute and render the component reference to
// angular.json -> configuration
// 1 index.html -> directive -- <app-root></app-root> html tag

//main.ts -- app-comp reference and also we have app.config

//! 2. route and navigation
// app.routes.ts
// [{
//     *   path: 'parent',
//     *   component: ParentComponent,
//     *   children: [{
//      *     path: 'list',
//         *     component: ListComponent
//      *   }, {
//         *     path: 'child',
//         *     component: ChildComponent
//      *   }]
//     * }]

// add directive inside the app - <router-outlet></router-outlet> - to render the component
//     < a routerLink = "/parent" ></ > and import in the component RouterLink

// why navigation ? - angular is a spa and to achieve multiple page navigation we need to relay on the routing library.

//! routes

// routes
// router - outlet - responsible for rendering the routes
// router-link- to navigate
// router link active

//{path:"", component:name}
// in .app html -- <router-outlet></router-outlet>
// navigation
// next - in anchor instead of ahref - routerLink import RouterOutlet

//! 3. component - part of the ui
//cli cmd -  ng generate component name

//standalone - independent component

// app-component - decorator - info about the html css and spec files linking

// interpolation - show the varibale in the ui, by accessing from the class {{}}
// property binding  - <input class="form-control" [value] = "firstName" [minLength]="mynumber" [type]="mytype" /> - []
// to pass dynamic value to the html elem properties or atribrute- just wrap with []

// two way data binding - formsModule- import - where ever i am using the varible it is reflecting - forms only input use - [(ngModel)]
// event binding - // <button (click) ="showMessage()">test</button>

// data binding -- 2 types
//how we bind the data to the html elements

//? 1. one way
//  1. .ts to .html(template)
//     1. property binding - in html element assiging value to the property - or attribute (classname) and make dynamic
            //  <input [value]="myName" type="text"/>
//     2. interpolation - {{}}
//  2.html(template) to .ts
//     1.event binding - click, change, mouseenter, mouseleave,

{/* <select (change) = "selectedValue($event)" >
  <option value="">select</option>
  <option value="t1">t1</option>
  <option value="t2">t2</option>
  <option value="t3">t3</option>
</select > */}

//? 2. two way
//    ng model - 2 way, when you type any letters inside the input box same typed var values will be reflcted, whereever you have used them inside the component
// wiil only work in input not in p h1

//! constructor
1. //dependency injection
// constructor(private clientService: ClientService) {
// }

2. // clientService = inject(ClientService)

//! Directives
// structural,
// attribute
// ngIf, ngFor || ngClass, ngStyle
// http module is deprecated

// services -  where we include all our resuable code or in other words we can say 
// used to write api calls related function, - angular cli  ng g s master




// control flow Statement
// @if, @for,@switch - *ngIf and *ngFor (these control flow directives have been replaced with @if blocks as there is to no need ot import CommonModule, )

//reactive form - 
// import { ReactiveFormsModule } from "@angular/forms"
//  formGrup, FormControl
// click fn - formGrpnname.value;
// instead of ngModel -- formControlName="projectName", FormGroup, FormControl, validator, 
// projectName: new FormControl('', [
//     Validators.required,
//     Validators.minLength(4)
// ]),

//rgx
//signal - why? observable?  ZoneChangeDetection? 
// set, get, as a method
// firstName=signal<string>("Angular-18")

// pipe - date, uppercase, JsonPipe, AsyncPipe ---   userList$: Observable<any> = new Observable<any>;
// reusable component - @Input - parent to child - pass the attribute to make dynamic
// @Input() alertMsg: string = '';
{/* <app-alert [alertMsg]="'This is a warning!'" [alertType]="'warning'"></app-alert> */ }


// child to parent - @output
// @Output() onBtnClick = new EventEmitter<any>();

// onMyBtn(value: string = "admin") {
//     this.onBtnClick.emit(value || null);
// }

// lifecycle event - component event
// implements oninit
//oninit

// pipe
// default functionality, formatting
// lowercase,uppercase,slice,json,async