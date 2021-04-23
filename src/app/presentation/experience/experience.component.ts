import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  myExperiences: Experience[] = [];
  myFormations: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.myExperiences = this.experienceService.myExperiences;
    this.myFormations = this.experienceService.myFormations;
    console.log(this.experienceService.myExperiences);
  }

}
