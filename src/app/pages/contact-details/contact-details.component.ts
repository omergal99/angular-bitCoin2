import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import Contact from '../../models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location) { }

  contact: Contact = null;
  contactId: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.contactService.getContactById(id).subscribe((contact) => {
        this.contact = contact;
      })
    })

    // this.contactId = this.route.snapshot.params['id'];
    // this.contact = this.contactService.getContactById(this.contactId);

    // this.contactService.contactSubject.subscribe((contact) => {
    //   this.contact = contact;
    // })

    // this.contactService.getContactById(this.contactId);
  }
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     const id = params['id'];
  //     this.contactService.getContactById(id)
  //   })

  //   // this.contactId = this.route.snapshot.params['id'];
  //   // this.contact = this.contactService.getContactById(this.contactId);

  //   this.contactService.contactSubject.subscribe((contact) => {
  //     this.contact = contact;
  //   })

  //   // this.contactService.getContactById(this.contactId);
  // }

}
