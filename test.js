var calcLineOffsets = require('./index');
var tape = require('tape');

tape('Check line offsets', function (t) {
  var src = [
    'a',
    'bc',
    'def'
  ].join('\n');

  var offsets = calcLineOffsets(src);
  t.equals(offsets[0], 0, 'First line is always 0');
  t.equals(offsets[2], 5, 'Correct index for 3rd line');
  t.end();
});
