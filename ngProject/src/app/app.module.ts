import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { JrInputComponent } from "./jr-style/jr-input/jr-input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ClientComponent } from "./components/client/client.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateformComponent } from "./components/updateform/updateform.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    JrInputComponent,
    ClientComponent,
    UpdateformComponent,
    NotfoundComponent,
    ViewComponent,
    HomeComponent,
    HeaderComponent
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
