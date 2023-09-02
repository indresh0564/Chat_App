window.addEventListener('load', messageOnScreen());

function messageOnScreen(){

const token = localStorage.getItem("token")

  axios.get('http://localhost:3000/get_message', {headers: {
      Authorization : token,
    }})
      .then((response)=>{
        console.log(response);
        for (let i = 0; i < response.data.response.length; i++) {
         showOnScreen(response.data.response[i]);
      }
     })
     .catch((error)=>{
      console.log(error);
     })
}

function showOnScreen(obj) {
  try {
    let output = `<tr>
    <td>${obj.userMessage}</td>
   </tr>`;
    let t = document.getElementById("userList");
    t.innerHTML += output;
  } catch (err) {
    console.log(err);
  }
}

async function saveMessageIntoDb(event){
  try{
    event.preventDefault();
    const message = event.target.message.value;
    const token = localStorage.getItem("token");
    const obj = {
      message
    }
  
await axios.post("http://localhost:3000/message", obj , {
      headers:{ Authorization : token },
     })
  }catch(err){
   console.log(err);
  }
  
   
}