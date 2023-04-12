import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/components/shared.module";
import { PageCComponent } from "./page-c.component";

@NgModule({
    declarations: [PageCComponent],
    imports: [SharedModule],
    exports: [PageCComponent]
})
export class PageCModule {}