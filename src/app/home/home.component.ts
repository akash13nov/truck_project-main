import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {

    this.listData = [];
    this.userForm = this.fb.group({
      truckname :['', Validators.required],
      location :['', Validators.required],
      opening :['', Validators.required],
      closing :['', Validators.required]
    })
   }

   public addItem(): void {
     this.listData.push(this.userForm.value);
     this.userForm.reset();
   }

   reset() {
     this.userForm.reset();
   }

   removeItem(element) {
     this.listData.forEach((value, index) => {
       if (value == element)
       this.listData.splice(index, 1);
     });
   }

  ngOnInit() {
  }

}
