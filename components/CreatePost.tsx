import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardFooter } from "@/components/ui/card"

export function CreatePost() {
  return (
    <Card className="border-4 border-[#e06b53] rounded-xl shadow-[0_8px_0_#c45544,0_10px_15px_rgba(0,0,0,0.2)] bg-[#f27d66] clay-card">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-4 border-[#c45544] clay-avatar">
            <AvatarImage src="/avator.svg" alt="User" />
            <AvatarFallback className="bg-[#f8c156]">CP</AvatarFallback>
          </Avatar>
          <Input
            placeholder="What's on your clay mind?"
            className="rounded-full bg-white/90 border-4 border-[#c45544] text-[#4a3c31] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
          />
        </div>
      </CardHeader>
      <CardFooter className="border-t-4 border-[#c45544] pt-3">
        <div className="flex w-full justify-around">
          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-[#f8917d] clay-button">
            <span className="text-xl">📷</span> Photo
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-[#f8917d] clay-button">
            <span className="text-xl">🎵</span> Music
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-[#f8917d] clay-button">
            <span className="text-xl">✨</span> Magic
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
