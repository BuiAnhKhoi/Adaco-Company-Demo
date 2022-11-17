var validEmail = false
var validTelephoneNumber = false
var validName = false
var validBirthday = false
var validUserName = false
var validPassword = false
var validImage = false
var validError = ''
var baseSixFourImageString = ''
var urlRandomAvatar = ''

function checkValidEmail(para_email_str) {
    lengthEmailAddress = para_email_str.length

    if (lengthEmailAddress == 0 ) {
        validEmail = false
        validError = validError + "\nChưa nhập thông tin email."
    }
    else if(para_email_str[0] == " "|| para_email_str[lengthEmailAddress -1 ] == " ")
    {
        validEmail = false
        validError = validError +  "\nKhông được có khoảng trắng ở đầu và cuối email."
    }
    else if (lengthEmailAddress >= 3) {
        let charSymbol = para_email_str.indexOf('@')
        if ((charSymbol > 0) && (charSymbol < ( lengthEmailAddress - 2))) {validEmail = true }
        else {
            validEmail = false
            validError = validError + "\nĐịa chỉ email không phù hợp, cần xem lại."
        }
    }
    else {
        validEmail = false
        validError = validError + "\nĐịa chỉ email không phù hợp, cần xem lại."
    }
}

function checkValidNumberPhone(para_number_phone_str) {
    let lengthNumberPhone = para_number_phone_str.length

    if (lengthNumberPhone == 10) { 
        for( let indexNumberPhone = 0; indexNumberPhone < lengthNumberPhone; indexNumberPhone++) {
            if ( isNaN(para_number_phone_str[indexNumberPhone]) == true)
                { validError = validError + " \nSố điện thoại có cả chữ cái." }
            else {
                validTelephoneNumber = true
            }
        }
    }
    else if (lengthNumberPhone == 0) { validError = validError + "\nChưa nhập số điện thoại" }
    else { validError = validError + " \nSố điện thoại không hợp lệ."}
}

function checkValidNameUser(para_name_str) {
    let lengthName = para_name_str.length
    if (lengthName >= 4 ){
        if ( para_name_str[0] == " " || para_name_str[lengthName-1] == " "){
            validError = validError + '\nTên không được chứa khoảng trắng ở đầu và ở cuối.'
        }
        else {
            validName = true
        }
    }
    else if (lengthName == 0 ) { validError = validError + "\nChưa nhập tên toài khoản."}
    else {
        validError = validError + " \nTên quá ngắn, hãy đặt tên dài hơn 4 ký tự."
    }
}

function checkBirthday(para_day_str , para_month_str, para_year_str) {
    if (para_day_str == "" || para_month_str == "" || para_year_str == "") { 
        validBirthday = false
        validError = validError + " \nNgày hoặc tháng hoặc năm sinh sinh bị trống."
    }
    else {
        let birthdayNew = new Date(para_year_str + "/" + para_month_str + "/" + para_day_str )
        if ( birthdayNew.getTime().toString() != "NaN" ) {
            validBirthday = true
        }
        else {
            validError = validError + " \nNhập sai ngày tháng năm sinh."
        }
    }
}

function checkNameLogin(para_username_str) {
    let lengthLoginName = para_username_str.length

    if (lengthLoginName ==0 ) { validError = validError + " \nChưa nhập tên đăng nhập"}
    else if (lengthLoginName < 6 ) { 
        validError = validError + " \nTên đăng nhập bắt buộc phải từ 6 ký tự trở lên"
    }
    else {
        if ( para_username_str.includes(' ') == true) { 
            validError = validError + ' \nTên đăng nhâp không được chứa khoảng trắng.' }
        else if ( para_username_str[0] == " " || para_username_str[lengthLoginName-1] == " "){
            validError = validError + ' \nTên đăng nhập không được chứa khoảng trắng ở đầu và ở cuối.'
        }
        else {
            validUserName = true
        }
    }    
}

function checkPassLogin(para_pass_str, para_pass_again_str) {

    if (para_pass_str == "" || para_pass_again_str == ""){
        validError = validError + " \nChỗ nhập mật khẩu hoặc nhập lại mật khẩu đang bị trống"
    }
    else if (para_pass_str != para_pass_again_str) { 
        validError = validError + ' \nPassword nhập lại không khớp với password nhập lần đầu.'
    }
    else {
        let lengthPassword = para_pass_str.length
        let validNumberPassword = false
        let validCharacterPassword = false
        let upperCharacterPassword = false
        let symbolCharacterPassword = false
        
        for(let indexPassword = 0; indexPassword < lengthPassword ; indexPassword++)
        {
            let ASCIICharacter = para_pass_str.charCodeAt(indexPassword)

            if (ASCIICharacter >= 48 && ASCIICharacter <= 57) {validNumberPassword = true}
            else if (ASCIICharacter >= 65 && ASCIICharacter <= 90) {upperCharacterPassword = true}
            else if (ASCIICharacter >= 97 && ASCIICharacter <= 122) {validCharacterPassword = true}
            else if (ASCIICharacter == 33 || ASCIICharacter == 64 || ASCIICharacter == 35 || ASCIICharacter == 37 ||  ASCIICharacter == 36 || ASCIICharacter == 38){
                // ! @ # $ % &
                symbolCharacterPassword = true
            }
            else {validError = validError + ' \nPassword phải chứa các ký tự hoa, thường số và ký tự đặt biệt ( !, @, #, $, %, &).'}
        }

        if ( validNumberPassword == true && validCharacterPassword == true && upperCharacterPassword == true &&  symbolCharacterPassword == true) { 
            validPassword = true 
        }
        else if ( validNumberPassword = false ) { 
            validError = validError + ' \nMât khẩu phải có số.'
        }
        else if ( validCharacterPassword = false ) { 
            validError = validError + ' \nMât khẩu phải có chữ thường.'
        }
        else if ( upperCharacterPassword = false ) { 
            validError = validError + ' \nMât khẩu phải có chữ hoa.'
        }
        else if ( symbolCharacterPassword = false ) { 
            validError = validError + ' \nMât khẩu phải có các ký tự đặt biệt ( !, @, #, $, %, & )'}
    }
}

function checkValidAvatar(para_img_str){
    if( para_img_str == "" ) { validError = validError + ' \nChưa chọn avatar'}
    else{ validImage = true }
}

function uploadAvatar() {
    let clickInputTag = document.getElementById('input__avatar')
    clickInputTag.click()
    // console.log(document.getElementById('input__avatar')[0])
}

function uploadImage(element) {
    urlRandomAvatar = ''
    let validImage = true
    let imageFile = element.files[0]

    if ( imageFile.name.endsWith(".png") !=  true && imageFile.name.endsWith(".jpg") != true ) {
        validImage = false
        alert('Avatar phải là ảnh có định dạng png hay jpg')
    }
    else {
        if ( (imageFile.size / (1024 * 1024)) > 2){
            validImage = false
            alert('Ảnh file có kích thước nhỏ hơn 2mb')
            console.log(validError)
        }
        else {
            if (validImage == true) {
                var reader = new FileReader()
                reader.onloadend = function() {
                    baseSixFourImageString =  reader.result
                    document.getElementById('avatar__account').src = window.URL.createObjectURL(imageFile)
                    document.getElementById('avatar__account').style.display = "block"
                }   
                reader.readAsDataURL(imageFile)
            }
        }
    }
}

function randomAvatar() {
    baseSixFourImageString = ''
    let numberImageRandomStore = 4
    let pathOfImage = document.getElementById('avatar__account').src
    let randomNumber;

    if (pathOfImage.indexOf('RandomAvatarAccount') == -1) {
        randomNumber = ((Math.floor(Math.random()* numberImageRandomStore))+1 )
        document.getElementById('avatar__account').src = "../assets/images/RandomAvatarAccount/Random_" + randomNumber.toString() + ".JPG"
        document.getElementById('avatar__account').style.display = "block"
        urlRandomAvatar = "../assets/images/RandomAvatarAccount/Random_" + randomNumber.toString() + ".JPG"
    }
    else {
        let NumberImageRandomShow = parseInt(pathOfImage.replace('.JPG','').slice(-1))
        randomNumber = ((Math.floor(Math.random()* numberImageRandomStore))+1 )
        
        while( NumberImageRandomShow == randomNumber ) { 
            randomNumber = ((Math.floor(Math.random()* numberImageRandomStore))+1 ) 
        }

        document.getElementById('avatar__account').src = "../assets/images/RandomAvatarAccount/Random_" + randomNumber.toString() + ".JPG"
        document.getElementById('avatar__account').style.display = "block"
        urlRandomAvatar = "../assets/images/RandomAvatarAccount/Random_" + randomNumber.toString() + ".JPG"
    }
}

function seePassword() {
    let typeOfInput = document.getElementById('input__password').type
    
    if (typeOfInput == "password"){
        document.getElementById('see__password').innerText = "Ẩn mật khẩu"
        document.getElementById('input__password').type = "text"
    }
    else if (typeOfInput == "text"){
        document.getElementById('see__password').innerText = "Xem mật khẩu"
        document.getElementById('input__password').type = "password"
    }
}

function seeAgainPassword(){
    let typeOfInput = document.getElementById('input__password__again').type
    
    if (typeOfInput == "password"){
        document.getElementById('see__Againpassword').innerText = "Ẩn mật khẩu"
        document.getElementById('input__password__again').type = "text"
    }
    else if (typeOfInput == "text"){
        document.getElementById('see__Againpassword').innerText = "Xem mật khẩu"
        document.getElementById('input__password__again').type = "password"
    }
}

function createNewAccount() {
    let EmailNewAccount = document.getElementById('input__email').value
    let NumberPhoneNewAccount = document.getElementById('input__telephoneNumber').value
    let NameNewAccount = document.getElementById('input__name').value
    let DayBornNewAccount = document.getElementById('input__days').value
    let MonthBornNewAccount = document.getElementById('input__months').value
    let YearBornNewAccount = document.getElementById('input__years').value
    let LoginNameNewAccount = document.getElementById('input__username').value
    let PasswordNewAccount = document.getElementById('input__password').value
    let PasswordNewAccountAgain = document.getElementById('input__password__again').value
    let AvatarNewAccount = document.getElementById('avatar__account')

    validError  = ""
    
    checkValidEmail(EmailNewAccount)
    checkValidNumberPhone(NumberPhoneNewAccount)
    checkValidNameUser(NameNewAccount)
    checkBirthday(DayBornNewAccount, MonthBornNewAccount, YearBornNewAccount)
    checkNameLogin(LoginNameNewAccount)
    checkPassLogin(PasswordNewAccount, PasswordNewAccountAgain)
    checkValidAvatar(AvatarNewAccount.style.display)

    // console.log(validEmail)
    // console.log(validTelephoneNumber)
    // console.log(validName)
    // console.log(validBirthday)
    // console.log(validUserName)
    // console.log(validPassword)
    // console.log(validImage)

    if (validEmail == true && validTelephoneNumber == true && validName == true && validBirthday == true && validUserName == true && validPassword == true && validImage == true) {

        let URLImageNewAccountTemp = ''
        if ( urlRandomAvatar != "" ) { URLImageNewAccountTemp = urlRandomAvatar }
        else if ( baseSixFourImageString != "" ) { URLImageNewAccountTemp = baseSixFourImageString }

        // Send Data to server
        let linkRestFulAPI = "http://127.0.0.1:8000/createAccount"
        dataSend = { "userNameCreateAccount": LoginNameNewAccount,
                        "PasswordCreateAccount" : PasswordNewAccount,
                        "EmailCreateAccount" : EmailNewAccount,
                        "NameCreateAccount" : NameNewAccount,
                        "BirthdayCreateAccount" : DayBornNewAccount + "/" + MonthBornNewAccount + "/" + YearBornNewAccount,
                        "TelephoneNumberCreateAccount" : NumberPhoneNewAccount,
                        "AvatarCreateAccount": URLImageNewAccountTemp
                    }

        fetch(linkRestFulAPI,{
            method:'POST',
            headers:{ 'Accept':'application/json', 'Content-type': 'application/json'},
            body: JSON.stringify(dataSend)})
            .then(respone=>respone.json())
            .then(json=> {
                    if (json['Data'] == "Create Successful"){
                        alert('Tạo toài khoản thành công')  
                    }
                    else {
                        let lengthJsonReturn = json['Data'].length
                        let strAlert = ''
                        for (let indexTemp = 0 ; indexTemp < lengthJsonReturn; indexTemp ++){
                            if (json['Data'][indexTemp] == "Duplicate Login Name"){
                                strAlert = strAlert + ' Tên đăng nhập đã tồn tại trong hệ thống.'
                            }
                            else if (json['Data'][indexTemp] == "Duplicate Email Address"){
                                strAlert = strAlert + ' Địa chỉ email đã tồn tại trong hệ thống.'
                            }
                            else if (json['Data'][indexTemp] == "Duplicate Telephone Number") {
                                strAlert = strAlert + ' Số điện thoại đã tồn tại trong hệ thống.'
                            }
                        }
                        console.log(strAlert)
                        alert('Tạo toài khoản không thành công. ' + strAlert)
                    }
                })
            .catch(err => {alert('Có lỗi xảy ra với server, Tạo toài khoản sau')
        })
    }

    else {
        // document.getElementById('notice__information').innerText = ""
        document.getElementById('error__information').innerText = validError
    }
}