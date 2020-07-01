import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-chaussure',
  templateUrl: './detail-chaussure.component.html',
  styleUrls: ['./detail-chaussure.component.css']
})
export class DetailChaussureComponent implements OnInit {
  
  id: number;
  isLoading: boolean;
  chaussure: Chaussure;


  constructor(private chaussureService: ChaussureService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.chaussureService.getOneChaussure(+this.route.snapshot.paramMap.get('id')).subscribe((data: Chaussure) => {
      this.chaussure = data;
      this.isLoading = false;
    });
  }











}
