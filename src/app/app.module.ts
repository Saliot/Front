import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ErLayoutComponent } from './pages/er-layout/er-layout.component';
import { ErNavbarComponent } from './shared/theme/er-navbar/er-navbar.component';
import { ErSidebarComponent } from './shared/theme/er-sidebar/er-sidebar.component';
import { ErFooterComponent } from './shared/theme/er-footer/er-footer.component';
import { ErUserpanelComponent } from './shared/theme/er-userpanel/er-userpanel.component';
import { ErSearchComponent } from './shared/theme/er-search/er-search.component';
import { ErMenuComponent } from './shared/theme/er-menu/er-menu.component';
import { MenuService } from './shared/theme/er-menu/menu.service';
import { ErMenuitemComponent } from './shared/theme/er-menu/er-menu-components/er-menuitem/er-menuitem.component';
import { ErRegisterComponent } from './security/er-register/er-register.component';
import { RegistrationService } from './security/er-register/registration.service';
import { ReferenceDataService } from './shared/reference/reference-data.service';
import { ErInputComponent } from './shared/form/FormComponents/er-input/er-input.component';
import { ErrorMessageDirective } from './shared/form/formDirective/error-message.directive';
import { InitializeDropdownDirective } from './shared/form/formDirective/intitialize-dropdown.directive';
import { BlurForwarderDirective } from './shared/form/formDirective/blur-forwarder.directive';
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    ErLayoutComponent,
    ErNavbarComponent,
    ErSidebarComponent,
    ErFooterComponent,
    ErUserpanelComponent,
    ErSearchComponent,
    ErMenuComponent,
    ErMenuitemComponent,
    ErRegisterComponent,
    ErInputComponent,
    ErrorMessageDirective,
    InitializeDropdownDirective,
    BlurForwarderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    L_SEMANTIC_UI_MODULE
  ],
  providers: [MenuService,RegistrationService,ReferenceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
