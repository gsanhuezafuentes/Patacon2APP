import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model-classes/user';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { ConfirmationDialogComponent } from 'src/app/components/core/confirmation-dialog/confirmation-dialog.component';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ["run", "name", "surname", "surname2", "email","details", "delete"];
  dataSource: MatTableDataSource<User>;
  dialogResult = "";

  constructor(private usersService: UsersService, private dialog: MatDialog, private alertService: AlertService) { }


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getUsers();
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getUsers(): void {
    this.usersService.getAllUsers().subscribe({
      next: (result) => {this.dataSource.data = result;
      console.log(result)},
      error: (err) => {console.log(err);}
    });

  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddUserComponent, {
      width: '450px',
      data: 'This text is passed into the dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
      if (result == 'Confirm'){
        this.refreshTable();
        this.success("El usuario ha sido agregado exitosamente");

      } 
    })
  }

  openUpdateDialog(run: string){
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: run,
      width: '500px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == 'Confirm') this.refreshTable();
    });
  }
  color = 'accent';
  checked = true;
  onChange(userData){
    console.log(userData.run, userData.disabled);
    userData.disabled = userData.disabled ? false: true;
    this.usersService.disableUser(userData).subscribe({
      next: result => {
        console.log(result);
      },
      error: result => {
        console.log("error");
      }
    });
    console.log(userData.run, userData.disabled);
  }

  refreshTable() {
    this.getUsers();
  }

  deleteUser(run: string) {
    this.openDeletionConfirmationDialog().afterClosed().subscribe(confirmation => {
      if(confirmation.confirmed) {
        this.usersService.removeUser(run).subscribe({
          next: result => {
             this.refreshTable();
             this.info("Usuario eliminado exitosamente"); 
            },
          error: result => {}
        }); 
      }
    });
  }

  openDeletionConfirmationDialog() {
    
    var deletionDialogConfig = this.getDialogConfig();
    deletionDialogConfig.data = { message: '¿Desea eliminar este usuario?'};
    return this.dialog.open(ConfirmationDialogComponent, deletionDialogConfig);
  }

  getDialogConfig() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    return dialogConfig;
  }

  success(message: string){
    this.alertService.success(message);
  }

  info(message: string){
    this.alertService.info(message);
  }


}
