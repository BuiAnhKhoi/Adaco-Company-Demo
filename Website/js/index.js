var slideshowImageIndex = 1;
var autoSlideshowImageIndex = 0;
var getCurrentWidth = screen.width;

if (getCurrentWidth < 320) {
    document.getElementsByTagName("body")[0].style.display = "none";
    alert("Màn hình quá nhỏ\nHãy sử màn hình to hơn");
}

document.getElementById("defaultOpenTab").click();

autoSlideshowShow();
slideshowShow(slideshowImageIndex);

function slideShowButton(parameterSlideshow) {
    slideshowShow(slideshowImageIndex = slideshowImageIndex + parameterSlideshow);
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

function processDev() {
    alert('Tính năng đang phát triển, quay lại sau');
}

