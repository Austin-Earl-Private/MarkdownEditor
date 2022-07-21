import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from "./sidebar/sidebar.module";
import {MarkdownEditorModule} from "./editor/markdown-editor/markdown-editor.module";
import {MarkdownModule} from "ngx-markdown";
import {MarkdownRenderModule} from "./editor/markdown-render/markdown-render.module";
import {CodeEditorModule} from "@ngstack/code-editor";
import {NgxResizableModule} from "@3dgenomes/ngx-resizable";
import { RerenderOnChangeDirective } from './rerender-on-change.directive';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { EditorComponent } from './editor/editor.component';
import { DocumentlistComponent } from './documentlist/documentlist.component';
import {EditorModule} from "./editor/editor.module";
import {RouterModule} from "@angular/router";
import {routes} from "./routing.constant";
import {MonacoEditorModule} from "ngx-monaco-editor";
// import {MonacoEditorModule} from "@materia-ui/ngx-monaco-editor";

@NgModule({
  declarations: [
    AppComponent,
    RerenderOnChangeDirective,
    DocumentViewerComponent,
    DocumentlistComponent,

  ],
  imports: [
    MarkdownModule.forRoot(),
    // CodeEditorModule.forRoot({
    //   // baseUrl: 'assets/monaco',
    //   // typingsWorkerUrl: 'assets/workers/typings-worker.js'
    // }),
    NgxResizableModule,
    BrowserModule,
    SidebarModule,
    EditorModule,
    HttpClientModule,
    MarkdownEditorModule,
    RouterModule.forRoot(routes),
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
