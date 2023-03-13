import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfuncComponent } from './addfunc/addfunc.component';
import { BhoomiComponent } from './bhoomi/bhoomi.component';
import { CartngmodelComponent } from './cartngmodel/cartngmodel.component';
import { CityaddComponent } from './cityadd/cityadd.component';
import { FormComponent } from './form/form.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { InputUrlImgComponent } from './input-url-img/input-url-img.component';
import { InterviewComponent } from './interview/interview.component';
import { QrpgComponent } from './qrpg/qrpg.component';
import { RFormComponent } from './r-form/r-form.component';
import { TdFormComponent } from './td-form/td-form.component';
//import { HttpclientComponent } from './httpclient/httpclient.component';
import { VishalComponent } from './vishal/vishal.component';
const routes: Routes = [
    {
        path: "bhoomi",
        component: BhoomiComponent
    },
    {
        path: "vishal",
        component: VishalComponent
    }, {
        path: "httpclient",
        component: HttpclientComponent
    },
    {
        path: "input-url-img",
        component: InputUrlImgComponent
    }, {
        path: "tdform",
        component: TdFormComponent
    }, {
        path: "form",
        component:FormComponent
    }, {
        path: "cartngmodel",
        component:CartngmodelComponent
    }, {
        path: "addfunc",
        component:AddfuncComponent
    }, {
        path: "r-form",
        component:RFormComponent
    }, {
        path: "cityadd",
        component:CityaddComponent
    }, {
        path: "qrpg",
        component:QrpgComponent
    }, {
        path: "interview",
        component:InterviewComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }