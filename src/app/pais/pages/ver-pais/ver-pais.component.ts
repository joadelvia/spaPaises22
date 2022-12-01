import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  code:string='';
  pais!:Country;

  constructor(private countryService:PaisService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.code=this.activeRoute.snapshot.params['id'];
    this.countryService.country(this.code)
    .subscribe({
      next: (resp) => {
        console.log(resp[0])
        this.pais=resp[0]
      },
      error: (error) => console.log(error)
    })
  }

  
    
    
  }


