import { PostService } from 'src/app/service/post.service';
import { Post } from './../../models/Post';
import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //cadastroForm!: FormGroup;

  post = {

    UrlPhoto: '',
    type: '',
    title: '',
    author: ''
  } as Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    this.postService.savePhoto(this.post).subscribe((data: Post) => {
      console.log(this.post = data);
      window.location.reload();
    })
  }
}
