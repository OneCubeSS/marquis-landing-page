let slide = document.querySelectorAll('.gal-main')
let radio = document.querySelectorAll('.radio')
let gal1 = document.getElementById('gal1')
let gal2 = document.getElementById('gal2')
let gal3 = document.getElementById('gal3')
let gal4 = document.getElementById('gal4')
let y = slide.length;

function hide() {
	for (var i = 0; i < y ; i++) {
        radio[i].style.backgroundColor = '#fff'
		slide[i].style.display = "none";
	}
}

//starting the slide
function startSlide(){
    hide();
    radio[0].style.backgroundColor = 'var(--primary-blue)'
	slide[0].style.display = "block";
}
startSlide()

gal1.addEventListener('click', ()=>{
    hide();
    radio[0].style.backgroundColor = 'var(--primary-blue)'
	slide[0].style.display = 'block'
})

gal2.addEventListener('click', ()=>{
    hide();
    radio[1].style.backgroundColor = 'var(--primary-blue)'
	slide[1].style.display = 'block'
})

gal3.addEventListener('click', ()=>{
    hide();
    radio[2].style.backgroundColor = 'var(--primary-blue)'
	slide[2].style.display = 'block'
})

gal4.addEventListener('click', ()=>{
    hide();
    radio[3].style.backgroundColor = 'var(--primary-blue)'
	slide[3].style.display = 'block'
})
