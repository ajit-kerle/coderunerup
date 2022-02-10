console.log("this is my tutorial ");
let mybtn = document.getElementById('mybtn');


let content = document.getElementById('content');

function getData() {
    console.log('started getdata')
    url = 'https://api.github.com/users'
    fetch(url).then((response) => {
        console.log('started first then ')
        return response.json();

    }).then((data) => {
        console.log('started second then ')
        console.log(data);
    })
}

console.log('before running getdata ')
getData()
console.log('after running getdata ')

function postData() {

    url = 'https://fakerestapi.azurewebsites.net/api/Users';
    data = '{"ID": 0,"UserName": "string","Password": "string"} '

    params = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
            },
        body: data

    }
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data))

}

postData()