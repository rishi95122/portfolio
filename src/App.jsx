import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/footer/Footer'
import img from './assets/i2.jpeg'
import SecureImage from './components/SecureImage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<div>Loading....</div>}>
<div className='app'>
      <div className='img2'>

      </div>
      <div className="img">
      <SecureImage src={img }alt="Protected Image" />
  

      </div>
      
      <Home />
    
      
    </div>
    </Suspense>
    
  )
}

export default App
