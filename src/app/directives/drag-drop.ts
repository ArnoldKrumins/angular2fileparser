import { Directive, ElementRef, Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Directive({
  providers: [],
  selector: '[drag-drop]'
})
export class DragDropComponent {

private lines:Array<string>;

constructor(private el: ElementRef){

  this.lines = new Array<string>();

  Observable.fromEvent(this.el.nativeElement, 'mousemove').subscribe((event) => console.log(event));

}

}
