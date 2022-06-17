document.querySelector('.link_catalog').onmouseover = () => {
    document.querySelector('.link_catalog svg').innerHTML = `<line y1="6" x2="26" y2="6" stroke="black" stroke-width="2"/><path d="M32 6L25.25 11.1962L25.25 0.803848L32 6Z" fill="black"/>`
}
document.querySelector('.link_catalog').onmouseout = () => {
    document.querySelector('.link_catalog svg').innerHTML = `<line y1="6" x2="18" y2="6" stroke="black" stroke-width="2"/><path d="M24 6L17.25 11.1962L17.25 0.803848L24 6Z" fill="black"/>`
}
document.querySelectorAll('.link_catalog')[1].onmouseover = () => {
    document.querySelectorAll('.link_catalog svg')[1].innerHTML = `<line y1="6" x2="26" y2="6" stroke="black" stroke-width="2"/><path d="M32 6L25.25 11.1962L25.25 0.803848L32 6Z" fill="black"/>`
}
document.querySelectorAll('.link_catalog')[1].onmouseout = () => {
    document.querySelectorAll('.link_catalog svg')[1].innerHTML = `<line y1="6" x2="18" y2="6" stroke="black" stroke-width="2"/><path d="M24 6L17.25 11.1962L17.25 0.803848L24 6Z" fill="black"/>`
}
document.querySelector('input[type="range"]').oninput = () =>{
    console.log(document.querySelector('input[type="range"]').value)
}