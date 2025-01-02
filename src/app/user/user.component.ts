import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagepath() {
    return 'images/users/' + this.selectedUser.avatar;
  }
  /*
  1.Previously, the value at the top was changing only once, even after multiple clicks or user detail updates.
  2.Now, the value updates dynamically every time the click event is triggered or user details change.
  3.To ensure consistent updates, the value is stored locally for immediate and accurate changes.
*/
  
  selectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
