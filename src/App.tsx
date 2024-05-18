import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const formElement: HTMLFormElement | null = document.querySelector("#infoForm");  
    const submitButtonHolder: HTMLElement | null = document.querySelector("#submitHolder");

    formElement?.addEventListener("submit", async (event) => {
      event.preventDefault();
      submitButtonHolder!.innerHTML = "Sending...<img id=\"loadingIcon\"src=\"./loadingIcon.svg\" width=\"20\"/>"
    
      const data: FormData | null = new FormData(formElement);
      const urlEncoded = new URLSearchParams();
      
      urlEncoded.append("lastName", data.get("lastName")!.toString());
      urlEncoded.append("firstName", data.get("firstName")!.toString());
      urlEncoded.append("description", data.get("description")!.toString());
      
      const res = await fetch("https://ts-be.onrender.com/actions/T2zOwRu-iji-RinOje*h", {method: "POST", body: urlEncoded});
      formElement.reset();
      submitButtonHolder!.innerHTML = "<input type=\"submit\" name=\"submitButton\" id=\"submitButton\"></input>";
      
      console.log(res);
    })
  }, [])

  return (
    <>
    <div id='formHeader'><h1>CoachConnect</h1></div>
    <form id="infoForm">
      <label htmlFor={"lastName"}>Last Name</label>
      <input type={"text"} name={"lastName"} id={'lastName'}></input>
      <label htmlFor={"firstName"}>First Name</label>
      <input type={"text"} name={"firstName"} id={'firstName'}></input>
      <label htmlFor={"description"}>Description</label>
      <textarea id='description' name='description'></textarea>
      <div id='submitHolder'>
        <input type={"submit"} name={"submitButton"} id={"submitButton"}></input>
      </div>
    </form>
    </>
  )
}

export default App
