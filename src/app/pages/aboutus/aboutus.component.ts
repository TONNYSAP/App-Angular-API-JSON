import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  img1 = 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?cs=srgb&dl=pexels-trinity-kubassek-445109.jpg&fm=jpg';
  img2 = 'https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?cs=srgb&dl=pexels-s-migaj-746386.jpg&fm=jpg';
  img3 = 'https://images.pexels.com/photos/7956903/pexels-photo-7956903.jpeg?cs=srgb&dl=pexels-thirdman-7956903.jpg&fm=jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
