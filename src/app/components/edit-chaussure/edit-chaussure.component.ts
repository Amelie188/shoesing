import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-chaussure',
  templateUrl: './edit-chaussure.component.html',
  styleUrls: ['./edit-chaussure.component.css']
})
export class EditChaussureComponent implements OnInit {

  isLoading: boolean;
  chaussure: Chaussure;


  constructor(private chaussureService: ChaussureService, private ActivatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true; 
    this.chaussureService.getOneChaussure(+this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe((data:
   Chaussure) => {
    this.chaussure = data;  
    this.isLoading = false;
    }); 
}

editChaussure(): void {
 this.chaussureService.editChaussure(this.chaussure).subscribe(then => {
   this.router.navigate(['/chaussure']);
   }); 

}
}
