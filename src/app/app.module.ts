import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SentenceValidatorComponent } from './sentence-validator/sentence-validator.component';
import { SentenceValidatorService } from './sentence-validator.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SentenceValidatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'sentence-validator', component: SentenceValidatorComponent },
    ]),
    FormsModule
  ],
  providers: [SentenceValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
