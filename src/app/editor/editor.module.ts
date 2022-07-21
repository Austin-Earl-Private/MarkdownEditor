import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorComponent} from "./editor.component";
import {MarkdownEditorModule} from "./markdown-editor/markdown-editor.module";
import {MarkdownRenderModule} from "./markdown-render/markdown-render.module";



@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    MarkdownEditorModule,
    MarkdownRenderModule
    ],
  exports:[
    EditorComponent
  ]
})
export class EditorModule { }
