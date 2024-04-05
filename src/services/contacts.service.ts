import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from 'src/interfaces/contact.interface';
import { environment } from 'src/environments/environment';
import { getImgLetters } from '../utils/transform-data.utils';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private apiUrl = environment.urlAPI + '/users';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl).pipe(
      map((contacts) =>
        contacts.map((contact) => ({
          id: contact.id,
          name: contact.name,
          username: contact.username,
          email: contact.email,
          phone: contact.phone,
          img: getImgLetters(contact.name),
        }))
      )
    );
  }
}
