import { Component, OnInit , Input, forwardRef } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR,NG_VALIDATORS, FormControl  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'er-input',
  templateUrl: './er-input.component.html',
  styleUrls: ['./er-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ErInputComponent),
      multi: true,
  },

  {
       provide: NG_VALIDATORS,
       useValue: (c: FormControl) => {
        let err = {
          rangeError: {
            given: c.value,
            max: 10,
            min: 0
          }
        };

        return (c.value > 10 || c.value < 0) ? err : null;
      },
      multi: true
   }
   
   ]
})

export class ErInputComponent implements ControlValueAccessor {

  private data: any;
  private propagateChange = (_: any) => { };


  @Input() inputType: string;
  @Input() inputPlaceHolder: string;
  @Input() inputIconName: string;

  constructor() { 

  }

  writeValue(obj: any) {
      
      console.log('write value' + obj);
      if (obj) {
        this.data=obj;
      }
  }
  
  registerOnChange(fn: any) {
       this.propagateChange = fn;
  }
  

  registerOnTouched(fn: any) : void {}

 
 
 
 
 
 
 
 
 
 
 
  private onChange(event) {

        // get value from the input
        let newValue = event.target.value;

        try {
            this.data = newValue;
            console.log('Email change' + event);

        } catch (ex)
        {

            this.data = null;
        }



        // update the form
        this.propagateChange(this.data);
    }

}
