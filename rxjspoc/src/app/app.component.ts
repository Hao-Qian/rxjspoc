import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number: any = [1, 5,10];
  observable:any = Observable.create(function(observer){
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(()=>{
      observer.next(4);
      observer.complete();
    },1000)
  })
 // source: any = Observable.from(this.number);
 /*
 source :any = Observable.create(
   observer => {
    let index = 0;
    let produceValue = () =>{
      observer.next(this.number[index++]);
        if(index < this.number.length){
          setTimeout(produceValue, 2000);
      }else{
        observer.complete();
      }
    }

    produceValue();

   }
 ).map(n => n * 2);
*/

source = Observable.fromEvent(document, "mouseover");

public onRegister(){
  console.log('just before subscribe');
 this.observable.subscribe({
   next: x => console.log('got value '+ x),
   error: err => console.error('something wrong occurred'),
   complete:() => console.log('done'),
 })
 console.log('-----------------------------------')
 console.log('just after subscribe')
}
}
