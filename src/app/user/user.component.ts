import { Component, computed, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Use of decorators
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //using signal 
  avatar = input.required<string>();
  name = input.required<string>();


  imagePath = computed(()=> 'images/users/' + this.avatar());

  // get imagePath() {
  //   return 'images/users/' + this.avatar();
  // }

  onSelectUser() {}
}
