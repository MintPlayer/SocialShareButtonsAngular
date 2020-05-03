import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/entities/person';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-show',
  templateUrl: './person-show.component.html',
  styleUrls: ['./person-show.component.scss']
})
export class PersonShowComponent implements OnInit, OnDestroy {

  constructor(private personService: PersonService, private route: ActivatedRoute) {
  }

  person: Person = { id: null, firstname: null, lastname: null };

  private loadPerson(id: number) {
    let person = this.personService.getPerson(id);
    this.person = person;
  }


  private routeSubscription: Subscription;
  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((routeParams) => {
      this.loadPerson(parseInt(routeParams.id));
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
