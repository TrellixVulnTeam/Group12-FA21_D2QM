import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TemplateComponent } from './template/template.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemMenuComponent,
    MainMenuComponent,
    TemplateComponent,
    ItemPreviewComponent,
    TopBarComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
