import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/components/shared.module";
import { PageBComponent } from "./page-b.component";

@NgModule({
    declarations: [PageBComponent],
    imports: [SharedModule],
    exports: [PageBComponent]
})
export class PageBModule {}