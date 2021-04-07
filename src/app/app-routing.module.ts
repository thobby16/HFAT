import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'auth' ,loadChildren: ()=> import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'app' ,loadChildren: ()=> import('./main/main.module').then(m=>m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
