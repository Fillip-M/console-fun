// write cool JS here!!
const myInfo = 'a variable';
const myBooks = [
  'The Catcher in the Rye',
  'To Kill a Mockingbird',
  '1984',
  'Pride and Prejudice',
  'The Great Gatsby',
  'The Hobbit',
  "Harry Potter and the Sorcerer's Stone",
  'The Lord of the Rings',
  'The Da Vinci Code',
  'The Hunger Games',
];
console.groupCollapsed('console project');
console.log('i am a normal console log');
console.info('i am a console info: ' + myInfo);
console.warn('this is a warning');
console.error('this is an error');

console.table(myBooks);
console.groupEnd();

console.time('default');
console.timeEnd('default');
