import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitService } from './gits/git.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './git/git.component';


const routes: Routes = [
  {path: 'git', component: GitComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GitComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)


  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }