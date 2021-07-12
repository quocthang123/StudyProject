import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DateTimePickerModule  } from '@syncfusion/ej2-angular-calendars';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAssignmentComponent } from './_pages/user-assignment/user-assignment.component';
import { RegisterComponent } from './_pages/register/register.component';
import { LoginComponent } from './_pages/login/login.component';
import { CreateUserComponent } from './_pages/create-user/create-user.component';
import { HomeComponent } from './_pages/home';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    UserAssignmentComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DateTimePickerModule ,
    AngularEditorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
