import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})

export class ChaussureComponent implements OnInit {

  chaussure: Chaussure[];
  isLoading: boolean;

  constructor( private chaussureService: ChaussureService ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.chaussureService.getAllChaussures().subscribe((data: Chaussure[]) => {
      this.chaussure = data;
      this.isLoading = false;
    });
    
  }
  deleteChaussure(id: number): void {  
  this.isLoading = true;
  this.chaussureService.deleteChaussure(id).subscribe(then => {
  this.chaussureService.getAllChaussures().subscribe((data: Chaussure[]) => 
  {this.chaussure = data;
    this.isLoading = false;
  }); 
  //this.toastr.success('Suppression faite!', 'OK');

});
}





} 