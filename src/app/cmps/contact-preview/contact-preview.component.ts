import { Component, OnInit, Input } from '@angular/core';
import Contact from '../../models/Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: Contact = null;
  
  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.contact);
  }

  // moveToDetails(contactId){
  //   this.router.navigateByUrl(`/contact/${contactId}`);
  // }

}
