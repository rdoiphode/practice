import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ListComponent } from './admin/list/list.component';

const routes: Routes = [
  // {path:"admin", loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)}
  {
    path: "admin/list",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  init(){
    console.log("Init");
  }
}
