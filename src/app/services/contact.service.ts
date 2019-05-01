import { Injectable } from '@angular/core';
import Contact from '../models/Contact';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  newContact() {
    this.contactSubject.next(new Contact());
  }

  //  the BehaviorSubject give us to auto update the list?
  // todos = new BehaviorSubject<Array<Todo>>([])

  contactsSubject = new BehaviorSubject<Contact[]>([]);
  // contactsSubject = new Subject<Contact[]>();

  // contactSubject = new Subject<Contact>();
  contactSubject = new BehaviorSubject<Contact>(null);

  constructor() { } 
  contacts: Contact[] = [
    {
      "_id": "5a56640269f443a5d64b32ca",
      "name": "Ron",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "img": "assets/img/profiles/ron.png"
    },
    {
      "_id": "5a5664025f6ae9aa24a99fde",
      "name": "Jonatan",
      "email": "halliemclean@renovize.com",
      "phone": "+1 (948) 464-2888",
      "img": "assets/img/profiles/jonatan.png"
    },
    {
      "_id": "5a56640252d6acddd183d319",
      "name": "Hadas",
      "email": "parsonsnorris@renovize.com",
      "phone": "+1 (958) 502-3495",
      "img": "assets/img/profiles/hadas.png"
    },
    {
      "_id": "5a566402ed1cf349f0b47b4d",
      "name": "Yaron",
      "email": "rachellowe@renovize.com",
      "phone": "+1 (911) 475-2312",
      "img": "assets/img/profiles/yaron.png"
    },
    {
      "_id": "5a566402abce24c6bfe4699d",
      "name": "Itamar",
      "email": "dominiquesoto@renovize.com",
      "phone": "+1 (807) 551-3258",
      "img": "assets/img/profiles/itamar.png"
    },
    {
      "_id": "5a566402a6499c1d4da9220a",
      "name": "Shiri",
      "email": "shanapope@renovize.com",
      "phone": "+1 (970) 527-3082",
      "img": "assets/img/profiles/shiri.png"
    },
    {
      "_id": "5a566402f90ae30e97f990db",
      "name": "Natalia",
      "email": "faulknerflores@renovize.com",
      "phone": "+1 (952) 501-2678",
      "img": "assets/img/profiles/natalia.png"
    },
    {
      "_id": "5a5664027bae84ef280ffbdf",
      "name": "Ofir",
      "email": "holderbean@renovize.com",
      "phone": "+1 (989) 503-2663",
      "img": "assets/img/profiles/ofir.png"
    },
    {
      "_id": "5a566402e3b846c5f6aec652",
      "name": "Alex",
      "email": "rosanneshelton@renovize.com",
      "phone": "+1 (968) 454-3851",
      "img": "assets/img/profiles/alex.png"
    },
    {
      "_id": "5a56640272c7dcdf59c3d411",
      "name": "Olga",
      "email": "pamelanolan@renovize.com",
      "phone": "+1 (986) 545-2166",
      "img": "assets/img/profiles/olga.png"
    },
    {
      "_id": "5a5664029a8dd82a6178b15f",
      "name": "Moshe",
      "email": "roycantu@renovize.com",
      "phone": "+1 (929) 571-2295",
      "img": "assets/img/profiles/moshe.png"
    },
    {
      "_id": "5a5664028c096d08eeb13a8a",
      "name": "Jonatan",
      "email": "olliechristian@renovize.com",
      "phone": "+1 (977) 419-3550",
      "img": "assets/img/profiles/jonatan2.png"
    },
    {
      "_id": "5a5664026c53582bb9ebe9d1",
      "name": "Maor",
      "email": "nguyenwalls@renovize.com",
      "phone": "+1 (963) 471-3181",
      "img": "assets/img/profiles/maor.png"
    },
    {
      "_id": "5a56640298ab77236845b82b",
      "name": "Eitan",
      "email": "glennasantana@renovize.com",
      "phone": "+1 (860) 467-2376",
      "img": "assets/img/profiles/eitan.png"
    },
    {
      "_id": "5a56640208fba3e8ecb97305",
      "name": "Niv",
      "email": "maloneclark@renovize.com",
      "phone": "+1 (818) 565-2557",
      "img": "assets/img/profiles/niv.png"
    },
    {
      "_id": "5a566402abb3146207bc4ec5",
      "name": "Omer",
      "email": "floydrutledge@renovize.com",
      "phone": "+1 (807) 597-3629",
      "img": "assets/img/profiles/omer.png"
    },
    {
      "_id": "5a56640298500fead8cb1ee5",
      "name": "Sarel",
      "email": "gracejames@renovize.com",
      "phone": "+1 (959) 525-2529",
      "img": "assets/img/profiles/sarel.png"
    },
    {
      "_id": "5a56640243427b8f8445231e",
      "name": "Tatiana",
      "email": "tannergates@renovize.com",
      "phone": "+1 (978) 591-2291",
      "img": "assets/img/profiles/tatiana.png"
    },
    {
      "_id": "5a5664025c3abdad6f5e098c",
      "name": "Yanai",
      "email": "lillyconner@renovize.com",
      "phone": "+1 (842) 587-3812",
      "img": "assets/img/profiles/yanai.png"
    }
  ];


  private _sort(arr: Contact[]): Contact[] {
    return arr.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    })
  }

  private _filter(term) {
    term = term.toLocaleLowerCase()
    return this.contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }

  public getContacts(filterBy = null) {
    let contactsToReturn = this.contacts;
    if (filterBy && filterBy.term) {
      contactsToReturn = this._filter(filterBy.term)
    }
    this.contacts = this._sort(contactsToReturn)
    this.contactsSubject.next(this.contacts);
    // MY ADDITION:
    // return this.contacts;
  }
  
  // הקומפוננטה מנהלת את הקונטאקט
  public getContactById(id: string): Observable<Contact> {
    const contact = this.contacts.find(contact => contact._id === id)
    return contact ? of(contact) : Observable.throw(`Contact id ${id} not found!`)
  }

  // // הסרוויס מנהל את הקונטאקט
  // public getContactById(id: string): void {
  //   const contact = this.contacts.find(contact => contact._id === id)
  //   // this.contactSubject.next(new Contact(contact))
  //   this.contactSubject.next(contact)
  // }

  // public getContactById(id: string) {
  //   const contact = this.contacts.find(contact => contact._id === id)
  //   return contact ? contact : null;
  // }

  // public getContactById(id: string) {
  //   const contact = this.contacts.find(contact => contact._id === id)
  //   return contact ? Promise.resolve(contact) : Promise.resolve(null);
  // }

  public deleteContact(id: string) {
    const index = this.contacts.findIndex(contact => contact._id === id)
    if (index !== -1) {
      this.contacts.splice(index, 1)
    }
    this.contactsSubject.next(this.contacts);
  }

  public saveContact(contact: Contact) {
    contact._id ? this._updateContact(contact) : this._addContact(contact)
  }

  private _updateContact(contact: Contact) {
    const index = this.contacts.findIndex(c => contact._id === c._id)
    if (index !== -1) {
      this.contacts[index] = contact
    }
    this.contactsSubject.next(this.contacts);
  }

  private _addContact(contact: Contact) {
    const newContact = new Contact(contact.name, contact.email, contact.phone, contact.img);
    newContact.setId();
    this.contacts.push(newContact);
    this.contactsSubject.next(this.contacts);
  }
}