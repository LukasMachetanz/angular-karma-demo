import {Component, Input} from '@angular/core';
import {FooCmp_Impl} from '../parent/test';
import {FormBuilder} from '@angular/forms';
// import {Solution} from '../../solution';
// import {Log} from '../../test-double';
// import {Log} from '../../test-double';

// @Solution()

@Component({
  templateUrl: './child.component.html',
  selector: 'app-child',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  constructor(private formBuilder: FormBuilder) {
    console.log('CHILD COMPONENTTTTTTT');
  }

  @Input()
  public inputTest: string | undefined;

  @Input()
  public set setterTest(value: string) {}

  public functionTest(): void {}
}

/*
@Component({
selector: 'app-child',
templateUrl: './child.component.html',
styleUrls: ['./child.component.scss']
})
export class ChildComponent_Original {}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent_TestDouble {}

export let ChildComponent = ChildComponent_Original;

export function setChildComponent(className: any): void {
  ChildComponent = className;
}
*/




/*
// import {TestDouble} from '../../test-double';
// import {Router} from '@angular/router';

// @TestDouble()
/*
@Component({
selector: 'app-child',
templateUrl: './child.component.html',
styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Input()
public inputTest: string | undefined;

@Input()
public set setterTest(value: string) {}


constructor() {
if (!Ttransformer.isInTransformContext() && this.formBuilder) {
  this.formBuilder.group({});
}

console.log('FROM CHILD');
}

public functionTest() {
return "RETURNED";
}

ngOnInit(): void {
// console.log("INIT FROM COMP")
}

ngOnDestroy(): void {
// console.log("DESTROY FROM COMP")
}

}

@Component({
selector: 'app-child',
templateUrl: './child.component.html',
styleUrls: ['./child.component.scss']
})
export class ChildComponent_Original implements OnInit {

@Input()
public inputTest: string | undefined;

@Input()
public set setterTest(value: string) {}


constructor() {
if (!Ttransformer.isInTransformContext() && this.formBuilder) {
  this.formBuilder.group({});
}

console.log('FROM CHILD');
}

public functionTest() {
return "RETURNED";
}

ngOnInit(): void {
// console.log("INIT FROM COMP")
}

ngOnDestroy(): void {
// console.log("DESTROY FROM COMP")
}

}
*/
