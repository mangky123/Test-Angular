import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { president } from 'src/app/class/interface';
@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.css"]
})
export class LinkComponent implements OnInit {

  private presidents: president[]

  constructor(public httpClient: HttpService) {}

  ngOnInit() {
    this.httpClient.getPresident().subscribe(result => {
      this.presidents = result
    });
  }
}
