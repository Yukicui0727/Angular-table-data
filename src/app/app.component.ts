import { MyserviceService } from './myservice.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MaterialModule } from './../material/material.module';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Yuki';
   public persondata = [];
   constructor(private myservice: MyserviceService) {}
   ngOnInit() {
      this.myservice.getData().subscribe((data) => {
         this.persondata = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.persondata); 
      }); 
      }
   
   
   page: number = 1; //show page number
   pageSize: number = 10; //page size

   total: number = MyserviceService.length//total quantity
   totalpages = this.total / this.pageSize;///total quantity

   /* //check previous Page
   previousPage(){
      this.page--;
      this.changePage(this.page);  
  }

  // check next Page
  nextPage(){
    this.page++;
    this.changePage(this.page);
   }
  
 //input page number
 changePage(page:number){
   if(page>0 && page <this.totalpages){
    this.page=page;
    this.totalpages=Math.ceil(this.total/this.pageSize)
   }else if(page < 0){
     page=1;
     this.page=1;
  }else{
   page=this.totalpages;
   this.page=this.totalpages
  }   
 }
}

 */