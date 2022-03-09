import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //imports the module that we just have created

platformBrowserDynamic().bootstrapModule(AppModule);