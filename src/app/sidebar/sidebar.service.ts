import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private clicked = false;
  public sidebarState =  new Subject<boolean>();
  constructor() { }

  toggleSidebar(){
    this.clicked = !this.clicked;
    this.sidebarState.next(this.clicked);
  }
}
