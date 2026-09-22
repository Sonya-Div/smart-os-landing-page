const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
const savedTheme = localStorage.getItem ('theme');
const appleButton = document.getElementById('apple-like');
const iconBtn = appleButton.querySelector('i');
const count = document.getElementById('apple-count');
const windowsButton = document.getElementById('windows-like');
const iconBtn2 = windowsButton.querySelector('i');
const count2 = document.getElementById('windows-count');
const androidButton = document.getElementById('android-like');
const iconBtn3= androidButton.querySelector('i');
const count3 = document.getElementById('android-count');
let counter = 0;
let counter2 = 0;
let counter3 =0;
function updateTheme () {
    if(body.classList.contains('dark-mode')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.style.color = '#ffd900ee';
    }
else{
   icon.classList.remove('fa-sun');
   icon.classList.add('fa-moon');
   themeToggle.style.color = '#ebe9dd';
}
}
if (savedTheme === 'dark'){
    body.classList.add('dark-mode');
}
updateTheme();
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateTheme();
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme','dark');
    } else {
        localStorage.setItem('theme','light');
    }
});
function handlelike (icone,currentCount,displayElement){
    if(icone.classList.contains('fa-regular')){
        icone.classList.remove('fa-regular');
        icone.classList.add('fa-solid');
        icone.style.color = 'red';
        currentCount ++ ;
    }
    else{
        icone.classList.remove('fa-solid');
        icone.classList.add('fa-regular');
        icone.style.color = '';
        currentCount -- ;
    }
    displayElement.textContent = currentCount;
    return currentCount;
};
appleButton.addEventListener('click',() => {
    counter = handlelike(iconBtn,counter,count)
});
windowsButton.addEventListener('click',() => {
   counter2 = handlelike(iconBtn2,counter2,count2)
});
androidButton.addEventListener('click',() => {
    counter3 = handlelike(iconBtn3,counter3,count3)
});