import { webSocket } from 'rxjs/webSocket' // for RxJS 6, for v5 use Observable.webSocket

 let subject = webSocket('ws://localhost:3001');
 subject.subscribe(
    (msg) => console.log('message received: ' + msg),
    (err) => console.log(err),
    () => console.log('complete')
  );
