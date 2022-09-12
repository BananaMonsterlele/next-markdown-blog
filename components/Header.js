import Link from 'next/link'
import { useState, createContext } from 'react'

const Context = createContext();

function Provider (props){
  const dark = false;

  return (
    <Context.Provider value={dark}>{props.children}</Context.Provider>
  )
}

export {Context, Provider}

export default function Header() {
  const [dark, setDark] = useState(false);

  function handleToggleDarkMode(){
    dark ? setDark(false) : setDark (true);
    console.log(dark);
  }

  return (
    <header>
        <div className="container">
            <Link href='/'>
                <a>My dark mode</a>
            </Link>
            <button onClick={handleToggleDarkMode} className='dark-button'>Dark Mode</button>
        </div>
    </header>
  )
}
