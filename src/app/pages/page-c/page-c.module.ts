import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/components/shared.module";
import { PageCComponent } from "./page-c.component";

const C_ROUTES: Routes = [
    {
        path: '',
        component: PageCComponent
    }
]

@NgModule({
    declarations: [PageCComponent],
    imports: [
        SharedModule, 
        RouterModule.forChild(C_ROUTES)
    ]
})
export class PageCModule {}