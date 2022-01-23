import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { HeaderButtonComponent } from './components/header-button/header-button.component';
import { CarsComponent } from './pages/cars/cars.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { CardComponent } from './components/card/card.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OptionComponent } from './components/option/option.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SlideShowComponent,
    HeaderButtonComponent,
    CarsComponent,
    SideFilterComponent,
    CardComponent,
    FilterFormComponent,
    ComboboxComponent,
    OptionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
