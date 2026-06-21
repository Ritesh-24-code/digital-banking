let a = Array.from(document.querySelectorAll(".navs span a "));
a.forEach(element => {
    element.classList.add("under");
});
let width = window.innerWidth;
if (width <= 1250 && width > 900) {
    let img = document.querySelector(".img_2");
    img.classList.remove("right-160");
    img.classList.add("right-150");
}
if (width <= 1100 && width > 600) {
    let img = document.querySelector(".img_2");
    img.classList.remove("right-150");
    img.classList.add("right-140");
}
if (width <= 1280) {
    let img_e = document.querySelector(".img_1");
    img_e.src = "./images/bg-intro-mobile.svg";

    let ham = document.querySelector(".close_open ")
    let open = document.querySelector(".close_open .img_open")
    open.addEventListener("click", function() {

        let navs = document.querySelector(".navs")
        navs.classList.remove("max-lg:hidden")
        navs.classList.add("animate__backInRight")
        open.classList.add("hidden")
        ham.classList.add("justify-end")
        let close = document.querySelector(".close_open .img_close")
        close.classList.remove("hidden")

    })
    let close = document.querySelector(".close_open .img_close")
    close.addEventListener("click", function() {
        let open = document.querySelector(".close_open .img_open")
        close.classList.add("hidden");
        open.classList.remove("hidden");
        let navs = document.querySelector(".navs")
        navs.classList.add("max-lg:hidden")
        navs.classList.remove("animate__backInRight")



    })




    // {
    //     let close = documnet.querySelector(".close_open .img_close")
    //     close.addEventListener("click", function() {

    //         let navs = document.querySelector(".navs")
    //         navs.classList.add("max-lg:hidden")
    //         navs.classList.remove("animate__backInRight")
    //         let open = document.querySelector(".close_open .img_open")
    //         open.classList.remove("hidden")
    //         close.classList.add("hidden")
    //     })
    // }


}