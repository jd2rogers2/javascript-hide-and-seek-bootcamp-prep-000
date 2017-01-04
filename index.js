function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var temp = document.querySelector('#grand-node')
  while (temp.children) {
    temp = temp.children;
  }
  return temp["0"];
}

function increaseRankBy(num){
  var ranked_lists = document.querySelectorAll('.ranked-list');
  for (let x = 0; x < ranked_lists.length; x++){
    var this_list = ranked_lists[x].children;
    for (let i = 0; i < this_list.length; i++){
      var new_num = parseInt(this_list[i].innerHTML) + num;
      this_list[i].innerHTML = new_num
    }
  }
}