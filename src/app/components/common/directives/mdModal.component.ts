import {Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'mdModal-dialog',
  templateUrl: 'mdModal.component.html',
})
export class MdModalDialog {

  constructor(
    public dialogRef: MdDialogRef<MdModalDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
