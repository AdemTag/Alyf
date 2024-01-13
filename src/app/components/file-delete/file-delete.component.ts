import { Component, Input } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-delete',
  template: '<button class="btn btn-danger btn-sm float-end" (click)="deleteFile()">Supprimer</button>',
})
export class FileDeleteComponent {
  @Input() fileName: string = '';

  constructor(private fileService: FileService) {}


  deleteFile(): void {
    // Appeler la méthode de suppression côté frontend du service
    this.fileService.deleteFile(this.fileName).subscribe(() => {
      // Rafraîchir la liste des fichiers après la suppression
      this.fileService.getFiles();
    });
  }
}

