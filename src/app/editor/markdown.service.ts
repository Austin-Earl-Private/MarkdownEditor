import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Document} from "../document-viewer/models/document.model";

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  contentChangedEvent =new Subject<Document>();
  constructor() {
  }
  ngOnInit() {
  }

  updateContent(newDoc:Document){
    this.contentChangedEvent.next(newDoc);
  }
}
