import {Component, Input, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnDestroy {

  @Input()
  public test: string | undefined;

  constructor(private fb: FormBuilder) {
    console.log("CREATE");
  }

  greetMe(): void {}

  ngOnInit() {
    console.log("INIT");
  }


  ngOnDestroy() {
    console.log("onDestroy");
  }
}
