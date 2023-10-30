import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getFoodList();
  }

  foodItems: any;
  getFoodList() {
    this.http.get("http://localhost:4200/assets/data/food.json").subscribe((fooditems) => {
      this.foodItems = fooditems;
      console.log(this.foodItems);
    })
  }

 
  
}
