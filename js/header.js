document.getElementById("breadcrumb__title").innerText = document.title

function searchInput(){
    
    let productNeedToSearch = document.getElementById('searchProduct').value
    let linkRestFulAPI = "http://127.0.0.1:8000/getProduct{product_name}?"

    fetch(linkRestFulAPI + new URLSearchParams({productName : productNeedToSearch}))
    .then(function(respone){return respone.json()})
    .then(json=>{
        if ( json['Data'] == "Not Found") {
            document.getElementsByClassName('search__result')[0].innerText = "Result is : Not Found Product"
        }
        else {
            document.getElementsByClassName('search__result')[0].innerText = "Result is : Found 1 Product"
        }
    })
    .catch(err=>{alert('Có lỗi với server, không sử dụng tính năng search hiện giờ được, vui lòng liên hệ admin trang web')})

    }

function focusSearchInput() {
    document.getElementsByClassName('search__result')[0].style.display = "block"
}

function blurSearchInput() {
    document.getElementsByClassName('search__result')[0].style.display = "none"
}