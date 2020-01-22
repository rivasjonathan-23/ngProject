import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientComponent } from "./components/client/client.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { ViewComponent } from "./components/view/view.component";
import { HomeComponent } from "./components/home/home.component";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: ClientComponent
  },
  {
    path: "404",
    component: NotfoundComponent
  },
  {
    path: "view/:id",
    component: ViewComponent
  },
  {
    path: "project",
    component: RegistrationComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
