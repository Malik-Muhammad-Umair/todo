import { Routes } from '@angular/router';
import { TodosComponent } from './myComponent/todos/todos.component';
import { AboutComponent } from './myComponent/about/about.component';
import { Component } from '@angular/core';
import { ContactComponent } from './myComponent/contact/contact.component';


export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'home', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];