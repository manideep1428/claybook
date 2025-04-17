import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserProfile } from "./UserProfile"
import { MusicPlayer } from "./MusicPlayer"

export function LeftSidebar() {
  return (
    <div className="hidden md:block md:col-span-1">
      <div className="sticky top-20 space-y-6">
        <div className="rounded-xl bg-[#5dae8b] p-5 shadow-[0_8px_0_#4a8c70,0_10px_15px_rgba(0,0,0,0.2)] border-4 border-[#4a8c70] clay-card">
          <div className="space-y-4">
            <UserProfile />
            <Link href="/friends" className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#6ec19e] transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6ec19e] border-4 border-[#4a8c70] text-white">
                👥
              </span>
              <span className="text-white">Friends</span>
            </Link>
            <Link href="/photos" className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#6ec19e] transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6ec19e] border-4 border-[#4a8c70] text-white">
                🖼️
              </span>
              <span className="text-white">Photos</span>
            </Link>
            <Link href="/events" className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#6ec19e] transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6ec19e] border-4 border-[#4a8c70] text-white">
                📆
              </span>
              <span className="text-white">Events</span>
            </Link>
            <Link href="/games" className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#6ec19e] transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6ec19e] border-4 border-[#4a8c70] text-white">
                🎮
              </span>
              <span className="text-white">Games</span>
            </Link>
            <Link href="/saved" className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#6ec19e] transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6ec19e] border-4 border-[#4a8c70] text-white">
                📁
              </span>
              <span className="text-white">Saved</span>
            </Link>
          </div>
        </div>

        <MusicPlayer />
      </div>
    </div>
  )
}
