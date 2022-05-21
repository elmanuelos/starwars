import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sabermas',
  templateUrl: './sabermas.component.html',
  styleUrls: ['./sabermas.component.css']
})
export class SabermasComponent implements OnInit {

  public saberMasForm!: FormGroup;
  //bang(!) the property will definitely gets initialized and it will not be
  //a null or undefined value.

  constructor(private formBuilder:FormBuilder, private location:Location) { }

  //mayorDeEdad(control:FormControl){
  // }

  ngOnInit(): void {
    this.saberMasForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      dob: ['', [Validators.required]],
    })
  }

  validInputName(){
    return this.saberMasForm.controls['name'].errors
    && this.saberMasForm.controls['name'].touched;
  }
  validInputLastName(){
    return this.saberMasForm.controls['lastName'].errors
    && this.saberMasForm.controls['lastName'].touched;
  }
  validDOB(){
    return this.saberMasForm.controls['dob'].errors
    && this.saberMasForm.controls['dob'].touched;
  }

   send():any{
    console.log(this.saberMasForm.value);
  }
  clickBack(){
    this.location.back();
}
}
