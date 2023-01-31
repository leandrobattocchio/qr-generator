import env from "react-dotenv"
import axios from 'axios'
import { useState } from "react"

const App = () => {

  const [texto, setTexto] = useState('')
  const [image, setImage] = useState(`${env.URL}Hello world&size=115x115`)
  

  const generateQr = (e) => {
    e.preventDefault()
    setImage(`${env.URL}${texto}&size=115x115`)
    setTexto('')
  }

  return (
    <>
      <h1 id="title">Enter what do you want to convert into a QR code! </h1>
      <div className="qr-input">
        <form onSubmit={generateQr}>
          <input type="text" placeholder="Enter your url to generate a QR-CODE..." value={texto} onChange={({ target }) => setTexto(target.value)} />
          <button>Generar</button>
        </form>
      </div>
      <div className="qr-container">
        <div className="qr">
          <img id="qr-image" src={image} />
          <div className="qr-text-container">
            <div className="title">QR generated</div>
            <div className="text-qr">Scan the qr bellow to view what is saying</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App