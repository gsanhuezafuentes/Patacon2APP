import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Filter } from 'src/app/model-classes/Filter';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  displayedColumns: string[] = ["select","truck","state","origin","destination","details"];
  dataSource: MatTableDataSource<Filter>;
  selection = new SelectionModel<Filter>(true, []);

  //Esto es para ver como se ve
  testList: Filter[] = [
    {id: '1', truck: 'BPTG-78', state: "Detenido", origin: 'Santa Catalina', destination: 'Patacon'},
    {id: '2', truck: 'BPTG-78', state: "Detenido", origin: 'Santa Catalina 2', destination: 'Patacon'},
    {id: '2', truck:  'BPTG-78',state: "Detenido", origin: 'Curico', destination: 'Patacon'},
    {id: '4', truck: 'BPTG-78', state: "Detenido",origin: 'Santa Emilia', destination: 'Patacon'},
    {id: '5', truck: 'BPTG-78', state: "Detenido",origin: 'Casablanca', destination: 'Patacon'},
    {id: '6', truck: 'BPTG-78', state: "Detenido",origin: 'San Pedro', destination: 'Patacon'},
    {id: '7', truck: 'BPTG-78',state: "Detenido", origin: 'Santa Catalina', destination: 'Patacon'},
    {id: '8', truck: 'BPTG-78',state: "Detenido", origin: 'Santa Catalina', destination: 'Patacon'},
    {id: '9', truck: 'BPTG-78', state: "Detenido",origin: 'Santa Catalina', destination: 'Patacon'},
    {id: '10', truck: 'BPTG-78',state: "Detenido", origin: 'Santa Catalina', destination: 'Patacon'},
    {id: '11', truck: 'BPTG-78',state: "Detenido", origin: 'Santa Catalina', destination: 'Patacon'},
    {id: '12', truck: 'BPTG-78',state: "Detenido", origin: 'Santa Catalina', destination: 'Patacon'},
  ];

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.testList);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

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
  checkboxLabel(row?: Filter): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


}