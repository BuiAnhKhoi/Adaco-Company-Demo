

function plusUnit (){
    var currentUnit = document.getElementById("value__unit").value;
    let checkCurrentUnit = true;

    if(currentUnit.length != 0) {
        for (let i = 0; i < currentUnit.length; i++) {
            const charCodeI = currentUnit.charCodeAt(i);
            if (charCodeI <48 || charCodeI>57) {
                checkCurrentUnit = false
                alert('Chỉ nhập mỗi số, không nhập ký tự khác');
                break;
            }
        }
    };

    if (checkCurrentUnit == true) {
        currentUnit = parseInt(currentUnit);
        if (currentUnit > 98) {
            alert('Tối đa 99 sản phẩm');
        }
        else{
            document.getElementById("value__unit").value = currentUnit + 1;
        }
    }
}

function minusUnit (){
    var currentUnit = document.getElementById("value__unit").value;
    let checkCurrentUnit = true;

    if(currentUnit.length != 0) {
        for (let i = 0; i < currentUnit.length; i++) {
            const charCodeI = currentUnit.charCodeAt(i);
            if (charCodeI <48 || charCodeI>57) {
                checkCurrentUnit = false
                alert('Chỉ nhập mỗi số, không nhập ký tự khác');
                break;
            }
        }
    };

    if (checkCurrentUnit == true){
        currentUnit = parseInt(currentUnit);
        if (currentUnit < 2) {
            alert('Tối thiểu 1 sản phẩm');
        }
        else{
            document.getElementById("value__unit").value = currentUnit - 1;
        }
    }
}


function changeMainImage(image_position) {
    let idElements = "image__product" + image_position;
    let srcImageHighResolution = document.getElementById(idElements).src;
    let srcImageNormalResolution = document.getElementById("detail__image-highResolution").src;

    srcImageHighResolution = srcImageHighResolution.replace('ImageAllProducts','ImageAllProductsHighResolution',);
    srcImageHighResolution = srcImageHighResolution.replace('.png', '_high_resolution.png',);

    srcImageNormalResolution = srcImageNormalResolution.replace('ImageAllProductsHighResolution','ImageAllProducts');
    srcImageNormalResolution = srcImageNormalResolution.replace('_high_resolution', '');

    document.getElementById(idElements).src = srcImageNormalResolution;
    document.getElementById("detail__image-highResolution").src = srcImageHighResolution;
}