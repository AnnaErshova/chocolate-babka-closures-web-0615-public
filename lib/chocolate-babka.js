// Your counter will need to start at a number based on what is passed in. It must then return a function that, when called, will increment number that was passed in.

function counterCreator(number) {
  var starting_point = number;
  return function() {
    starting_point ++;
    return starting_point;
  };
};


function countAnnouncer(product, counter) {
  return function(){
    return ("Now serving " + product + " number " + counter() + "!");
  };
};

// 'Now serving Baked Goods number 4!'
// 'Now serving Babka number 6!'

// babkaCounter?!

