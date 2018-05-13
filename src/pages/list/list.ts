import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  dishs: string[];
  name: string[];
  price: number[];
  sum: number[];
  items: Array<{dishs: string, price: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['restaurant','done-all','pin'];
    
    
    this.items = [
      {dishs: "Nachos Primera Bowl", price: 20},
      {dishs: "Spanish Bacon Chips", price: 22},
      {dishs: "Apple Martini", price: 10},
      {dishs: "Indian Thali", price: 12}
    ];
    
    // for (let i = 1; i < 11; i++) {
    //   // this.items.push({
    //   //   title: 'Item ' + i,
    //   //   note: '$' + i,
    //   //   icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   // });
   
    
  }
  Total()
  {
    var sum = 0;
    for(let i=0; i<this.items.length; i++)
    {
      var summ = this.items[i];
      sum = sum + summ.price;
    }
    return sum;    
  }

  demoOpen()
  {
this.navCtrl.push(HomePage);
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
