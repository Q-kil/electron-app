import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

// webpack DefinePlugin 注入的变量，需要声明，否则编辑器会报错
declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);