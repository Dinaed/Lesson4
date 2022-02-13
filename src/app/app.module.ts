import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HoverEffectDirective } from './directive/hover-effect.directive';
import{ MyFilterPipe } from './pipes/myFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe,
    HoverEffectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
