const imgs=document.querySelectorAll('.header-slider ul img');
const prevBtn=document.querySelector('.control-prev');
const nextBtn=document.querySelector('.control-next');

let j =0;

function changeSlide(){
    for(let i=0; i<imgs.length; i++)
    { 
       imgs[i].style.display='none';
    }
    imgs[j].style.display='block';
}
changeSlide();

prevBtn.addEventListener('click', handleprevBtn)
function handleprevBtn(){
        if(j > 0){
            j--;
        }
        else
        {
            j =imgs.length - 1;
        }
        changeSlide();
} 

nextBtn.addEventListener('click', handlenextBtn)
function handlenextBtn(){

        if(j < imgs.length-1){
            j++;
        }
        else
        {
            j =0;
        }
        changeSlide();

}

function renderAuto(){
    handlenextBtn();
}
setInterval(renderAuto,2000);

const scrollByMouse =document.querySelectorAll('products');
for(const item of scrollByMouse){
    item.addEventListener('wheel', (e) =>{
        e.preventDefault();
        item.scrollLeft +=e.deltaY;
    })
   
}

const sideBarNav=document.getElementById('side-bar-container-navigation-id');
const sideBaropen =document.getElementById('open-nav-sidebar');
const sideBarClose =document.getElementById('sidebar-nav-close');
sideBaropen.addEventListener("click", ()=>{
    sideBarNav.classList.toggle("side-bar-show");
}); 

sideBarClose.addEventListener("click",()=>{
    sideBarNav.classList.toggle("side-bar-show");
});