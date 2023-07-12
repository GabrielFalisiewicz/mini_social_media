import { Component } from '@angular/core';

@Component({
    selector: 'app-create-post',
    templateUrl: './post-create-component.html'
})

export class PostCreateComponent{
    enteredValue = '';
    newPost = '';
    onAddPost(){
        this.newPost = this.enteredValue;
    }
}