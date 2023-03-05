var item = document.querySelectorAll('a');
var CurrentLocation = location.href;

for(var i = 0; i<item.length;i++){
    if(item[i].href == CurrentLocation){
        item[i].className = 'active';
    }
}