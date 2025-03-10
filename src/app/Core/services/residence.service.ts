import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
     listResidences: Residence[] = [
    
      ];
url="http://localhost:3000/Residences"
  constructor(private http:HttpClient) { }
  getResidences(){
    return this.http.get<Residence[]>(this.url);

  }
  
  addResidence(residence:Residence){
   return this.http.post(this.url,residence);
  }
   deleteResidence(id:number){
    return this.http.delete(this.url+'/'+id)
   }
   getResidanceById(id:number){
    return this.http.get<Residence>(this.url+'/'+id);

   }
   updateResidance(residence:Residence)
   {return this.http.put(this.url+'/'+residence.id,residence);
    
   }
}
