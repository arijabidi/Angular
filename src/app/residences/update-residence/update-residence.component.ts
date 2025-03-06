import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from 'src/app/Core/services/residence.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent {
  constructor(private actR:ActivatedRoute,private resServ:ResidenceService,private R:Router){}
  id!:number;
  residence!:Residence;
  upadteForm!:FormGroup;

  ngOnInit(){
    this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.resServ.getResidanceById(this.id).subscribe((donne)=>this.residence);
    this.upadteForm=new FormGroup({
      id:new FormGroup(this.residence.id),
      name:new FormGroup(this.residence.name),
      address:new FormGroup(this.residence.address),
      image:new FormGroup(this.residence.image),

    });
  }
  UpdateR(){
   this.resServ.updateResidance(this.upadteForm.value).subscribe();
   this.R.navigate(['/residences'])
    
  }}


