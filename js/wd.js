/* Nav Bar Active Class */

let ul = document.querySelector('.navbar ul');
let li = document.querySelectorAll('.navbar ul li a');

li.forEach((el) => {
    el.onclick = function() {
        ul.querySelector('.show').classList.remove('show');

        el.classList.add('show')
    }
})

/* Nav Bar Active Class */


/* Portfolio  */
let portfolioBtns = document.querySelectorAll('.portfolio-catg li');
let portfolioWorks = document.querySelectorAll('.portfolio .work');

portfolioBtns.forEach((bt) => {
    bt.addEventListener('click', removeActive);
})
function removeActive () {
    portfolioBtns.forEach((bt) => {
        bt.classList.remove('active');
        this.classList.add('active');
    });
}

const portfolioFunc = e => {
    portfolioWorks.forEach(card => {
        card.classList.add('hide');
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove('hide');
        }
    })
}
portfolioBtns.forEach(btn => btn.addEventListener('click', portfolioFunc));

/* Portfolio  */

// Our Skills select
let ourSkills = document.querySelector('.skills');

window.onscroll = function () {

    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop  = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
        
        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};

/* Type Writer Name */

var Text = "Waled Elnady"
    
    i = 0;

window.addEventListener('load', function () {
    
    var mySet = setInterval(function (){
        
    document.getElementById('type-name-writer').textContent += Text[i]; 
    
    i++;
        
    if(i > Text.length -1 ) {
        clearInterval(mySet);
    }    
        
    },100)

});

/* */

var ScrollBtn = document.querySelector('.btn-scroll-top');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        ScrollBtn.classList.add('active');
    } else {
        ScrollBtn.classList.remove('active');
    }
})
