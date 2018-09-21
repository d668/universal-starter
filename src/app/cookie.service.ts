import { Inject, Injectable } from '@angular/core';


@Injectable()
export class CookieService {
    private cookieStore = {};

    constructor(
        @Inject('req') private readonly req: any,
    ) {
        if (this.req !== null) {
            this.parseCookies(this.req.cookies);
        } else {
            this.parseCookies(document.cookie);
        }
    }

    public parseCookies(cookies) {
        this.cookieStore = {};
        if (!!cookies === false) { return; }
        let cookiesArr = cookies.split(';');
        for (const cookie of cookiesArr) {
            const cookieArr = cookie.split('=');
            this.cookieStore[cookieArr[0]] = cookieArr[1];
        }
    }

    get(key: string) {
        return !!this.cookieStore[key] ? this.cookieStore[key] : null;
    }
}