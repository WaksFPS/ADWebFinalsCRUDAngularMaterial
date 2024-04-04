import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';



 
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],

})
 
export class BooksListComponent implements OnInit {
  loading: boolean = true;
  Books:any = [];
  
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });    
    this.loading = true;
  setTimeout(() => {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res);
      this.Books = res;
      this.loading = false;
    });
  }, 1200);
  }
  
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }
 
}
