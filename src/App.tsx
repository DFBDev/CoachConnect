import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const formElement: HTMLFormElement | null = document.querySelector("#infoForm");  
    const submitButtonHolder: HTMLElement | null = document.querySelector("#submitHolder");

    formElement?.addEventListener("submit", async (event) => {
      event.preventDefault();
      //Replacing HTML in button holder with submission animation.
      submitButtonHolder!.innerHTML = "Sending...<img id=\"loadingIcon\"src=\"./loadingIcon.svg\" width=\"20\"/>"
    
      const data: FormData | null = new FormData(formElement);
      const urlEncoded = new URLSearchParams();
      //Creating request body in url-encoded format.
      urlEncoded.append("lastName", data.get("lastName")!.toString());
      urlEncoded.append("firstName", data.get("firstName")!.toString());
      urlEncoded.append("dialcount", data.get("dialcount")!.toString());
      urlEncoded.append("conversationcount", data.get("conversationcount")!.toString());
      urlEncoded.append("appointmentsset", data.get("appointmentsset")!.toString());
      urlEncoded.append("appointmentscomplete", data.get("appointmentscomplete")!.toString());
      urlEncoded.append("timestamp", data.get("timestamp")!.toString());
      
      //Performing post request & resetting form.
      const res  = await fetch("https://ts-be.onrender.com/actions/T2zOwRu-iji-RinOje*h", {method: "POST", body: urlEncoded});
      //Resetting form if correct code returned; indicating error if not.
      if (res.status == 204) {
        formElement.reset(); 
      }
      else {
        window.alert("An error has occured on the server! Please try again later!");
      }
      submitButtonHolder!.innerHTML = "<input type=\"submit\" name=\"submitButton\" id=\"submitButton\"></input>";
    })
  }, [])

  return (
    <>
    <div id='formHeader'><h1>CoachConnect</h1></div>
    <form id="infoForm">
      <label htmlFor={"lastName"}>Last Name</label>
      <input type={"text"} name={"lastName"} id={'lastName'} required></input>
      <label htmlFor={"firstName"}>First Name</label>
      <input type={"text"} name={"firstName"} id={'firstName'} required></input>
      <label htmlFor={"dialcount"}># of Dials</label>
      <input type={"number"} name={"dialcount"} id={'dialcount'} required></input>
      <label htmlFor={"conversationcount"}># of Conversations</label>
      <input type={"number"} name={"conversationcount"} id={'conversationcount'} required></input>
      <label htmlFor={"appointmentsset"}>Appointments Set</label>
      <input type={"number"} name={"appointmentsset"} id={'appointmentsset'} required></input>
      <label htmlFor={"conversationcount"}>Appointments Complete</label>
      <input type={"number"} name={"appointmentscomplete"} id={'appointmentscomplete'} required></input>
      <label htmlFor={"timestamp"}>Current Date/Time</label>
      <input type={"datetime-local"} name={"timestamp"} id={'timestamp'} required></input>
      <div id='submitHolder'>
        <input type={"submit"} name={"submitButton"} id={"submitButton"}></input>
      </div>
    </form>
    </>
  )
}

export default App
