import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Form } from './form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //brings form and its sturcture over to html file
  form : Form = new Form();
  forms : Array<Form> = [];


  onSubmit(event: Event, form): void {
      //.preventDefault stops bowser from refreshing
      event.preventDefault();
      this.forms.push(this.form);
      this.form = new Form();
      form.reset();

      console.log('just clikced', this.forms); //this. shows the input in console from form

  }
}
