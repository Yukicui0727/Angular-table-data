import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { UsertableComponent } from './component/usertable/usertable.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
   declarations: [
      AppComponent,
      UsertableComponent,
      MatTableModule,
      MatPaginator,
      MatTableDataSource
      
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule
   ],
   providers: [MyserviceService],
   bootstrap: [AppComponent]
})
export class AppModule { }