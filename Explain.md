1. forEach(v, i) -> Overcome CSS property
    const slides = document.querySelctor('.slide');
    console.log(slides) // NodeList(4)

    so what is NodeList? 
    an array-like list (collection) of objects.

    It has a length property defining the number of items in the list (collection).

    NodeList items can only be accessed by their index number.

    Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.
A node list is not an array!
A node list may look like an array, but it is not.
You can loop through the node list and refer to its nodes like an array.

However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.





ex) 
.slide:nth-child(1){
  left: 0;
}
.slide:nth-child(2){
  left: 100%;
}
.slide:nth-child(3){
  left: 200%;
}
.slide:nth-child(4){
  left: 300%;
}