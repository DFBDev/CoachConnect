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
      urlEncoded.append("dialcount", data.get("dialcount")!.toString());
      urlEncoded.append("conversationcount", data.get("conversationcount")!.toString());
      urlEncoded.append("appointmentsset", data.get("appointmentsset")!.toString());
      urlEncoded.append("appointmentscomplete", data.get("appointmentscomplete")!.toString());
      urlEncoded.append("timestamp", data.get("timestamp")!.toString());
      
      await fetch("https://ts-be.onrender.com/actions/T2zOwRu-iji-RinOje*h", {method: "POST", body: urlEncoded});
      formElement.reset();
      submitButtonHolder!.innerHTML = "<input type=\"submit\" name=\"submitButton\" id=\"submitButton\"></input>";
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
      <label htmlFor={"dialcount"}>Dial Count</label>
      <input type={"number"} name={"dialcount"} id={'dialcount'}></input>
      <label htmlFor={"conversationcount"}>Conversation Count</label>
      <input type={"number"} name={"conversationcount"} id={'conversationcount'}></input>
      <label htmlFor={"appointmentsset"}>Appointments Set</label>
      <input type={"number"} name={"appointmentsset"} id={'appointmentsset'}></input>
      <label htmlFor={"conversationcount"}>Appointments Complete</label>
      <input type={"number"} name={"appointmentscomplete"} id={'appointmentscomplete'}></input>
      <label htmlFor={"timestamp"}>Current Date/Time</label>
      <input type={"datetime-local"} name={"timestamp"} id={'timestamp'}></input>
      <div id='submitHolder'>
        <input type={"submit"} name={"submitButton"} id={"submitButton"}></input>
      </div>
    </form>
    </>
  )
}

export default App
