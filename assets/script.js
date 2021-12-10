fetch('https://api.spotify.com/v1/playlists/1HxsDDgZLrkbh2VxNVxU4F?si=322382cc7b9f48da&nd=1', {
    method:'GET', headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ "BQAO8DsVLQI-2T1kkcMFEOGHi0vHA93EqtnYW8Y_gDOPwDvpRrKM_dzhyJ3Z1MxQaYi-KHre_V2KSl9e9fwMebfKHO-w-REZdr3bxzb7KUfyDNNFnA9U3-yqcY4ZnaKtR-WM5WCRiAkbB_H4NrD3Cf-P6Le7yCH-","token_type":"Bearer","expires_in":3600,"refresh_token":"AQBiLGoZVb-819I1U0KOxChYeLj23xmXoMUI-UWiRLqMN7g8TAf7UpLribonQBHUwiT-Yto2SNJjlw7EnIWNzLxlgr2n-pqqiCEP9NbvgbhECqd-EbItgb2Sk8ADwN9oejo","scope":"playlist-read-private"
    }
    })
.then((response) => {
    console.log(response.json().then(
        (data)=>{console.log(data)}
    ));
    
    });

 // var clientID= "89bd617b2a3b4d1783f6fb4c971aea0d"
// // var clientSecretID="8f7fac8da53b423cace0d4727abf95a7"
// var token = "access_token":"BQAO8DsVLQI-2T1kkcMFEOGHi0vHA93EqtnYW8Y_gDOPwDvpRrKM_dzhyJ3Z1MxQaYi-KHre_V2KSl9e9fwMebfKHO-w-REZdr3bxzb7KUfyDNNFnA9U3-yqcY4ZnaKtR-WM5WCRiAkbB_H4NrD3Cf-P6Le7yCH-","token_type":"Bearer","expires_in":3600,"refresh_token":"AQBiLGoZVb-819I1U0KOxChYeLj23xmXoMUI-UWiRLqMN7g8TAf7UpLribonQBHUwiT-Yto2SNJjlw7EnIWNzLxlgr2n-pqqiCEP9NbvgbhECqd-EbItgb2Sk8ADwN9oejo","scope":"playlist-read-private"
// input for base 64: 89bd617b2a3b4d1783f6fb4c971aea0d:8f7fac8da53b423cace0d4727abf95a7

// 1.) Go here:
// https://accounts.spotify.com/authorize?client_id=89bd617b2a3b4d1783f6fb4c971aea0d&scope=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Fgithub.com%2FShadae96%2FGuardians-of-the-Code-Galaxy

// 2.)grab code from URL
https://github.com/Shadae96/Guardians-of-the-Code-Galaxy?code=AQD-0BpXhdfXGa268_tBMPlfZEVh_O4nqtaaHcVjiEn_kdnZu6NCHxwrF0AnCovjlyKijInPy3RcQsAWqwQW6c-cnfT978guLJqt01dIYDvUOB1ba7OMfVFZNnLoOuLgd7XfFCHRJ3anLxIz2wo2jY8us3n3zTCqCoYkb_N8Jq8r3PCrbCslvHNu1zbZKjdZZBmGuI0yO4lLLnZ2qhSvZdD7frItDebMP5TA8KEuUlkuJYM
// 3.) input code from url into code=section of curl funtion, then run curl funtion in terminal to get access code. 
//curl -H "Authorization: Basic ODliZDYxN2IyYTNiNGQxNzgzZjZmYjRjOTcxYWVhMGQ6OGY3ZmFjOGRhNTNiNDIzY2FjZTBkNDcyN2FiZjk1YTc=" -d grant_type=authorization_code -d code=AQD-0BpXhdfXGa268_tBMPlfZEVh_O4nqtaaHcVjiEn_kdnZu6NCHxwrF0AnCovjlyKijInPy3RcQsAWqwQW6c-cnfT978guLJqt01dIYDvUOB1ba7OMfVFZNnLoOuLgd7XfFCHRJ3anLxIz2wo2jY8us3n3zTCqCoYkb_N8Jq8r3PCrbCslvHNu1zbZKjdZZBmGuI0yO4lLLnZ2qhSvZdD7frItDebMP5TA8KEuUlkuJYM -d redirect_uri=https%3A%2F%2Fgithub.com%2FShadae96%2FGuardians-of-the-Code-Galaxy https://accounts.spotify.com/api/token

// 4.) put access code in fetch function