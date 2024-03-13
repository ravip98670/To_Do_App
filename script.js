var input = document.getElementById('input');

add.addEventListener('click',function(){

    var parent = document.createElement('div');
    parent.setAttribute('id','para');
   

    var newElement = document.createElement('div');
    newElement.textContent = input.value;
    var newButton = document.createElement('button');
    newButton.textContent = 'delete';

    newElement.setAttribute('id','task');
    newButton.setAttribute('id','del');

    parent.appendChild(newElement);
    parent.appendChild(newButton);

    var cont = document.getElementById('new');
    cont.appendChild(parent);
    
    

});

var del = document.getElementById("new");
del.addEventListener('click',(e)=>{
    if(e){
    var rem=e.target.parentNode;
        rem.remove();
    }
});



