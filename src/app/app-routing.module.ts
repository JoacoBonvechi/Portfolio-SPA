import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { NewestudioComponent } from './component/about/newestudio.component';
import { EditestudioComponent } from './component/about/editestudio.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'nuevoEstudio', component:NewestudioComponent},
  {path:'editEstudio', component:EditestudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
