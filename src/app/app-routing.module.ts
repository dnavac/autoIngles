import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceValidatorComponent } from './sentence-validator/sentence-validator.component';

const routes: Routes = [
  { path: 'sentence-validator', component: SentenceValidatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
