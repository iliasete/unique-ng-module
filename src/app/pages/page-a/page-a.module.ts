import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/components/shared.module";
import { PageAComponent } from "./page-a.component";

const A_ROUTES: Routes = [
    {
        path: '',
        component: PageAComponent
    }
]

@NgModule({
    declarations: [PageAComponent],
    imports: [
        SharedModule, 
        RouterModule.forChild(A_ROUTES)
    ]
})
export class PageAModule {}