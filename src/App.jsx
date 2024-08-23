import React from 'react'
import RootLayout from './Pages/RootLayout'
import { ThemeProvider } from "../src/components/ui/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className='w-full overflow-hidden font-roboto scroll-smooth md:scroll-auto'>
        <RootLayout />
      </div>
    </ThemeProvider>
  )
}

export default App