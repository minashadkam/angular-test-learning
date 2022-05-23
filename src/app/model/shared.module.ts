import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HighlightDirective} from '../directives/highlight.directive';
import {CanvasComponent} from '../00-02-Component Testing/convas/canvas.component';


@NgModule({
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    // SharedModule importers won't have to import FormsModule too
    FormsModule,
    HighlightDirective,
    TitleCasePipe,
    CanvasComponent
  ],
  declarations: [ HighlightDirective, TitleCasePipe, CanvasComponent ]
})
export class SharedModule { }
