import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { NewestudioComponent } from './component/about/newestudio.component';
import { EditarSobreMiComponent } from './component/about/editar-sobre-mi.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'nuevoEstudio', component:NewestudioComponent},
  {path:'editarSobreMi/:id', component:EditarSobreMiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
