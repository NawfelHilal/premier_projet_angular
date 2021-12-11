import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { PaymentComponent } from './components/payment/payment.component';
import {MatMenuModule} from '@angular/material/menu';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: 'livraison', component: LivraisonComponent},
  {path: 'payment', component: PaymentComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ArticleComponent,
    HeaderComponent,
    ListItemComponent,
    ContactComponent,
    CartComponent,
    LivraisonComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatMenuModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
