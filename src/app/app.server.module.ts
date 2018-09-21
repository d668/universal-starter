import {NgModule, Injectable, Inject} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { CookieService } from './cookie.service';
@Injectable()
export class RequestCookies {
    constructor(@Inject(REQUEST) private request: Request) {}

    get cookies() {
        return !!this.request.headers.cookie ? this.request.headers.cookie : null;
    }
}
@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
  ],
  providers: [
    CookieService,
    { provide: 'req', useClass: RequestCookies }
],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
