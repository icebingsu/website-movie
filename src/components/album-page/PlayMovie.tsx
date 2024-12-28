'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Play } from 'lucide-react'


function PlayMovie() {
    const router = useRouter()
    return (
                <Button className="mt-3 w-[150px] bg-[#228ee5] text-white hover:bg-[#45a4f1]"
                onClick={() => router.push('/play/phim_anime_hay')}
                >
                    <Play />
                    Xem phim
                  </Button>
    )
}

export default PlayMovie
