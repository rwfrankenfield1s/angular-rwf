import { Component } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MeComponent as MeComponent} from './me/me.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-rwf';
  textShowP: boolean;
  textShowE: boolean;
  constructor(public matDialog: MatDialog) { }


  showTextP(){
    this.textShowP = true;
   }
   hideTextP(){
    this.textShowP = false;
   }
   showTextE(){
    this.textShowE = true;
   }
   hideTextE(){
    this.textShowE = false;
   }

   openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';

    const modalDialog = this.matDialog.open(MeComponent, dialogConfig);
  }
}

