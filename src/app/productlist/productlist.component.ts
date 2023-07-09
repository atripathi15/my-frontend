import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class ProductlistComponent implements AfterViewInit{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<ProductSummary>(PRODUCT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface ProductSummary {
  position: number;
  imagePath: string;
  name: string;
  summary: string;
  price: number;
}

const PRODUCT_DATA: ProductSummary[] = [
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000},
  {position:1, imagePath: '../assets/images/awesome.jpg', name: 'Dell Laptop', summary: 'asdfasfasfdasfasfasfdsadf', price: 40000}  
]