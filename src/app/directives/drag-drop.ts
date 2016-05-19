import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
// import 'rxjs/add/operator/merge';
// import 'rxjs/operator/add/';

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

  const dragenter$ = Observable.fromEvent(this.el.nativeElement, 'dragenter')
    .subscribe(() => true);
  const dragover$ = Observable.fromEvent(this.el.nativeElement, 'dragover')
    .subscribe(() => true);
  const dragleave$ = Observable.fromEvent(this.el.nativeElement, 'dragleave')
    .subscribe(() => false);

  Observable.switchMapTo(Observable.merge(dragenter$, dragover$, dragleave$))
    .subscribe((x)=> this.dragging.emit(x));


  Observable.fromEvent(this.el.nativeElement, 'drop')
    .subscribe(() =>
      console.log('dropped'));

}

}
