import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { marriageInterface } from 'src/app/class/interface';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.css']
})
export class MarriageComponent implements OnInit {

  private marriages: marriageInterface[];
  private presname : string;
  private spousename : string;
  private prage : string;
  private spage : string;
  private nrchildren : string;
  private maryear : string;

  constructor(public httpClient: HttpService) { }

  ngOnInit() {
    this.httpClient.getmarriage().subscribe(result => {
      this.marriages = result
    });
  }
  add(){
    let marriage = {   
      PRES_NAME: this.presname,
      SPOUSE_NAME: this.spousename,
      PR_AGE: this.prage,
      SP_AGE: this.spage,
      NR_CHILDREN: this.nrchildren,
      MAR_YEAR: this.maryear}
    // marriage สร้างมาใช้ใน method เท่านั้น ไม่เกี่ยวกับข้างนอก
    this.marriages.unshift(marriage)
    //ถ้าไม่สร้างเป็น array แต่แรก จะ unshift ไม่ได้ 

  }

}
