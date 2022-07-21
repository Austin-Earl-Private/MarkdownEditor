import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderComponent } from './render/render.component';
import {MarkdownModule} from "ngx-markdown";



@NgModule({
  declarations: [
    RenderComponent
  ],
  exports: [
    RenderComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule
  ]
})
export class MarkdownRenderModule { }
