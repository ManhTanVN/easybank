(function(){

    // easy slector

    const select = (el, all=false) => {
        el = el.trim()
        if(all) {
            return document.querySelectorAll(el)
        } 
        return document.querySelector(el)
    }

    // easy onEvent

    const on = (type, el, listener, all=false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => { e.addEventListener(type, listener)
                })
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    // easy onsroll listener
    const onScroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    // =================== Start Code===============

   
    //toggle click event
    let toggle = select('.header__menu')
    let header__links = select('.header__links')
    let nav__overlay = select('.nav__overlay')
    on('click','.header__menu', function(){
        toggle.classList.toggle('active')
        header__links.classList.toggle('active')
        nav__overlay.classList.toggle('active')
    })

    // links click
    on('click','.header__links a', (e) => { 
        e.preventDefault();
        toggle.classList.remove('active')
        header__links.classList.remove('active')
        nav__overlay.classList.remove('active')
    } ,true)


    // scroll to top
    let buttonToTop = select('.scrollToTop')
    onScroll(document,() => {
        let y = window.scrollY;
        console.log(buttonToTop)
        console.log(y)
        if(y > 60) {
            buttonToTop.classList.add('active')
        }else {
            buttonToTop.classList.remove('active')
        }
    })

    on('click', '.scrollToTop', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        // window.scrollTo({top: 0, behavior: 'smooth'});
    })


})();