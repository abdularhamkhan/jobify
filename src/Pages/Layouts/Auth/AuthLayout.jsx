import NavBar from '../../Website/WebComponents/NavBar'
import auth from '../../../Assets/auth/auth1.svg'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({children}) => {
  return (
    <>

      <NavBar />
      <div className='m-12 grid grid-cols-1 md:grid-cols-2 md:place-content-around justify-center'>
        <div>{children}</div>
        <div className=''>
          <img src={auth} alt="" className='mt-8 h-[700px] w-[400px] xsm:max-md:hidden' />
        </div>
      </div>

    </>

  )
}

export default AuthLayout