const fileInput = document.getElementById("File")

function setThumbnail(event){
    // file reader 객체 생성 
    let reader = new FileReader(); 
    let button = document.querySelector('.register__item--upload');
    
    // onload는 파일이 성공적으로 load 되었을 경우 실행하는 이벤트 핸들러. 
    reader.onload = function(event){
        let img = document.querySelector('.register__thumbnail'); 
        img.setAttribute('src',event.target.result);  
    }
    reader.readAsDataURL(event.target.files[0]);
    button.setAttribute('data-label', event.target.files[0].name);
}

fileInput.addEventListener("input", setThumbnail)

