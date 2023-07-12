import { Component } from '@angular/core';

@Component({
    selector: 'app-create-post',
    templateUrl: './post-create-component.html'
})

export class PostCreateComponent{
    newPost = '';
    onAddPost(){
        this.newPost = 'New Post!';
    }
}