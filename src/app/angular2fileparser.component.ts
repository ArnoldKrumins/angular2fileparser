import { Component} from '@angular/core';
import {DragDropComponent} from "./directives/drag-drop";


@Component({
  moduleId: module.id,
  selector: 'angular2fileparser-app',
  directives:[DragDropComponent],
  templateUrl: 'angular2fileparser.component.html',
  styleUrls: ['angular2fileparser.component.css']
})
export class Angular2fileparserAppComponent {

  private drag:boolean = true;

  constructor(){
  }


  isDragging(value){
    console.log(value);
    this.drag = value;
  }



  //
  //
  //var mouseup =  Observable.fromEvent(this.dropzone, 'mouseup');
  //private mousemove = Observable.fromEvent(document,   'mousemove');
  //private mousedown = Observable.fromEvent(this.dropzone, 'mousedown');


}
