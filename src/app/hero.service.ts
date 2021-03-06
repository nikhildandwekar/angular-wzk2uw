import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";

@Injectable()
export class HeroService {
  heroes: Hero[];
  constructor(private  messageService : MessageService) {}

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
