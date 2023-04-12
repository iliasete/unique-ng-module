import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/components/shared.module";
import { PageAComponent } from "./page-a.component";

@NgModule({
    declarations: [PageAComponent],
    imports: [SharedModule],
    exports: [PageAComponent]
})
export class PageAModule {}