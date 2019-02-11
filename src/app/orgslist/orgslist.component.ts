import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  description: string;
  status: string;
  actionitem:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'LC 001', description: '1000 Mac books, 2000 phones', status: 'LC_INITIATED', actionitem: 'Buyer Bank'},
  {name: 'LC 002', description: '10000 Tons of Iron, 30000 cubic feet of marble', status: 'SELLER_GOODS_INTIATED', actionitem: 'Shipping Company'},
  {name: 'LC 003', description: '8.4 metric tons of sulfur, 30000 ltrs of sulfuric acid', status: 'LC_BB_APPROVED', actionitem: 'Seller'},
  {name: 'LC 004', description: '3 containers of toys, 10000 intel mother boards', status: 'LC_INITIATED', actionitem: 'Buyer Bank'},
  {name: 'LC 005', description: '300 HP laptops, 4000 HP Motherboards', status: 'SELLER_BANK_VALIDATION', actionitem: 'Buyer bank'},
  {name: 'LC 006', description: '6.2 tons of Rice, 8.2 tons of frozen red meet', status: 'LC_INITIATED', actionitem: 'Buyer Bank'},
  {name: 'LC 007', description: '100 kgs of delmonte pasta 1kg packs, 500 lts of  delmonte red sauce', status: 'BUYER_RECEIVED_GOODS', actionitem: 'Seller'},
  {name: 'LC 008', description: '500 kgs of wheat seeds 1kg packs, 8000 kg of wheat flour', status: 'BUYER_BANK_INITIATE_PAYMENT', actionitem: 'Seller'},
  {name: 'LC 009', description: '3000 pairs of Linen shirts for men, 3000 women ', status: 'SELLER_BANK_VALIDATION', actionitem: 'Buyer bank'},
  {name: 'LC 010', description: '8.8 tons of red chilli powder, 2.3 tons of turmeric powder', status: 'SELLER_INITIATE_PAYMENT', actionitem: 'Seller'},
  {name: 'LC 002', description: '10000 Tons of Iron, 30000 cubic feet of marble', status: 'BUYER_RECEIVED_GOODS', actionitem: 'Seller'},
  {name: 'LC 005', description: '300 HP laptops, 4000 HP Motherboards', status: 'BUYER_BANK_INITIATE_PAYMENT', actionitem: 'Seller'},
  {name: 'LC 004', description: '3 containers of toys, 10000 intel mother boards', status: 'LC_BB_APPROVED', actionitem: 'Seller'},
];

@Component({
  selector: 'app-orgslist',
  templateUrl: './orgslist.component.html',
  styleUrls: ['./orgslist.component.css']
})
export class OrgslistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //displayedColumns: string[] = ['name', 'description', 'status', 'actionitem'];
  //dataSource = ELEMENT_DATA;

}
