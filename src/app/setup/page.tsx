import { db } from '@/lib/db'
import { getInitialProfile } from '@/lib/initial-profile'
import { redirect } from 'next/navigation'
import React from 'react'
import NewServer from './components/NewServer'
import { Profile } from '@prisma/client'

const SetupPage = async () => {
    const profile = await getInitialProfile() as Profile

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    if (server) {
        return redirect(`/server/${server.id}`)
    }

    return <NewServer />
}

export default SetupPage