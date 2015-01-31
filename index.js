/*

  Given a string, find the character offset for the beginning of each line.

  @param string
  @return array

*/
module.exports = function calcLineOffsets (src) {
  var point = 0;

  return src.split('\n').map(function (line, i) {
    var start = point;

    // move the point to the end of the line
    point += line.length + 1;

    return start;
  });
};
