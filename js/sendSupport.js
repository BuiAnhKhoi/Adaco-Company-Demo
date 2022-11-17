function sendSupport() {
    let linkRestFulAPI = "http://127.0.0.1:8000/addNewSupport"

    nameSupport = document.getElementById('NameSupport').value
    numberPhoneSupport = document.getElementById('NumberPhoneSupport').value
    emailSupport = document.getElementById('EmailSupport').value
    contentSupport = document.getElementById('contentSupport').value

    let sendEmail = document.createElement('a')
    sendEmail.href = "https://mail.google.com/"
    sendEmail.target = '_blank'
    // sendEmail.click()

    let dataSend = {"Name": nameSupport,
                "Tel": numberPhoneSupport,
                "EmailSupport": emailSupport,
                "ContentSupport": contentSupport}
    console.log(dataSend)

    fetch(linkRestFulAPI,{
        method:'POST',
        headers:{ 'Accept':'application/json', 'Content-type': 'application/json'},
        body: JSON.stringify(dataSend)})
        .then(respone=>respone.json())
        .then(json=> {alert('Yêu cầu hỗ trợ đã được lưu lại')})
        .catch(err => {alert('Có lỗi xảy ra với server, gửi yêu cầu hỗ trợ sau')})
}