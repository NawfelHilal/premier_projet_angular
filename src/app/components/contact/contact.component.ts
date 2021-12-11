import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contact } from 'src/app/model/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  contact: Contact;
  url = 'http://localhost:5000/contact';

  constructor(private contactService: ContactService) {
    this.contact = {name: '', email: '', password: '', message: ''};
  }

  onFormSubmit(event: Event){
    event.preventDefault();
    //return this.http.post(this.url, this.contact);
    this.contactService.addContact(this.contact).subscribe(() => this.contact = {
      name: '', email: '', password: '', message: ''
    });
    alert("Message envoyer");
  }

}
