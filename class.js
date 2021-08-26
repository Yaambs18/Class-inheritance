 var N = {
    a: 2,
    b: 5,
    m: function() {
      return this.a + this.b;
    }
  };
  
  console.log(N.m());
  
  var p = Object.create(N);
  
  p.a = 4;
  console.log(p.m());
 