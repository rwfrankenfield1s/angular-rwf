import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.sass']
})
export class MeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeComponent>) { }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
