import { NgModule, ApplicationRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    entryComponents: [AppComponent],
})
export class AppModule {
    constructor(private appRef: ApplicationRef) { }

    ngDoBootstrap() {
        this.appRef.bootstrap(AppComponent);
    }
}
