import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  customForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customForm = this.fb.group({
      myInputControl: [''],       // FormControl for input
      textField: [''],   // FormControl for text-field
    });
  }

  ngOnInit(): void {
    // this.customForm.valueChanges.subscribe( data => {
    //   console.log('valueChanges: ', data)
    // })

    this.customForm.get('myInputControl')?.valueChanges.subscribe( data => {
      console.log('valueChanges del Input: ', data)
    })
  }

  onSubmit() {
    if (this.customForm.valid) {
      // Do something with the form data
      console.log(this.customForm.value);
    }
  }

  onSuggestionSelected(data: any) {
    // Handle the suggestion selected event here
    console.log('Suggestion selected:', data);
    // You can update your form or perform other actions based on the suggestion selected
  }

  getFormControl() {
    return this.customForm.get('myInputControl') as FormControl
  }

}
