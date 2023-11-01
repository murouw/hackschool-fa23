import '@/styles/globals.css'
import NavBar from '../components/navbar-component/NavBar' 

export default function App({ Component, pageProps }) {
  return (
    <div>
    <NavBar/>
    <Component {...pageProps} />
  </div>
  ) 
  
}
