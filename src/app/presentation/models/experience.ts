export class Experience {
  name: string;
  lieu: string;
  dateStart: Date;
  dateEnd: Date;
  description: string;

  constructor(){
  }

  addExperience(name: string, lieu: string, dateStart: Date, dateEnd: Date, description: string){
    this.name = name;
    this.lieu = lieu;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.description = description;
  }
}
