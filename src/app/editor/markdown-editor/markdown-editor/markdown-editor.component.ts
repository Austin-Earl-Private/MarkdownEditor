import {
  Component, Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {MarkdownService} from "../../markdown.service";
import {DocumentService} from "../../../document-viewer/document.service";
import {Document} from "../../../document-viewer/models/document.model";

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css'],
})
export class MarkdownEditorComponent implements OnInit, OnDestroy {
  options = {
    lineNumbers: true,

    theme: 'vs-dark',
    language: 'markdown'
  };
  code:string;
  // @Input()
  doc:Document;
  title:string='Unnamed';

  contentChangedSubscription: Subscription | undefined;

  constructor(private readonly markdownService:MarkdownService,private  render:Renderer2, private documentService: DocumentService) {
    this.doc = new Document();
    this.doc.name = this.title;
    this.contentChangedSubscription = this.markdownService.contentChangedEvent.subscribe((content)=>{
      console.log("CHANGING CONTENT OF CODE EDITOR")
      this.doc = content;
      this.code= this.doc.content;
      this.title = this.doc.name;


    })

  }
  async update(){
    if(!this.doc._id){

      this.doc.name = this.title;
      this.doc.content = this.code;
      this.doc = await this.documentService.createDocument(this.doc);

    }else{
      this.doc.content = this.code;
      this.documentService.updateDocument(this.doc);
    }


  }
  // saveDocument(){
  //   this.documentService.updateDocument(null);
  // }
  ngOnInit() {


  }

  ngOnDestroy(): void {
    // this.sidebarSubscription?.unsubscribe()
    // this.contentChangedSubscription.unsubscribe();
  }

  updateContent(){
    this.doc.content = this.code;
    this.markdownService.updateContent(this.doc);
  }
  onchange(){
    this.updateContent()
  }
  changeTitle(event:KeyboardEvent){
    this.title = event.target['value'];
    console.log(`Changing title ${this.title}`)
    this.doc.name = this.title;
  }




}
