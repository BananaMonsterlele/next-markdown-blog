import '../styles/globals.css'
import { useState } from 'react';
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  function handleToggleDarkMode(){
    dark ? setDark(false) : setDark (true);
    console.log(dark);
  }

  return (
    <>
      <div className={`duration-1000 ${dark ? "main-container_dark" : "main-container"}`}>
        <header>
          <div className="w-[768px] m-auto px-0 py-2.5 flex justify-between items-baseline">
            <Link href='/'>
              <a>BlogName.eth</a>
            </Link>
            <button onClick={handleToggleDarkMode} className='btn'>Theme</button>
          </div>
        </header>

        <main className='max-w-[768px] m-auto overflow-auto px-2.5 py-0'>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
