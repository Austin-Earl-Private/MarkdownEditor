import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs";
import {SidebarService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  clicked = false;
  private sidebarState: Subscription | undefined;
  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarState = this.sidebarService.sidebarState.subscribe((state)=>{
      this.clicked = state;
    })
  }
  ngOnDestroy():void{
    this.sidebarState?.unsubscribe();
  }

  arrowClicked(){
    this.sidebarService.toggleSidebar();
  }

}
