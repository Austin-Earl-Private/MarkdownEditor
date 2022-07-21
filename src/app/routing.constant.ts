import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {DocumentlistComponent} from "./documentlist/documentlist.component";
import {EditorComponent} from "./editor/editor.component";


export const routes: Routes = [
  {path:"", component: DocumentlistComponent},
  {path:"documents", component:DocumentlistComponent, },
  {path:"editor",component:EditorComponent },
  {path:"editor/:id",component:EditorComponent }
]
