import 'core-js/fn/reflect/define-metadata'
import 'core-js/fn/reflect/get-metadata'
import 'core-js/fn/reflect/get-own-metadata'

import 'zone.js/dist/zone.js'

import { enableProdMode } from '@angular/core'
import { platformBrowser } from '@angular/platform-browser'

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory'

enableProdMode()
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
