export function PostData(type, userData) {
 let BaseURL = 'http://54.164.253.71:5000/api/';
 //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
 return new Promise((resolve, reject) =>{
 fetch(BaseURL+type, {
method: 'POST',
body: JSON.stringify(userData)
})
.then((response) => response.json())
.then((res) => {
 resolve(res);
})
.catch((error) => {
 reject(error);
});
});
}
