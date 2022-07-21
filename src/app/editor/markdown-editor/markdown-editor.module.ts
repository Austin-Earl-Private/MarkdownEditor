import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import {MarkdownModule} from "ngx-markdown";
import {MarkdownService} from "../markdown.service";
import {CodeEditorModule} from "@ngstack/code-editor";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MarkdownEditorComponent
  ],
  exports: [
    MarkdownEditorComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    CodeEditorModule,
    MonacoEditorModule,
    FormsModule
  ],
  providers:[
    MarkdownService

  ]
})
export class MarkdownEditorModule { }
