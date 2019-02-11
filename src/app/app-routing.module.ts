import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocklistComponent } from './blocklist/blocklist.component';
import { OrgslistComponent } from './orgslist/orgslist.component';


const routes: Routes = [
  { path: 'orgs', component: OrgslistComponent},
  { path: 'blocks', component: BlocklistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OrgslistComponent, BlocklistComponent]
