// Please comment this file in the first compilation since the .ngfactory.ts files are not generated yet.

import { enableProdMode } from '@angular/core'
import { platformBrowser } from '@angular/platform-browser'

import { AppModuleNgFactory } from './app/app.module.ngfactory'

enableProdMode()
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
