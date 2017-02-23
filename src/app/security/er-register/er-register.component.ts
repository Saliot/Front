import { Component, ElementRef, OnInit, ViewChild, trigger, state, style, transition, animate} from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegistrationService } from './registration.service';
import { IUser } from './user';
import { ICountry,Country } from '../../shared/reference/country';
import { ICompany } from '../../shared/reference/company';
import { ReferenceDataService } from '../../shared/reference/reference-data.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'er-register',
  templateUrl: './er-register.component.html',
  styleUrls: ['./er-register.component.css'],
  host: {'(input-blur)':'onInputBlur($event)'},
  animations:[

      trigger('myTrigger',[

            state ('small',style({
                transform: 'scale(1)'
            })),
            state ('large',style({
                transform: 'scale(1.4)'
            })),
            transition ('small <=> large', animate('500ms'))
      ])

  ]
})
export class ErRegisterComponent implements OnInit {

  user: IUser;
  countries: ICountry[];
  selectedCountry: any;
  companies: ICompany[];
  errorMessage :string;
  registerForm: FormGroup;
  state: string = 'small';
  private fieldForShow: string;

  constructor(private fb :FormBuilder,private _registrationService: RegistrationService, private _referenceDataService : ReferenceDataService) {}



  ngOnInit(): void {

        this._referenceDataService.getCountries()
            .subscribe(data => this.countries=data,
                      error => this.errorMessage=<any>error);
        
         this._referenceDataService.getCompanies()
            .subscribe(data => this.companies=data,
                      error => this.errorMessage=<any>error);          



          this.buildregisterForm();
          
          this.fieldForShow = "companyDescription";
  }



  toggleState() {
                    console.log(this.state);
                    this.state = (this.state === 'small' ? 'large' : 'small')
  }


  buildregisterForm() : void {
          
          let password = new FormControl ('',[Validators.required,Validators.minLength(8)]);
          let  passwordConfirmed = new FormControl ('',CustomValidators.equalTo(password));
    
          this.registerForm = this.fb.group({ 
          firstName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(255)]],
          lastName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(255)]],
          email: ['',[Validators.required,CustomValidators.email]],
          country:['',Validators.required],
          company:['',Validators.required],
          password: password,
          passwordConfirmed:passwordConfirmed
  
        });
      
        this.registerForm.valueChanges
            .debounceTime(1000)
            .subscribe(data => this.onValueChanged());

        this.onValueChanged();
  
}

onInputBlur(event){

     this.onValueChanged();
}


onValueChanged(){
  
  if(!this.registerForm) {return ;}

  const form = this.registerForm;

  for (const field in this.formErrors)
  {
      this.formErrors[field] = '';

      const control = form.get(field);

      if(control && (control.dirty  || control.touched ) && !control.valid){

            const messages = this.validationMessages[field];
          
            for(const key in control.errors){
              this.formErrors[field] += messages[key] + '';
            }

      }


  }
}


formErrors = {

  'firstName' : '',
  'lastName' : '',
  'email':'',
  'country':'',
  'password':'',
  'passwordConfirmed':''

}


validationMessages ={

  'firstName' : {

      'required':  'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'First Name cannot be more than 255 characters long.',
  },

  'lastName' : {

      'required':  'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 255 characters long.',
  },

   'email' : {

      'required': 'Email is required.',
      'email' :   'Email has not the right format.'
  },

  'country' : {

      'required': 'Country is required.'
  },

   'company' : {

      'required': 'Country is required.'
  },
  
  'password' : {

      'required': 'Password is required.',
      'minlength': 'Paswword must be at least 8 characters long.',
  },

   'passwordConfirmed' : {

      'equalTo': 'Confirmed Password does not match with Password.',
  }

}


  /*registerUser(u: Object){

      this._registrationService.addUser(u)
           .subscribe(data => this.user= data,
                      error => this.errorMessage=<any>error);

  }*/

  public selectCountry(c: ICountry) :void {
    
    this.registerForm.controls['country'].setValue(c.countryKey);

}


 onKey(event:any) { // without type info
    console.log(event.target.value);
  }



}
