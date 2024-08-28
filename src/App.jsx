import React from 'react'
import { useRoutes } from 'react-router-dom';
import routes from './Routes/routes.js';
import { ThemeProvider } from "../src/components/ui/theme-provider";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className='w-full overflow-hidden font-roboto scroll-smooth md:scroll-auto'>
        {routing}
      </div>
    </ThemeProvider>
  )
}

export default App