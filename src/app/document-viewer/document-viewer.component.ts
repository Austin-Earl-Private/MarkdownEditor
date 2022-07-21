import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentService} from "./document.service";
import {Subscription} from "rxjs";
import {Document} from "./models/document.model";

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent implements OnInit, OnDestroy {

  documents:Document[] = [];
  subscription: Subscription;
  constructor(private documentService: DocumentService) {
    this.subscription = documentService.documentsChangedEvent.subscribe(docs=>{
      this.documents = docs;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
