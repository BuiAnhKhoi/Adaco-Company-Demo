var slideshowImageIndex = 1;
var autoSlideshowImageIndex = 0;

autoSlideshowShow();
slideshowShow(slideshowImageIndex);

document.getElementById("defaultOpenTab").click();
 
// setInterval( ()=>{document.getElementById('localTime').innerText = new Date().toLocaleTimeString()}, 1000)
function slideShowButton(parameterSlideshow) {
    slideshowShow(slideshowImageIndex = slideshowImageIndex + parameterSlideshow);
}

function openProductPage(){
    let aTagTemp = document.createElement('a')
    aTagTemp.href = "html/product.html"
    aTagTemp.click()
}

function slideshowShow(parameterSlideshow) {
    var index;
    var getSlideshowImage = document.getElementsByClassName("slideshow__item");

    if (parameterSlideshow > getSlideshowImage.length) {
        slideshowImageIndex = 1;
    }
    if (parameterSlideshow < 1) {
        slideshowImageIndex = getSlideshowImage.length;
    }

    for (index = 0; index < getSlideshowImage.length; index++) {
        getSlideshowImage[index].style.display = "none";
    }
    getSlideshowImage[slideshowImageIndex-1].style.display = "inline-block";
}

function autoSlideshowShow() {
    var index;
    var getSlideshowImage = document.getElementsByClassName("slideshow__item");

    for (index = 0; index < getSlideshowImage.length; index++) {
        getSlideshowImage[index].style.display = "none";
    }

    autoSlideshowImageIndex++;
    if (autoSlideshowImageIndex > getSlideshowImage.length) {autoSlideshowImageIndex =1}
    getSlideshowImage[autoSlideshowImageIndex-1].style.display = "block";
    setTimeout(autoSlideshowShow,2000);
}

function aboutCompany(evt,tabName){
    var index, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("content__tab");
    for (index = 0; index < tabcontent.length; index++) {
        tabcontent[index].style.display = "none";
    }

    tablinks = document.getElementsByClassName("about__company__link");
    for (index = 0; index < tablinks.length; index++) {
        tablinks[index].className = tablinks[index].className.replace(" active","");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
