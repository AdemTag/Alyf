import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  downloadFile(fileName: string): void {
    const downloadUrl = `${this.baseUrl}/files/${fileName}`;

    // Créer un lien temporaire
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;

    // Ajouter le lien à la page et déclencher le clic
    document.body.appendChild(link);
    link.click();

    // Nettoyer et retirer le lien de la page
    document.body.removeChild(link);
  }
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
  deleteFile(filename: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/files/${filename}`);
  }

}
