import { Component, OnInit, DebugElement } from '@angular/core';
import { Observable, Observer, Subject, BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-ab',
  // tslint:disable-next-line: max-line-length
  // template: '<div><code>observable|async</code>: Time: {{ time | async }}</div> <div *ngFor="let conteo of conteoObs$ | async"> Conteo: {{conteo}} </div> <a (click) = agregarConteo() >Agregar Conteo</a> <a (click) = eliminarConteo() >Eliminar Conteo</a>'
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });


  userFalse: string;
  userObs = new Observable();

  // resultJob: Subject<string> = new Subject<string>();

  resultJob: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(null);
  conteoL = ['1'];
  // conteoL = ['1']
  conteo2: string[];
  loggedIn: boolean;
  retornarObservable() {
    return of(this.conteoL);
  }
  // conteoSubject = new Subject();
  // conteoObs = this.conteoSubject.asObservable();

  // conteoObs$: Observable<string[]>;


  constructor() {
    // this.conteoSubject.next(this.conteoL);

  }

  ngOnInit() {

    this.retornarObservable()
      .subscribe(
        res => {
          // this.conteo2 = res;
          this.resultJob.next(res);
          this.resultJob.subscribe(
            res2 => { this.conteo2 = res2; console.log(this.conteo2); }

          );
          console.log(this.resultJob.value);
        }
      );
    /*this.userObs
      .subscribe((res) => {
        this.userFalse = res;
        console.log('this.userFalse');
        console.log(this.userFalse);
      }
      );*/
    /*
    this.resultJob
      .subscribe(res => {
        this.userFalse = res;
        // this.resultJob.next('1');
        console.log(this.userFalse);
      }
      );
    /*
    this.retornarObservable()
      .subscribe(
        res => {
          this.conteo2 = res;
          this.loggedIn = (res != null);
          console.log(this.loggedIn);
          console.log(this.conteo2);
        }
      );*/



    /*of(this.conteoL)
      .subscribe(res => { this.conteo2 = res; });*/
    // this.conteoObs$ = of(this.conteoL);
    // this.conteoSubject.next(this.conteoL);
    // this.conteoObs.subscribe(res => { console.log(res); });
    //  this.conteoSubject.next(this.conteoL);
    //  console.log(this.conteoL);
    // this.conteo.subscribe(res => { console.log(res); });
  }

  agregarConteo() {
    this.conteoL.push(String(this.conteoL.length));
    // this.conteoL.push(String(this.conteoL.length));
    // this.conteoL = ['10', '20'];
    // this.conteoSubject.next(['4', '5']);
    // this.conteoObs.subscribe(res => { console.log(res); });
    // console.log(this.conteoL);
  }
  eliminarConteo() {

    // this.conteoL.splice(1, 2);
    // this.conteoSubject.next(['4', '5']);
    // this.conteoObs.subscribe(res => { console.log(res); });
    // console.log(this.conteoL);
  }

  startConteo() {

    this.resultJob.next(['5']);
    // console.log(this.resultJob.value);
    // this.conteoL = '1';
    this.resultJob.value.push('x');
    // this.resultJob.next();

    console.log(this.conteo2);
  }



}
