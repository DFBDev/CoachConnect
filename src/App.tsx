import './App.css'

function App() {

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
