
var modal = document.getElementById("copyright-modal");
var revisedTerms = document.getElementById("revised-terms");

// Get the button that opens the modal
var btn = document.getElementById("copyrightBtn");
var rtBtn = document.querySelector(".revisedTermsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.querySelector("span.close").onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on the button, open the modal
rtBtn.onclick = function (e) {
    e.preventDefault();
    revisedTerms.style.display = "block";
}

document.querySelector("span.close2").onclick = function () {
    revisedTerms.style.display = "none";
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
        revisedTerms.style.display = "none";
    }
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == revisedTerms) {
        revisedTerms.style.display = "none";
    }
}

// nav menu mobile screen  
if (document.documentElement.clientWidth < 800) {
    const subpageNav = document.getElementById('sub-site-nav');
    const submainmenuButton = document.getElementById('sub-menu-button');

    submainmenuButton.addEventListener('click', function () {

        document.getElementById('site-nav').classList.remove('nav-open');
        subpageNav.classList.toggle('nav-open');

    });
}


// horizontal resize of left and right navigation panels
const bar = document.querySelector('.split__bar');
const bar1 = document.querySelector('.split__bar1');
const left = document.querySelector('.side-bar');
const middle = document.querySelector('.main');

const right = document.querySelector('.right-menu');

// side panel collapse and expand buttons 
var togBtn = document.getElementById('left-close');
var togBtnRight = document.getElementById('right-close');
if (togBtn) {
    togBtn.addEventListener('click', (e) => {
        e.preventDefault();
        left.classList.toggle('close-nav');
        left.style.width = "264px";
        togBtn.classList.toggle('flip');

    });
}
if (togBtnRight) {
    togBtnRight.addEventListener('click', (e) => {
        e.preventDefault();
        right.classList.toggle('close-nav');
        right.style.width = "264px";
        togBtnRight.classList.toggle('flip');
    });

}
let mouse_is_down = false;
if (bar) {
    bar.addEventListener('mousedown', (e) => {
        mouse_is_down = true;
    })
}


document.addEventListener('mousemove', (e) => {
    if (!mouse_is_down) return;
    left.style.width = `${e.clientX}px`;
})

document.addEventListener('mouseup', () => {
    mouse_is_down = false;
})



let mouse_is_down1 = false
if (bar1) {
    bar1.addEventListener('mousedown', (e) => {
        mouse_is_down1 = true;
    })
}


document.addEventListener('mousemove', (e) => {
    if (!mouse_is_down1) return;

    right.style.width = `${window.innerWidth - e.clientX}px`;
})

document.addEventListener('mouseup', () => {
    mouse_is_down1 = false;

});



//parentDiv is our max parent selector

function getParents(el, parentSelector) {
    if (parentSelector === undefined) {
        parentSelector = document;
    } else if (el === undefined) {
        return;
    }
    var parents = [];
    var p = el.parentNode;
    while (p !== parentSelector) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    parents.push(parentSelector);
    return parents;
}



// var current = window.location.href;
var current = window.location.pathname + window.location.hash;
const allLinks = document.querySelectorAll('a.nav-list-link')
const rightLinks = document.querySelectorAll('.right-menu a.nav-list-link')


var activeLink;
var parentDiv = document.getElementById("sub-site-nav") || document.getElementById("site-nav");


for (var j = 0; j < allLinks.length; j++) {
    if (current == allLinks[j].pathname + allLinks[j].hash) {
        allLinks[j].classList.add('active')
        activeLink = allLinks[j];

    } else {
        allLinks[j].classList.remove('active')

    }
}

const parents = getParents(activeLink, parentDiv);
if (parents) {
    for (var i = 0; i < parents.length; i++) {

        if (parents[i].nodeName == 'LI') {
            parents[i].classList.add('active')
        }

    }
    activeLink.parentNode.classList.remove('active');
}
for (const item of rightLinks) {

    item.addEventListener('click', function (event) {
        //...
        event.stopPropagation();
        this.parentNode.classList.remove('active');
        for (var i = 0; i < rightLinks.length; i++) {
            rightLinks[i].classList.remove('active');
        }

        this.classList.add('active')
    })
}

