import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'

const Home = () => {
    return <section className='flex items-center gap-4 w-full'>
        <UserButton afterSignOutUrl='/' />
        <ModeToggle />
    </section>
}

export default Home