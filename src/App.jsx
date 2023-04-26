
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // localStorage.setItem('theme', 'dark')
  }, [])
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    console.log(('true'));
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  const darkMode = () => {
    localStorage.theme === 'dark' ?  localStorage.removeItem('theme') :localStorage.setItem('theme', 'dark') 
    
    location.reload()
  }


  return (
    <>
    <nav><ul className=' flex flex-col md:flex-row'>
      <li>
        lien 1
      </li>
      <li>
        lien 2
      </li>
      <li>
        element 5
      </li>
        
        
        </ul></nav>
    <h2>TITRE</h2>

    <button onClick={() => darkMode()} className='btn -dark'>Click me</button>
    <div className='bg-green-700 sm:bg-violet-500'>Un texte à afficher</div>
    <div className='md:hidden'>Coucou</div>
    <div className="bg-red-100 dark:bg-black">
    TESTTTT
  </div>
  <div class="bg-primary-red dark:bg-black">
    TEXTT
  </div>
  <h3>text</h3>
    </>
  )
}

export default App
