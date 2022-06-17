const header = document.querySelector(".header")
const white_img = document.querySelector("#white-img")
const blue_img = document.querySelector("#blue-img")
const navs = Array.from(document.querySelectorAll(".header__container__nav__list__list-item__link"))
const menu_line = Array.from(document.querySelectorAll(".header__container__nav__list__burger-menu__link__menu-line"))
const city_links = Array.from(document.querySelectorAll(".contacts__wrapper-up__right-container__head__navs__list__list-item__link"))
const baku = document.querySelector('#baku')
const link_baku = document.querySelector('#link-baku')
const amsterdam = document.querySelector('#amsterdam')
const link_amsterdam = document.querySelector('#link-amsterdam')
const singapore = document.querySelector('#singapore')
const link_singapore = document.querySelector('#link-singapore')




let sticky = header.offsetTop;
blue_img.style.display = "none"
window.addEventListener('scroll', () => {
    if (window.pageYOffset - 135 > sticky) {
            menu_line.forEach(item => {
            item.style.background = "blue"
            })
        header.classList.add("sticky")
        white_img.style.display = "none"
        blue_img.style.display = "block"
        navs.forEach(element => {
            element.style.color = "black"
            element.style.color = "black"
            element.addEventListener('mouseover', function() {
                element.style.color = "#FF931e";
            })
        })
        navs.forEach(element => {
            element.addEventListener('mouseout', function() {
                element.style.color = "black";
            })
        })
    } else {
        header.classList.remove("sticky");
        menu_line.forEach(item => {
            item.style.background = "white"
        })

        white_img.style.display = "block"
        blue_img.style.display = "none"
        navs.forEach(element => {
            element.style.color = "#eee"
            element.addEventListener('mouseover', function() {
                element.style.color = "#FF931e";
            })
        })

        navs.forEach(element => {
            element.addEventListener('mouseout', () => {
                element.style.color = "#eee";
            })


        })
    }
});


jQuery(document).ready(function($) {
    $('.enhance__wrapper__list__list-item__container__number').counterUp({
      delay: 10,
      time: 1000,
    });
  });


const jis_link = document.getElementById('jis_link')
const jis_text = document.getElementById('jis_text')

if (jis_link) {
    jis_link.addEventListener('mouseover', function() {
    jis_text.style.textDecoration = "underline";
})
    jis_link.addEventListener('mouseout', function() {
    jis_text.style.textDecoration = "none";
})
}





if (city_links) {
    city_links.forEach(city => {
        city.addEventListener('click', (e) => {
            let active_city = document.querySelector('.active')
            if (active_city) {
                active_city.classList.remove("active")
            }

            e.target.classList.add('active')
        })
    })

}
if (link_amsterdam) {
    link_amsterdam.addEventListener('click',()=>{
    amsterdam.classList.add('active-for-text')
    baku.classList.remove('active-for-text')
    singapore.classList.remove('active-for-text')
})
link_baku.addEventListener('click',()=>{
    baku.classList.add('active-for-text')
    amsterdam.classList.remove('active-for-text')
    singapore.classList.remove('active-for-text')
})
link_singapore.addEventListener('click',()=>{
    singapore.classList.add('active-for-text')
        baku.classList.remove('active-for-text')
    amsterdam.classList.remove('active-for-text')

})
}










const round_links = Array.from(document.querySelectorAll(".products__wrapper__rounds__item__link"))
const rounds = Array.from(document.querySelectorAll(".products__wrapper__rounds__item"))
const infos = Array.from(document.querySelectorAll(".products__wrapper__rounds__info__paragraph"))

round_links.forEach((item,index)=>{
    item.addEventListener('mouseover',(e)=>{
        for (let i = 0; i < round_links.length; i++) {
            round_links[i].style.opacity = "0.5"
            round_links[i].style.transition = "0.4s"
        }
        item.style.backgroundColor="#fff"
        item.style.color="#3595ee"
        item.style.opacity = "1"
        infos[index].classList.add("show-paragraph")     
    })
    item.addEventListener('mouseout',(e)=>{
        for (let i = 0; i < round_links.length; i++) {
            round_links[i].style.opacity = "1"
            round_links[i].style.transition = "0.4s"
        }
        item.style.backgroundColor="#3595ee"
        item.style.color="#fff"
        item.style.opacity = "1"
        infos[index].classList.remove("show-paragraph")
    })
    
})


for (let index = 0; index < rounds.length; index++) {
    round_links[index].addEventListener('mouseover', function() {
        rounds[index].style.transform = "scale(1.08)"
    })
    round_links[index].addEventListener('mouseout', function() {
        rounds[index].style.transform = "scale(1)"

    })
}


const news_link = Array.from(document.querySelectorAll(".news__wrapper__down__card__link"))
const news_image = Array.from(document.querySelectorAll(".news__wrapper__down__card__image-container__image"))
if (news_link && news_image) {
    for (let index = 0; index < rounds.length; index++) {
        if (news_link[index]) {
            news_link[index].addEventListener('mouseover', function() {
                news_image[index].style.transform = "scale(1.08)"

            })
            news_link[index].addEventListener('mouseout', function() {
                news_image[index].style.transform = "scale(1)"

            })
        }
    }
}




const header_full =document.querySelector(".header-full")
const burger_menu = document.querySelector(".header__container__nav__list__burger-menu__link")
const line_first = document.querySelector(".header__container__nav__list__burger-menu__link__menu-line--first")
const line_third = document.querySelector(".header__container__nav__list__burger-menu__link__menu-line--third")
const line_second = document.querySelector(".header__container__nav__list__burger-menu__link__menu-line--second")


if (header_full && menu_line) {
    burger_menu.addEventListener('click',()=>{
        header_full.classList.toggle("seem")

        if (header_full.classList.contains("seem")) {
            document.body.style.overflowY="hidden"
        }
        else{
            document.body.style.overflowY="unset"
        }

        
    })
}








const applyButton= Array.from(document.querySelectorAll('.apply-true'))
const inputTrue= Array.from(document.querySelectorAll('.input_true'))

if (inputTrue) {
    applyButton.forEach(item=>{
    item.addEventListener('click',()=>{
    inputTrue.forEach(inp=>{

        if (inp.value.trim()==="") {
            inp.style.borderColor= "red"
        }
        else{
            inp.style.borderColor= "rgba(255, 255, 255, 0.5)"
        }
    })
    })

})
}

const full_header_links = [...document.querySelectorAll(".header-full__wrapper__navs__list__list-item__link")]

if (full_header_links) {
    full_header_links.forEach(link=>{
    link.addEventListener('click',()=>{
        header_full.classList.toggle("seem")
    })

})
}
let btn = $('.header__container__nav__list__burger-menu__link');

btn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});


// $(document).ready(function() {
//     $(window).scroll(function() {
//         let scroll = $(window).scrollTop();
//         if (scroll > 670) {
//             $(".header__container__nav__list__list-item__link")[0].css("color", "#FF931e");
//         } else {
//             $(".header__container__nav__list__list-item__link")[0]
//             .css("color", "black");
//         }
//     })
// })