import {Observable} from 'https://dev/.jspm.io/txjs@6/_esm2015';

//const miObservable =  3
InvertirTexto(1)
function InvertirTexto(ini){
    let cont = ini;

    const miObservable = Observable.create((observer) => {
        observer.next('Hola');
        observer.next('K ase');
    })
/*
    return new Observable(subscriber => {
        setInterval(()=>{
            subscriber.next(cont++)
        }, 1000)
    })
*/
    miObservable.suscribe( event => console.log(event))
}