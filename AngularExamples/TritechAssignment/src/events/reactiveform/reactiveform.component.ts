import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent  {

  details = new FormControl('');
  updatedetails(){
    this.details.setValue('Microsot');
  }
  detailsform=new FormGroup({
    Title:new FormControl('',Validators.required),
    Date:new FormControl('',Validators.required),
    Location:new FormControl('',Validators.required),
    Description:new FormControl('',[Validators.required, Validators.minLength(10)])

  });
  onSubmit()
  {
    console.log(this.detailsform.value);
    
  }
  clearForm()
  {
    this.detailsform.reset();
  }
   get Title(){return this.detailsform.get('Title')}

   
  get Date() {
    return this.detailsform.get('Date');
  }
  get Location() {
    return this.detailsform.get('Location');
  }
  get Description() {
    return this.detailsform.get('Description');
  }

  // exform: FormGroup | undefined;
  

  // ngOnInit() {

  // this.exform = new FormGroup({
  //   'Title' : new FormControl(null, Validators.required),
  //   'Date' : new FormControl(null, [Validators.required, Validators.email]),
  //   'Location' : new FormControl(
  //     null,
  //     [
  //       Validators.required,
  //       Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
  //     ]),
  //   'Description' : new FormControl(null, [Validators.required, Validators.minLength(10)])
  // });
  // }
  
}
