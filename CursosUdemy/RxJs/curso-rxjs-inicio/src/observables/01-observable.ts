import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Siguiente [next]: ', value),
  error: error => console.warn('Error [obs]: ', error),
  complete: () => console.info('Completado [obs]')
};

// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {

  subs.next('Hola');
  subs.next('Mundo');

  subs.next('Hola');
  subs.next('Mundo');

  // Forzar error
  // const a = undefined;
  // a.nombre = 'Pablo'
  

  subs.complete(); // El subscribe no recibe nada más

  subs.next('Hola');
  subs.next('Mundo');

});

obs$.subscribe(console.log);

obs$.subscribe(resp => {
  console.log(resp);
});

// obs$.subscribe(
//   valor => console.log('Next: ', valor),
//   error => console.warn('Error: ', error),
//   () => console.info('Completado')
// )

obs$.subscribe(observer);