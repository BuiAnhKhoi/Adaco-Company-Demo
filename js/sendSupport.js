function sendSupport() {
    nameSupport = document.getElementById('NameSupport').value
    numberPhoneSupport = document.getElementById('NumberPhoneSupport').value
    emailSupport = document.getElementById('EmailSupport').value
    contentSupport = document.getElementById('contentSupport').value
    let sendEmail = document.createElement('a')
    sendEmail.href = "https://mail.google.com/"
    sendEmail.target = '_blank'
    sendEmail.click()
    alert('Tính năng đang phát triển')
}