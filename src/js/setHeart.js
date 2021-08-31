let buttons = document.getElementsByClassName('carousel__item--close'); 

for(let button of buttons){
    button.addEventListener('click', function(){
        let children = button.children; 
        for(let child of children){
            if(child.classList.contains("is-active")){
                child.classList.remove('is-active'); 
            }else{
                child.classList.add('is-active'); 
            }
        }
    })
}