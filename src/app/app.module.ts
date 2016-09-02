import { NgModule, ApplicationRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent, AppBarComponent, NotesComponent, NoteCardComponent } from './home'

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
