import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const formElement: HTMLFormElement | null = document.querySelector("#infoForm");  

    formElement?.addEventListener("submit", async (event) => {
      event.preventDefault();
    
      const data: FormData | null = new FormData(formElement);
      const urlEncoded = new URLSearchParams();
      
      urlEncoded.append("test1", data.get("test1")!.toString());
      urlEncoded.append("test2", data.get("test2")!.toString());
      urlEncoded.append("test3", data.get("test3")!.toString());
      
      const res = await fetch("http://localhost:8080/test/post", {method: "POST", body: urlEncoded});
      console.log(res);
    })
  }, [])

  return (
    <>
    <form id="infoForm">
      <label htmlFor={"test1"}>Test1:</label>
      <input type={"text"} name={"test1"} id={'test1'}></input>
      <label htmlFor={"test2"}>Test2:</label>
      <input type={"text"} name={"test2"} id={'test2'}></input>
      <label htmlFor={"test3"}>Test3:</label>
      <input type={"text"} name={"test3"} id={'test3'}></input>
      <input type={"submit"} name={"submitButton"} id={"submitButton"}></input>
    </form>
    </>
  )
}

export default App
