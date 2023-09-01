
async function saveMessageIntoDb(event){
  event.preventDefault();
  const message = event.target.message.value;
  const token = localStorage.getItem("token");
        console.log(token);
  const obj = {
    message
  }

   await axios.post("http://localhost:3000/message", obj , {
    headers:{ Authorization : token },
   })
   .then((result)=>{
     console.log(result);
   })
   .catch((err)=>{
     console.log(err);
   })
}