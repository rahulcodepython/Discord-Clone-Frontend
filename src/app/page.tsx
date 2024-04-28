import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

const Home = () => {
    return <section className='flex items-center gap-4 w-full'>
        <UserButton afterSignOutUrl='/' />
        <ModeToggle />
        <Link href='/setup'>
            <span className='text-blue-500'>Setup</span>
        </Link>
    </section>
}

export default Home