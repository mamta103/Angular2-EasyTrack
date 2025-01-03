import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @Input({required:true}) avatar !: string;
  @Input({required:true}) name !: string;

  get imagePath(){
    return 'images/users/' + this.avatar;
  }
   
  onSelectUser() {}
}
