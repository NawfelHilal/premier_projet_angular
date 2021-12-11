import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Contact } from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'http://localhost:5000/contact';

  constructor(private http: HttpClient) { }

  addContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.url,contact);
  }
}
