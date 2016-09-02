import { NgModule, ApplicationRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent, AppBarComponent, NotesComponent } from './home'
import { NoteCardComponent } from './home/notes/note-card/note-card.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HomeComponent, AppBarComponent, NotesComponent, NoteCardComponent],
    entryComponents: [AppComponent],
})
export class AppModule {
    ngDoBootstrap(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent)
    }
}
