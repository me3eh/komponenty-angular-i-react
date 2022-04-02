import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Comments {

  constructor(@Inject(Number)public userId: number,
              @Inject(Number)public id: number,
              @Inject(String)public title: string,
              @Inject(String)public body: string) { }
}
export class CommentsService {

  constructor() { }
}
