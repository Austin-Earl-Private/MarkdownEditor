import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "./sidebar.component";
import {SidebarService} from "./sidebar.service";
import {RouterModule} from "@angular/router";



@NgModule({
  providers:[SidebarService],
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[SidebarComponent]
})
export class SidebarModule { }
