import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'note-card',
  template: require('./note-card.html'),
  styles: [require('./note-card.css')]
})
export class  NoteCard{
  @Input() note
  @Output() checked = new EventEmitter()

  onChecked() {
    this.checked.emit(this.note)
  }
}