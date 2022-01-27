import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSelectorUser, postSelector } from 'src/app/reducers/createdReducers/createdReducers';
import { editPost } from 'src/app/reducers/posts';
import { postModel } from '../../postsModule/posts/ipost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {


  allposts!: postModel[];
  post!: postModel;
  editForm = this.fb.group({
    title: ['', Validators.required],
    body: '',
  })

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store,
    public fb: FormBuilder,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.store.select(loginSelectorUser).subscribe(
      v => {
        if (v !== true) {
          this.rout.navigateByUrl('error')
        }
      })
    this.getPostInfo()
  }



  getPostInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      this.store.select(postSelector).subscribe((v) => {
        this.allposts = v as postModel[]
        this.post = v.find(el => el.id == id) as postModel;
        this.editForm.setValue({
          title: this.post.title,
          body: this.post.body
        })
      })
    },
      err => console.error(err.message))
  }

  edit(): void {
    console.log(this.post);
    const postsArr = this.allposts.map(el => {
      return el.id == this.post.id ? {
        ...el,
        ...this.editForm.value
      } : el
    })
    this.store.dispatch(editPost({
      postEditedArr: {
        ...postsArr
      }
    }))
  }
}
