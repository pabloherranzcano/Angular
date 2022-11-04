import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next: ', value),
  error: error => console.warn('Error: ', error),
  complete: () => console.info('Completado')
};


const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(
    () => subs.next(Math.random()), 1000
  )

  return () => {
    clearInterval(intervalID);
    console.log(('Intervalo destruido'));
    
  }
})

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

/**
 * 1- Casteo múltiple: muchas suscripciones van a estar sujetas a este mismo subject (observable)
 * y va a servir para servir la misma información a todos los lugares que estén suscritos.
 *
 * 2- También es un observer.
 * 
 * 3- Next, error y complete
 */

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {

  subject$.next(10);

  subject$.complete;

  subscription.unsubscribe();

}, 3500);