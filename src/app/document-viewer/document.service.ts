import { Injectable } from '@angular/core';
import {Document} from "./models/document.model";
import {HttpClient} from "@angular/common/http";
import {first, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents:Document[] = [];
  documentsChangedEvent = new Subject<Document[]>();
  constructor(private httpClient:HttpClient) {
    this.httpClient.get<Document[]>('http://localhost:3000/documents').subscribe((documents:Document[])=>{
      this.documents = documents;
      this.sortAndSend();
    })
  }

  private sortAndSend(){
    this.documents = this.documents?.sort((a,b)=>{
      return a.name.localeCompare(b.name);
    })
    this.documentsChangedEvent.next([...this.documents]);
  }
  private findAndReplace(document:Document){
    const index = this.documents.findIndex((doc)=> doc._id === document._id)
    this.documents[index] = document;
    this.sortAndSend();
  }

  updateDocument(document:Document){
    this.httpClient.put<Document>(`http://localhost:3000/documents/${document._id}`,document).subscribe((doc)=>{
      this.findAndReplace(document);
    })

  }

  getDocuments(){
    return [...this.documents];
  }
  getDocument(id:string){

    return this.documents.find(doc=>{
      console.log(doc._id)
      return doc._id === id});
  }
  async getDocumentContent(id:string){
    return this.httpClient.get<Document>(`http://localhost:3000/documents/${id}`).pipe(tap(data=> data), first()).toPromise()

  }

  async createDocument(document:Document){
    return this.httpClient.post<Document>(`http://localhost:3000/documents`,document).pipe(
      tap(data=>{
        this.documents.push(data);
        this.sortAndSend();
        return data}),
      first()
    ).toPromise();
  }

  deleteDocument(document:Document){
    this.httpClient.delete<Document>(`http://localhost:3000/documents/${document._id}`).subscribe((result)=>{
      const index = this.documents.findIndex((doc)=> doc._id === document._id);
      this.documents.splice(index,1);
      this.sortAndSend();
    })
  }

}
