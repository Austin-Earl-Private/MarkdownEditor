import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MarkdownService} from "./markdown.service";
import {DocumentService} from "../document-viewer/document.service";
import {Document} from "../document-viewer/models/document.model";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  host:{
    class:'w-full h-screen'
  }
})
export class EditorComponent implements OnInit {

  document:Document;
  constructor(private route: ActivatedRoute,private  markdownEditor: MarkdownService, private documentService:DocumentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params:Params)=>{
      const id = params['id'];
      console.log(params)
      if(id){
        console.log('Found ID')
        const content = await this.documentService.getDocumentContent(id)
        console.log(content)
        this.markdownEditor.updateContent(content);
        this.document = content;
      }else{
        console.log('NO ID FOUND')
      }
    })
  }

}
