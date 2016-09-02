import { Component } from '@angular/core'

import { Note } from './note'

@Component({
    selector: 'notes',
    templateUrl: './notes.component.html'
})
export class NotesComponent {
    notes: Note[] = [
        { title: 'n', value: 'v' },
        { title: 'n1', value: 'v1' },
    ]

    checkCard(noteToRemove: Note): void {
        this.notes = this.notes.filter(note => note !== noteToRemove)
    }
}