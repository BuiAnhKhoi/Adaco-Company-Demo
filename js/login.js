function LoginAccount(){
    
    let linkRestFulAPI = "http://127.0.0.1:8000/loginAccount"

    let usernameLogin = document.getElementById('usernameLogin').value
    let passwordLogin = document.getElementById('passwordLogin').value
    
    dataSend = {
        "usernameLogin":usernameLogin,
        "passwordLogin":passwordLogin
    }
    console.log(dataSend)
    fetch(linkRestFulAPI, {
        method:'POST',
        headers:{ 'Accept':'application/json', 'Content-type': 'application/json'},
        body: JSON.stringify(dataSend)})
    .then(respone=>respone.json())
    .then(json=>{
        console.log(json)}
        )
    .catch(err=>{console.log(err)})
}


// function start() {
//     getAllData(function(data) { console.log(data['Data']) })
// }

// function getAllData(callback) {
//     fetch(linkRestFulAPI).then(function(respone){ return respone.json() }).then(callback)
// }

// start()

// function addNewSupport(data, callback) {
//     let options = {
//         method: 'POST',
//         body: JSON.stringify(data)
//     };

//     fetch(linkRestFulAPI,options).then(function(respone){respone.json}).then(callback)
// }