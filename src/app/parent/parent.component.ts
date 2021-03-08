import { Component, OnInit } from '@angular/core';
import {ChildComponent} from '../child/child.component';

// tslint:disable-next-line:typedef
export function TestDoublee() {
  return (OriginalComponent: any) => {

    /*
    console.dir(OriginalComponent);

    Object.defineProperty(OriginalComponent, 'ɵfac', {
      get(): any {
        return () => {
          console.log('#ɵfac');
          return new OriginalComponent();
        };
      },
    });
     */



    /*
    Object.defineProperty(OriginalComponent, 'ɵfac', {
      configurable: true,
      writable: true,
      value:  () => {
        console.log("LOL");
        return new OriginalComponent();
      }
    });
     */

    /*
    OriginalComponent.ɵfac =  () => {
      console.log("LOL");
      return new OriginalComponent();
    };
     */

    return OriginalComponent;
  };
}

@TestDoublee()
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
