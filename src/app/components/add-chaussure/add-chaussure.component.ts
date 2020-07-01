import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent implements OnInit {

  chaussure = new Chaussure ();
  isLoading: boolean;
  
  constructor(private chaussureService : ChaussureService, private router: Router) { }

  ngOnInit(): void {
  }

  addChaussure(): void {
    this.isLoading = true;
    this.chaussureService.addChaussure(this.chaussure).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/chaussure']);
  
    });
}


}