import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { AddTruckComponent } from '../add-truck/add-truck.component';
import { ConfirmationDialogComponent } from "src/app/components/core/confirmation-dialog/confirmation-dialog.component";
import { TrucksService } from '../../../../services/trucks.service';
import { Truck } from '../../../../model-classes/truck';
import { EditTruckComponent } from "../edit-truck/edit-truck.component";
import { NotifierService } from 'angular-notifier';
import { TruckDetailsComponent } from '../truck-details/truck-details.component';

@Component({
  selector: 'app-truck-view',
  templateUrl: './truck-view.component.html',
  styleUrls: ['./truck-view.component.css']
})
export class TruckViewComponent implements OnInit {

  private readonly notifier: NotifierService;
  dialogResult="";
  trucks: Truck[];
  displayedColumns: string[] = [
    "licencePlate",
    "brand",
    "model",
    "year",
    "update", 
    "details",
    "delete"
  ];
  dataSource: MatTableDataSource<Truck>;

  constructor( private trucksService : TrucksService,
    public dialog: MatDialog, notifierService: NotifierService){
      this.dataSource = new MatTableDataSource<Truck>();
      this.notifier = notifierService;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.getTruck();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTruck(): void {
    this.trucksService.getAllTrucks().subscribe(
      data => {
        this.dataSource.data = data as Truck[];
        console.log(data);
      },
      error => console.log("Error")
    );
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTruckComponent, {
      width: '500px',
      disableClose: true,
      autoFocus: true
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === "Confirm"){
        this.refreshTable();
        this.notifier.notify('info', 'Camión agregado exitosamente');
      } 
    });
  }

  openUpdateDialog(truck: Truck) {
    console.log("Entro a openUpdateDialog en truck-view.component.ts");

    var dialogConfig = this.getDialogConfig();
    dialogConfig.data = truck;

    this.dialog.open(EditTruckComponent, dialogConfig).afterClosed().subscribe(confirmation => {
      if(confirmation === "Confirm") { 
        this.refreshTable();
        this.notifier.notify('info', 'Camión editado exitosamente');
      }
    });
  }

  openDetailsDialog(truck: Truck) {
    console.log("Entro a openDetailsDialog en truck-view.component.ts");

    var dialogConfig = this.getDialogConfig();
    dialogConfig.data = truck;

    this.dialog.open(TruckDetailsComponent, dialogConfig).afterClosed().subscribe(confirmation => {
      if(confirmation === "Confirm") { 
        this.refreshTable();
        this.notifier.notify('info', 'Camión visto exitosamente');
      }
    });
  }

  /* openUpdateDialog(data: Truck) {
    const dialogRef = this.dialog.open(EditTruckComponent, {
      data: Truck,
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'Confirm') this.refreshTable();
    });
  }
 */
    /* openDeleteDialog(truckData: Truck){
    console.log(truckData);
    console.log(truckData.licencePlate, truckData.disabled);
    truckData.disabled = truckData.disabled ? false: true;
    this.trucksService.disableTruck(truckData).subscribe({
      next: result => {
        console.log(result);
        this.refreshTable();
      },
      error: result => {
        console.log("error en componente para listar");
      }
    });
    console.log(truckData.licencePlate, truckData.disabled);
    this.refreshTable();
  } */

  openDeleteDialog(truckData: Truck) {
    truckData.disabled = truckData.disabled ? false: true;
    this.openDeletionConfirmationDialog().afterClosed().subscribe(confirmation => {
      if(confirmation.confirmed) {
        this.trucksService.disableTruck(truckData).subscribe({
          next: result => {
            console.log(result);
            this.refreshTable();
            this.notifier.notify('info', 'Camión eliminado exitosamente');
          },
          error: result => {
            console.log("error en componente para listar");
          }
        }); 
        this.refreshTable();
      }
      
    });
  }

  openDeletionConfirmationDialog() {
    
    var deletionDialogConfig = this.getDialogConfig();
    deletionDialogConfig.data = { message: '¿Desea eliminar este camión?'};
    return this.dialog.open(ConfirmationDialogComponent, deletionDialogConfig);
  }


  getDialogConfig() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    return dialogConfig;
  }

  refreshTable() {
    this.getTruck();
  }

  
  /* deleteTruck(licencePlate: string) {
    //Esto no borra el camion, solo lo oculta
    this.openDeletionConfirmationDialog()
      .afterClosed()
      .subscribe(confirmation => {
        if (confirmation.confirmed) {
          this.trucksService.disableTruck(licencePlate).subscribe({
            next: result => {
              this.refreshTable();
            },
            error: result => {}
          });
        }
      });
  } */

}

