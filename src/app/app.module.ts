import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BhoomiComponent } from './bhoomi/bhoomi.component';
import { VishalComponent } from './vishal/vishal.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { InputUrlImgComponent } from './input-url-img/input-url-img.component';
import { TdFormComponent } from './td-form/td-form.component';
import { FormComponent } from './form/form.component';
import { CartngmodelComponent } from './cartngmodel/cartngmodel.component';
import { AddfuncComponent } from './addfunc/addfunc.component';
import { FooterComponent } from './footer/footer.component';
import { RFormComponent } from './r-form/r-form.component';
import { CityaddComponent } from './cityadd/cityadd.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrpgComponent } from './qrpg/qrpg.component';
import { MineserviceService } from './mineservice.service';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { InterviewComponent } from './interview/interview.component';

@NgModule({
  declarations: [
    AppComponent,
    BhoomiComponent,
    VishalComponent,
    NavComponent,
    InputUrlImgComponent,
    TdFormComponent,
    FormComponent,
    CartngmodelComponent,
    AddfuncComponent,
    FooterComponent,
    RFormComponent,
    CityaddComponent,
    QrpgComponent,
    HttpclientComponent,
    InterviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QRCodeModule,
    BrowserAnimationsModule, 
    ToastrModule],
  providers: [MineserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
