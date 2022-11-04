import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next: ', value),
  error: error => console.warn('Error: ', error),
  complete: () => console.info('Completado')
};

const intervarlo$ = new Observable<number>(subscriber => {
  // Crear un contador
  let count: number = 0;

  const interval = setInterval(() => {
    // Cada segundo
    count++;
    subscriber.next(count);
    console.log(count);

  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  }
})

const subs2 = intervarlo$.subscribe(observer);
const subs3 = intervarlo$.subscribe(observer);
const subs1 = intervarlo$.subscribe(observer);

subs1.add(subs2)
     .add(subs3)

setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log('Completado timeout')
}, 5000) 