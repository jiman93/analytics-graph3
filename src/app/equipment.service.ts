import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServices{
    private _url: string = '../assets/equipment.json';
    constructor(private http: Http) {
    }
    getJSON() {
         return this.http.get(this._url)
         .map((response:Response) => response.json());
     }
}
