import { Component, OnInit } from '@angular/core';
import { FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

  ngOnInit(): void {
  }

}
