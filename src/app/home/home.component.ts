import { PeriodicElement } from './model/home';
import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Monday 10 2:26 pm', street: 'VR sad as', icon: 'fa fa-truck fa-5x', price: 331.232 , quantity: 1},
  {position: 2, name: 'Monday 10 2:26 pm', street: 'VR sad as', icon: 'fa fa-truck fa-5x', price: 331.232 , quantity: 1},
  {position: 3, name: 'Monday 10 2:26 pm', street: 'VR sad as', icon: 'fa fa-truck fa-5x', price: 331.232 , quantity: 1},
  {position: 4, name: 'Monday 10 2:26 pm', street: 'VR sad as', icon: 'fa fa-truck fa-5x', price: 331.232 , quantity: 1},

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['select', 'day', 'street', 'icon', 'price', 'quantity'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
