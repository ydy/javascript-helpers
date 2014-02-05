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

test("every", function(t){
  var count1 = 0;
  var count2 = 0
  var result1 = arrayhelpers.every(function(item){
    count1++
    if(item%2===1) return true
    else return false 
    }, [1, 3, 4, 5])
  t.equals(count1, 3, "Correct loop times")
  t.equals(result1, false, "Correct result")
  var result2 = arrayhelpers.every(function(item){
    count2++
    if(item%2===1) return true
    else return false 
    }, [1, 3, 5, 7])
  t.equals(count2, 4, "Correct loop times")
  t.equals(result2, true, "Correct result")
  t.end();
})

test("some", function(t){
  var count1 = 0;
  var count2 = 0;
  var result1 = arrayhelpers.some(function(item){
    count1++;
    if(item%3 === 0) return true;
    else return false;
  }, [5, 4, 3, 1])
  
  var result2 = arrayhelpers.some(function(item){
    count2++;
    if(item%5 === 0) return  true;
    else return false;
  }, [1, 6, 7, 11]);
  t.equals(count1, 3, "Correct loop times");
  t.equals(result1, true, "Correct result");
  t.equals(count2, 4, "Correct loop times");
  t.equals(result2, false, "Correct result");
  t.end();
})

test("first", function(t){
  var result = arrayhelpers.first(["a", "b", "c"]);
  t.equals(result, "a", "Correct");
  t.end()
})

test("last", function(t){
  var result = arrayhelpers.last([1, 2, 3]);
  t.equals(result, 3, "Correct");
  t.end();
})

test("rest", function(t){
  var result = arrayhelpers.rest([1, 2, 3, 4]);
  t.same(result, [2, 3, 4], "Correct");
  t.end();
})












