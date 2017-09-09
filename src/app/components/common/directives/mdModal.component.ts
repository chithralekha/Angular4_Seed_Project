import {Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'mdModal-dialog',
  templateUrl: 'mdModal.component.html',
})
export class MdModalDialog {
    states = [
    {value: '1', viewValue: 'New'},
    {value: '2', viewValue: 'Active'},
    {value: '3', viewValue: 'Completed'}
  ];
  taskstate:string;
  constructor(
    public dialogRef: MdDialogRef<MdModalDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) {this.taskstate = data.state; }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
