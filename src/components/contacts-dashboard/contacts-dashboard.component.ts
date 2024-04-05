import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/interfaces/contact.interface';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-contacts-dashboard',
  templateUrl: './contacts-dashboard.component.html',
  styleUrls: ['./contacts-dashboard.component.scss'],
})
export class ContactsDashboardComponent implements OnInit {
  @Input() filterWord!: string;
  contactsServiceInfo: Contact[] = []; // No mutable info
  contactsViewInfo: Contact[] = []; // Used for vew, can mutate on filters

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  ngOnChanges(): void {
    this.contactsViewInfo = this.filter(this.filterWord);
  }

  getContacts() {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contactsServiceInfo = contacts;
      this.contactsViewInfo = contacts;
    });
  }

  filter = (filterWord: string) => {
    const searchProps = (objectToRead: any): boolean => {
      for (let propToRead in objectToRead) {
        if (
          typeof objectToRead[propToRead] === 'string' &&
          objectToRead[propToRead]
            .toLowerCase()
            .includes(filterWord.toLowerCase())
        )
          return true;
      }
      return false;
    };
    return this.contactsServiceInfo.filter((objectFiltered) =>
      searchProps(objectFiltered)
    );
  };
}
