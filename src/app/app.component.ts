import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, of } from 'rxjs';

@Component({
  selector: 'app-ab',
  // tslint:disable-next-line: max-line-length
  template: '<div><code>observable|async</code>: Time: {{ time | async }}</div> <div *ngFor="let conteo of conteoObs$ | async"> Conteo: {{conteo}} </div> <a (click) = agregarConteo() >Agregar Conteo</a> <a (click) = eliminarConteo() >Eliminar Conteo</a>'
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  conteoL = ['1', '2'];
  // conteoSubject = new Subject();
  // conteoObs = this.conteoSubject.asObservable();

  conteoObs$: Observable<string[]>;


  constructor() {
    // this.conteoSubject.next(this.conteoL);

  }

  ngOnInit() {
    this.conteoObs$ = of(this.conteoL);
    // this.conteoSubject.next(this.conteoL);
    // this.conteoObs.subscribe(res => { console.log(res); });
    //  this.conteoSubject.next(this.conteoL);
    //  console.log(this.conteoL);
    // this.conteo.subscribe(res => { console.log(res); });
  }

  agregarConteo() {

    this.conteoL.push(String(this.conteoL.length));
    // this.conteoL = ['10', '20'];
    // this.conteoSubject.next(['4', '5']);
    // this.conteoObs.subscribe(res => { console.log(res); });
    // console.log(this.conteoL);
  }
  eliminarConteo() {
    this.conteoL.splice(1, 2);
    // this.conteoSubject.next(['4', '5']);
    // this.conteoObs.subscribe(res => { console.log(res); });
    // console.log(this.conteoL);
  }



}
