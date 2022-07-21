import {Component, OnDestroy, OnInit} from '@angular/core';
import {MarkdownService} from "../../markdown.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit,OnDestroy {

  content: string = ``;
  subscription: Subscription|undefined;
  constructor(private readonly markdownService:MarkdownService) {
    this.subscription = this.markdownService.contentChangedEvent.subscribe((doc)=>this.content=doc.content)
  }

  ngOnInit(): void {
    console.log(this.content)
  }
  onReady(){
    console.log('Ready')
    console.log(this.content)
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
