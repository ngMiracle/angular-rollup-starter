import {Component} from "@angular/core";

import {Home} from "./home"

@Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [Home]
})
export class App{}