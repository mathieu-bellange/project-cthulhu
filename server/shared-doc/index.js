const { Subject, BehaviorSubject } = require('rxjs');
const { withLatestFrom, map } = require('rxjs/operators');
const { remove, omit } = require('lodash');

const sharedDocs$ = new BehaviorSubject([]);
let actionOnSharedDocs$ = new Subject();
actionOnSharedDocs$ = actionOnSharedDocs$.pipe(
  map(({ func, sharedDoc }) => ({ func, sharedDoc: omit(sharedDoc, 'shared') })),
  withLatestFrom(sharedDocs$),
  map(values => ({ ...values[0], sharedDocs: values[1] })),
  map(({ func, sharedDoc, sharedDocs}) => func(sharedDocs, sharedDoc)),
);
actionOnSharedDocs$.subscribe(sharedDocs => sharedDocs$.next(sharedDocs));

function add(array, item) {
  return [...array, item];
}

function del(array, item) {
  remove(array, item);
  return array;
}

module.exports = {
  add, del, actionOnSharedDocs$, sharedDocs$
}
