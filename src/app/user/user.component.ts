import { Component, Input, output, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})



export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({required:true}) users?: User;
  @Input({required:true}) selected !: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'images/users/' + this.users?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.users?.id);
  }
}
