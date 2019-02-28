import { Component, OnInit } from "@angular/core";
import { FormGroup , FormControl , Validators } from '@angular/forms'
import { BasicService } from '../../services/basic.service'

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  SumForm : FormGroup;
  angular_Name: string;
  cartArray: Array<string>;
  result: any;

  constructor(public basicService : BasicService) {}

  ngOnInit() {
    console.log(this.basicService.getAof)
    this.angular_Name = "Kittituch Kosol";
    this.cartArray = ["Dog", "Cat", "Fish", "Rabbit"];
    
    this.SumForm = new FormGroup({
      firstnumber : new FormControl('', [Validators.required,Validators.minLength(2)]),
      secondnumber : new FormControl('', Validators.required)
    })
  }
  del(index) {
    this.cartArray.splice(index, 1);
  }

  Sum(){
    if(this.SumForm.valid){
      this.result = this.SumForm.controls['firstnumber'].value + this.SumForm.controls['secondnumber'].value
    }else{
      console.log('Kwai');
      this.result = 555
    }
  }
  editAof(Aof){
    this.basicService.EditAof(Aof)
    console.log(this.basicService.getAof)
  }

}
