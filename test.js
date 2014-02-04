var arrayhelpers = require("./array");
var test = require('tap').test;

test("forEach", function(t){
  var total = 0;
  var count = 0;
  arrayhelpers.forEach(function (item) {
    total += item;
    count++;
  }, [5, 10, 15, 20]);
  t.equals(total, 50, 'total should be equal to 50');
  t.equals(count, 4, 'should only run once for each item in array');
  t.end();
});

test("map", function(t){
  var result = arrayhelpers.map(function(item){
    return item * 2
  }, [2, 3, 5, 6]);
  t.same(result, [4, 6, 10, 12], "should map");
  t.end();
})


