var getCurrentWidth = screen.width;

if (getCurrentWidth < 320) {
    document.getElementsByTagName("body")[0].style.display = "none";
    alert("Màn hình quá nhỏ\nHãy sử màn hình to hơn");
}