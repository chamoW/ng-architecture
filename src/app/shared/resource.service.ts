import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ResourceService {

  constructor(private httpClient: HttpClient) { }


  getResource<T>(url: string, parameter: string): Observable<T[]> {

    return this.httpClient.get(url).pipe(map((array: T[]) => {
      return array.map(item => item[parameter]);

    }));

  }

}
