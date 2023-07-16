function* Boo() {
  console.log('start');
  yield 1;
  yield 2;
  yield 3;
  console.log('finish');
}

const iterator = Boo();
console.log(iterator.next().value);
console.log(iterator.next().done);
