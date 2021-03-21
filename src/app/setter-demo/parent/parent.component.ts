import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // @ViewChild(ChildComponent)
  // public childComponent: ChildComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public test() {
    // console.log(this.childComponent?.functionTest());
  }

}
