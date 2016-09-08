// Please comment this file in the first compilation

import { enableProdMode } from '@angular/core'
import { platformBrowser } from '@angular/platform-browser'

import { AppModuleNgFactory } from './app/app.module.ngfactory'

enableProdMode()
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
