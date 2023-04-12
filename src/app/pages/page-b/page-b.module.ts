import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/components/shared.module";
import { PageBComponent } from "./page-b.component";

const B_ROUTES: Routes = [
    {
        path: '',
        component: PageBComponent
    }
]

@NgModule({
    declarations: [PageBComponent],
    imports: [
        SharedModule, 
        RouterModule.forChild(B_ROUTES)
    ]
})
export class PageBModule {}