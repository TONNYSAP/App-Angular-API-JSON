import { Component, OnInit, PipeTransform } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/service/post.service';
//import { FilterPipe } from 'src/app/filter.pipe';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  posts!: Post[];

  post = {} as Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      console.log(this.posts = posts);      
    })
  }

  deletePost(post: Post): void {
    this.postService.deletePost(post.id).subscribe(() => {
      alert('Esta foto será apagada!')
      this.getPosts();
    })
  }


}
