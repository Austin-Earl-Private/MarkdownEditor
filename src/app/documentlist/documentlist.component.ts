import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentService} from "../document-viewer/document.service";
import {Subscription} from "rxjs";
import {Document} from "../document-viewer/models/document.model";

@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  documents:Document[];
  constructor(private documentService:DocumentService) {
    this.subscription = this.documentService.documentsChangedEvent.subscribe((documents:Document[])=>{
      console.log('List updated')
      this.documents = documents;
    })
    this.documents = this.documentService.getDocuments();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getDocuments(){
    return [...this.documents]
  }
  deleteDocument(doc:Document){
    this.documentService.deleteDocument(doc);
  }

}
