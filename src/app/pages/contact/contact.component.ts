import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import Contact from '../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Contact[] <===> Array<Contact>
  // contacts:Contact[] = [];
  contacts: Array<Contact> = [];

  constructor(private contactService: ContactService) {
    // this.ngOnInit() --- for not lazy load
   }

  ngOnInit() {
    // this.contacts = this.contactService.getContacts();

    this.contactService.contactsSubject.subscribe((contacts) => {
      this.contacts = contacts;
    })

    this.contactService.getContacts();
  }

}
