import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

// aqui eu estou definindo as minhas rotas
// nesse array de objetos vai ser a onde eu vou colocar o path de cada rota
const routes: Routes = [
  {path: '', component: FirstComponentComponent}, // rota: /
  {path: 'list', component: ListRenderComponent},  // rota: /list
  {path: 'list/:id', component: ItemDetailComponent},   // rota dinâmica: vai ser uma rota diferente pra cada id
  {path: 'if-render', component:IfRenderComponent},  // rota: /if-render
  {path: 'evento', component:EventosComponent},  // rota: /evento
  {path: 'emitter', component: EmitterComponent}  // rota: /emitter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // aqui estou dizendo que as rotas começam do root, da raiz do nosso site
  exports: [RouterModule]                   
})

// para eu poder exportar essa classe:
export class AppRoutingModule { }