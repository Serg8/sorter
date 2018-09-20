class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let arr_sort = [];
    indices.sort(function(a,b){return a - b;});
    for(let i=0;i<indices.length;i++) {
      arr_sort[i] = this.arr[indices[i]];
    }
    if(this.compareFunction) {
      arr_sort.sort(this.compareFunction);
    }else{
      arr_sort.sort(function(a,b){return a - b;});
    }
    for(let k=0, n=0; k<arr_sort.length, n<indices.length; k++, n++) {
      this.arr[indices[n]] = arr_sort[k];
    }
  }

  setComparator(compareFunction) {
    if(compareFunction) {
      this.compareFunction = compareFunction;
    }
  }

}

module.exports = Sorter;