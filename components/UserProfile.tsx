import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfile() {
  return (
    <Link href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#6ec19e] transition-colors">
      <Avatar className="h-10 w-10 border-4 border-[#4a8c70] clay-avatar">
        <AvatarImage src="/avator.svg" alt="User" />
        <AvatarFallback className="bg-[#f8c156]">CP</AvatarFallback>
      </Avatar>
      <span className="font-bold text-white">Clay Person</span>
    </Link>
  )
}
