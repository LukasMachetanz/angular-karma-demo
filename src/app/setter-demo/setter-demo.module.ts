import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { GrandGrandChildComponent } from './grand-grand-child/grand-grand-child.component';



@NgModule({
  declarations: [ParentComponent, ChildComponent, GrandChildComponent, GrandGrandChildComponent],
  imports: [
    CommonModule
  ]
})
export class SetterDemoModule { }
