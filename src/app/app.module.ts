import { NgModule, ApplicationRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent, AppBarComponent, NotesComponent } from './home'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HomeComponent, AppBarComponent, NotesComponent],
    entryComponents: [AppComponent],
})
export class AppModule {
    ngDoBootstrap(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent)
    }
}
