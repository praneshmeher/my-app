(function(a){
    return (function(){
      console.log(a);
      a = 23;
    })()
  })(45);