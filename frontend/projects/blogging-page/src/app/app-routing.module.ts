import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPostComponent } from './pages/my-post/my-post.component';

const routes: Routes = [
  {
    path: '',
    component: MyPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
