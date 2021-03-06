import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import Contact from '../../models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,
    private contactService: ContactService,
    private location: Location) { }

  contact: Contact = null;
  contactId: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.contactService.getContactById(id).subscribe((contact) => {
          this.contact = {...contact};
        })
      } else {
        // this.contactService.newContact();
        this.contact = new Contact('', '', '', '')
      }
    })

    // this.contactService.contactSubject.subscribe((contact) => {
    //   this.contact = contact;
    // })

    // this.contactId = this.route.snapshot.params['id'];

    // if (this.contactId) {
    //   this.contact = this.contactService.getContactById(this.contactId);
    // } else {
    //   this.contact = new Contact('', '', '', '')
    // }
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.contactService.saveContact(this.contact)
    this.router.navigate(['/contact']);
  }
  
  removeContact(){
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact']);
  }

  formChanged(ev) {
    console.log(ev.target.value);
  }

}
