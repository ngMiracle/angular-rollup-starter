import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Note } from '../note'

@Component({
    selector: 'note-card',
    templateUrl: './note-card.component.html',
    styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
    @Input() note: Note
    @Output() checked = new EventEmitter<Note>()

    onChecked() {
        this.checked.emit(this.note)
    }
}