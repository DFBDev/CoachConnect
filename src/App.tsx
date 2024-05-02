import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const formElement: HTMLFormElement | null = document.querySelector("#infoForm");  

    formElement?.addEventListener("submit", async (event) => {
      event.preventDefault();
    
      const data: FormData | null = new FormData(formElement);
      const urlEncoded = new URLSearchParams();
      
      urlEncoded.append("lastName", data.get("lastName")!.toString());
      urlEncoded.append("firstName", data.get("firstName")!.toString());
      urlEncoded.append("description", data.get("description")!.toString());
      
      const res = await fetch("https://ts-be.onrender.com/test/post", {method: "POST", body: urlEncoded});
      console.log(res);
    })
  }, [])

  return (
    <>
    <div id='formHeader'><h1>KWTicketSystem</h1></div>
    <form id="infoForm">
      <label htmlFor={"lastName"}>Last Name</label>
      <input type={"text"} name={"lastName"} id={'lastName'}></input>
      <label htmlFor={"firstName"}>First Name</label>
      <input type={"text"} name={"firstName"} id={'firstName'}></input>
      <label htmlFor={"description"}>Situation Description</label>
      <textarea id='description' name='description'></textarea>
      <input type={"submit"} name={"submitButton"} id={"submitButton"}></input>
    </form>
    </>
  )
}

export default App
