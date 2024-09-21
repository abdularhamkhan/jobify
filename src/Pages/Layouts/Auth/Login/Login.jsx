import AuthLayout from '../AuthLayout'
import LoginForm from './LoginForm'

const Login = () => {
    return (

        <AuthLayout>
            <div className='flex flex-col items-center mt-48'>
                <LoginForm />
            </div>
        </AuthLayout>
    )
}

export default Login