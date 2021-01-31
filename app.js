const BackgroundApp = document;
const Container = BackgroundApp.querySelector('.container');
const Clickbutton = BackgroundApp.querySelector('#Btn');
const colorCodes = ['#c7bb10','#c76810','#5e0165','#8353cf','#41f7fc','#a31004'];

Clickbutton.addEventListener('click',()=>{
    const color = colorCodes[Math.floor(Math.random() * colorCodes.length)];
    Container.style.backgroundColor = color;
    console.log(color);
});
