import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Directive({
  providers: [],
  selector: '[drag-drop]'
})
export class DragDropComponent {

@Output() dragging: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() parsed: EventEmitter<string[]> = new EventEmitter<string[]>();

  private lines:Array<string>;

constructor(private el: ElementRef){

  this.lines = new Array<string>();

  Observable.fromEvent(this.el.nativeElement, 'dragenter')
    .subscribe((event) => this.dragging.emit(true));
  Observable.fromEvent(this.el.nativeElement, 'dragover')
    .subscribe((event) => this.dragging.emit(true));

  Observable.fromEvent(this.el.nativeElement, 'drop')
    .subscribe(() =>
      console.log('dropped'));

}

}
