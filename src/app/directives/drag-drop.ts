import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/merge';

@Directive({
  selector: '[drag-drop]'
})
export class DragDropComponent {

@Output() dragging: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() parsed: EventEmitter<string[]> = new EventEmitter<string[]>();

  private lines:Array<string>;

constructor(private el: ElementRef){

  this.lines = new Array<string>();

  const dragenter$ = Observable.fromEvent(this.el.nativeElement, 'dragenter');
  const dragover$  = Observable.fromEvent(this.el.nativeElement, 'dragover');
  const dragleave$ = Observable.fromEvent(this.el.nativeElement, 'dragleave');
  const dragdrop$  = Observable.fromEvent(this.el.nativeElement, 'drop');

  dragenter$.merge(dragover$, dragleave$,dragdrop$)
    .subscribe((x)=>  this.dragging.emit(this.parse(x)));

}

  parse(event){
    event.preventDefault();
    return (event.type === 'dragenter' ||  event.type === 'dragover');
  }

}
