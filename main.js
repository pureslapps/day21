// const BASEURL = 'yearup.com' //BASEURL website
//
// //ENDPOINTS
// const endpoints = [
//   'student/all',
//   'students/:id',
//   '/classes/all',
//   'classes/:id'
// ]
//
// request = 'yearup.com/students/'
//
// class Student {
//   constructor(name, ssn, id){
//     this.name = name
//     this.ssn = ssn
//     this.id = id
//   }
// }
//
// class Classroom {
//   constructor(class_id) {
//     this.class_id = class_id
//   }
// }
//

requestAPI = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            user = {
                name: data['name'],
                username: data['login'],
                image: data['avatar_url'],
                repo_count: data['public_repos'],
                followers: data['followers']
            }
        }
    };
    xhttp.open("GET", " https://api.github.com/users/defunkt", true);
    xhttp.send();
}

requestAPI()

displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let img = document.createElement('img')

    h1.innerText = user['name']
    p1.innerText = user['followers']
    img.setAttribute('src', user['image'])
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(img)
    document.body.appendChild(cont)
}
