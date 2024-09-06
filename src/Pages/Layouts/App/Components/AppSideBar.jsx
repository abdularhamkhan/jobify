import React from 'react'
import { Settings, Search,FileSearch, BadgePlus, UserCheck, ListTodo } from 'lucide-react';

const AppSideBar = () => {
    return (
        <div className='h-[100vh] bg-primary text-primary-foreground w-[6%] xsm:max-md:hidden m-4 rounded-full p-4 py-[20%] flex flex-col items-center'>
            <div className='flex flex-col gap-8 flex-grow'>
                <BadgePlus size={32} />
                <FileSearch size={32} />
                <Search size={32} />
                <UserCheck size={32} />
                <ListTodo size={32} />
            </div>
            <div>
            <Settings size={32} />
            </div>
        </div>
    )
}

export default AppSideBar
