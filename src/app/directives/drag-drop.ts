import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Directive({
  providers: [],
  selector: '[drag-drop]'
})
export class DragDropComponent {

@Output() fileDragged: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() fileParsed: EventEmitter<string[]> = new EventEmitter<string[]>();

  private lines:Array<string>;

constructor(private el: ElementRef){

  this.lines = new Array<string>();

  Observable.fromEvent(this.el.nativeElement, 'dragenter').subscribe((event) => console.log(event));
  Observable.fromEvent(this.el.nativeElement, 'dragover').subscribe((event) => console.log(event));

}

}
