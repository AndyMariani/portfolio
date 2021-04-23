import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  myFormations: Experience[] = [];
  myExperiences: Experience[] = [];

  constructor() {
    this.init();
   }

  init(){
    this.addFormations();
    this.addExperiences();
  }
  addFormations(){
    const formation1 = new Experience();
    const formation2 = new Experience();
    const formation3 = new Experience();
    formation1.addExperience(
      "Master Expert en systemes d'informations",
      "Institut Limayrac - Toulouse",
      new Date(2018,10,1),
      new Date(2020,9,30),
      ""
    );
    this.myFormations.push(formation1);
    formation2.addExperience(
      "Bachelor Responsable de projets informatiques",
      "Institut Limayrac - Toulouse",
      new Date(2017,10,1),
      new Date(2018,9,30),
      ""
    );
    this.myFormations.push(formation2);
    formation3.addExperience(
      "BTS Systèmes Numériques option Informatique et Réseaux",
      "Institut Limayrac - Toulouse",
      new Date(2015,9,1),
      new Date(2017,7,30),
      ""
    );
    this.myFormations.push(formation3);
  }
  addExperiences(){
    const experience1 = new Experience();
    const experience2 = new Experience();
    const experience3 = new Experience();
    experience1.addExperience(
      "Développeur web front-end",
      "Thales AVS - Toulouse",
      new Date(2018,10,1),
      new Date(2020,9,30),
      "IHM pour une application de gestion de plans de vols sous Angular 8+."
    );
    this.myExperiences.push(experience1);
    experience2.addExperience(
      "Développeur mobile Android",
      "Thales AVS - Toulouse",
      new Date(2018,2,1),
      new Date(2018,8,1),
      "Application pour montre connectée permettant de visualiser les informations d'un avion."
    );
    this.myExperiences.push(experience2);
  }
}
