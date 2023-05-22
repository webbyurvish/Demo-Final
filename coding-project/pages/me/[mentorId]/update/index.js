import React from 'react'
import UpdateMentor from '@/src/mentors-components/UpdateMentor';
import { useRouter } from 'next/router'

export default function update() {
    const router = useRouter();
    console.log(router.query.mentorId)
    return (
        <div>
            <UpdateMentor />
        </div>
    )
}

