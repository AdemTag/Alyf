import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-download',
  template: '<button class="btn btn-primary btn-sm float-end" (click)="downloadFile()">Telecharger</button>',
})
export class FileDownloadComponent {
  @Input() fileName: string = '';

  constructor(private fileService: FileService) {}

  downloadFile(): void {
    // Appeler la méthode de téléchargement côté frontend du service
    this.fileService.downloadFile(this.fileName);
  }
}
