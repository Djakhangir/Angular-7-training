import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //imported reactive forms dependencies

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // created the properties
  messageForm: FormGroup; 
  submitted = false; //determine if the form has been submitted;
  success = false; // if all the values has been validated and results are true;

  constructor( private formBuilder: FormBuilder) { // injected formBuilder
    this.messageForm = this.formBuilder.group({ // look into the official docs, to cover this in depth
      name: ['', Validators.required],  // there are different types of validators 
      message: ['', Validators.required] //this group of the form require the validator
    })
  } 

  onSubmit(){
    this.submitted = true; //sets submitted property to true;
    if (this.messageForm.invalid) { // if the form is invalid not submitted or values aren't validated then don't anything
      return;
    } // this chunk - will be called upon the method in case we had a service to communicate i.e. with mail service;
    this.success=true; 
  }

  ngOnInit() {
  }

}
