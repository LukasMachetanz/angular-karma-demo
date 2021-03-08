import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
@TestDoublee()
export class ParentComponent {
  @ViewChild(ChildComponent)
  public childComponent: ChildComponent | undefined;

  constructor() { }

  public lol(): void {
    this.childComponent?.greetMe();
  }

}
