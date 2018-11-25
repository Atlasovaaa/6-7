function ArraySeq(data) {
  this.position = -1;
  this.data = data;
}

function logFive(seq) {
  for (var i = 0; i < 5; i++) {
    if (!seq.next()) {
      break;
    }
    console.log(seq.curr());
  }
}

ArraySeq.prototype.next = function () {
  if (this.position >= this.data.length - 1) {
    return false;
  }
  this.position++;
    return true;
}

ArraySeq.prototype.curr = function () {
  return this.data[this.position];
}

function RangeSeq(from, to) {
  this.position = from - 1;
  this.to = to;
}

RangeSeq.prototype.next = function () {
  if (this.position >= this.to) {
    return false;
  }
  this.position++;
  return true;
}

RangeSeq.prototype.curr = function() {
  return this.position;
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
