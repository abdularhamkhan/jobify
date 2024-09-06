import AuthLayout from "../AuthLayout"
import JobSeekerSignupForm from "./JobSeekerSignupForm"
import EmployeerSignupForm from "./EmployerSignupForm"
import { useState } from "react"
import { Button } from "@/components/ui/button"


const Signup = () => {
    const [IsEmplyer, SetIsEmployer] = useState(false);

    return (
        <AuthLayout>
            <div className="flex flex-col items-center">
                <h1>Sign Up</h1>
                <div className="m-4 flex flex-row gap-4">
                    <Button onClick={() => { SetIsEmployer(true) }}>Employee</Button>
                    <Button onClick={() => { SetIsEmployer(false) }}>Job Seeker</Button>
                    {console.log(IsEmplyer)}
                </div>
                {
                    IsEmplyer? <EmployeerSignupForm /> : <JobSeekerSignupForm />
                }

            </div>
        </AuthLayout>
    )
}

export default Signup