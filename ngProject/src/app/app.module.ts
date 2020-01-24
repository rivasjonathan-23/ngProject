import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ClientComponent } from "./components/client/client.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateformComponent } from "./components/updateform/updateform.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { ViewComponent } from "./components/view/view.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { JrMaterialComponent } from "./mycomponents/jr-material/jr-material.component";
import { JrInputComponent } from "./mycomponents/jr-input/jr-input.component";
import { JrCardComponent } from './mycomponents/jr-card/jr-card.component';
import { JrContainerComponent } from './mycomponents/jr-container/jr-container.component';
import { JrButtonComponent } from './mycomponents/jr-button/jr-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    ClientComponent,
    UpdateformComponent,
    NotfoundComponent,
    ViewComponent,
    HomeComponent,
    HeaderComponent,
    JrInputComponent,
    JrMaterialComponent,
    JrCardComponent,
    JrContainerComponent,
    JrButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
