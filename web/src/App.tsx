interface ButtonProps{
  text?: string;
}

function Button(props: ButtonProps){
  return(
    <>
     <button className="bg-red-400 text-red-600">{props.text ?? "Default"}</button>
     {/* <button>{ `${props.text} default`}</button>  */}
    {/* <button>{ `${props.text ? props.text : "Default"}`}</button> */}
    </>
  )
}

function App() {
  return (
   <>
   <Button text="OK" />
   <Button text="Enviar" />
   <Button />
   </>
  )
}

export default App
