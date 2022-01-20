import {NgModule} from "@angular/core"
import {TestimonialItemComponent} from "./testimonialsItem/testimonialsItem.component"
import {TestimonialListComponent} from "./testimonialsList/testimonialsList.component"
import { CreateTestiMonialsComponent } from './create-testi-monials/create-testi-monials.component'
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common";
import { TestimonialsDetailComponent } from './testimonials-detail/testimonials-detail.component'
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations:[TestimonialItemComponent,TestimonialListComponent, CreateTestiMonialsComponent, TestimonialsDetailComponent],
    imports:[FormsModule,HttpClientModule,CommonModule,ReactiveFormsModule],
    bootstrap:[],
    exports:[TestimonialListComponent,CreateTestiMonialsComponent,TestimonialsDetailComponent]
})
export class TestimonialsModule {

}