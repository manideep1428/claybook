import { Bell, Home, MessageCircleIcon as Message, Search, Users, Menu} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function Header() {
  const [searchCount, setSearchCount] = useState(0)
  const [messageDialogOpen, setMessageDialogOpen] = useState(false)
  const [comingSoonDialogOpen, setComingSoonDialogOpen] = useState(false)

  const handleSearchClick = () => {
    setSearchCount(prevCount => prevCount + 1)
  }

  // Mock message data
  const mockMessages = [
    { id: 1, sender: "Clay Friend", avatar: "/avator.svg", message: "Hey! How's your clay model coming along?", time: "10:30 AM" },
    { id: 2, sender: "Pottery Pal", avatar: "/avator.svg", message: "Check out my new design!", time: "Yesterday" },
    { id: 3, sender: "Sculptor Pro", avatar: "/avator.svg", message: "The pottery workshop is this weekend!", time: "Monday" },
    { id: 4, sender: "Clay Artist", avatar: "/avator.svg", message: "Thanks for the tips on glazing.", time: "Last week" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#e06b53] text-white shadow-[0_8px_0_#c45544,0_10px_15px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tight">ClayPals</div>
            <div className="relative ml-4 hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-[#e06b53]" />
              <Input
                placeholder={`Search ClayPals... (${searchCount})`}
                className="w-[250px] rounded-full bg-white/90 pl-9 text-[#4a3c31] border-4 border-[#c45544] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                onClick={handleSearchClick}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-[#f27d66] clay-button"
              onClick={() => setComingSoonDialogOpen(true)}
            >
              <Home className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-[#f27d66] clay-button"
              onClick={() => setComingSoonDialogOpen(true)}
            >
              <Users className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-[#f27d66] clay-button"
              onClick={() => setMessageDialogOpen(true)}
            >
              <Message className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-[#f27d66] clay-button"
              onClick={() => setComingSoonDialogOpen(true)}
            >
              <Bell className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10 border-4 border-[#c45544] clay-avatar">
              <AvatarImage src="/avator.svg" alt="User" />
              <AvatarFallback className="bg-[#f8c156]">CP</AvatarFallback>
            </Avatar>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full hover:bg-[#f27d66] clay-button"
              onClick={() => setComingSoonDialogOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Messages Dialog */}
      <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
        <DialogContent className="sm:max-w-md bg-[#f8e9d6] border-4 border-[#c45544] shadow-[0_8px_0_#c45544,0_10px_15px_rgba(0,0,0,0.2)]">
          <DialogHeader>
            <DialogTitle className="text-[#4a3c31] text-xl font-bold">Messages</DialogTitle>
            <DialogDescription className="text-[#795c48]">
              Your recent conversations with clay friends
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 my-3">
            {mockMessages.map((msg) => (
              <div key={msg.id} className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border-2 border-[#c45544] hover:bg-white cursor-pointer transition-colors">
                <Avatar className="h-10 w-10 border-2 border-[#c45544]">
                  <AvatarImage src={msg.avatar} alt={msg.sender} />
                  <AvatarFallback className="bg-[#f8c156]">{msg.sender.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-[#4a3c31]">{msg.sender}</h4>
                    <span className="text-xs text-[#795c48]">{msg.time}</span>
                  </div>
                  <p className="text-sm text-[#4a3c31]">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
          <DialogFooter className="sm:justify-center">
            <Button type="button" variant="ghost" onClick={() => setMessageDialogOpen(false)} className="bg-[#e06b53] text-white hover:bg-[#f27d66] border-2 border-[#c45544] shadow-[0_4px_0_#c45544]">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Coming Soon Dialog */}
      <Dialog open={comingSoonDialogOpen} onOpenChange={setComingSoonDialogOpen}>
        <DialogContent className="sm:max-w-md bg-[#f8e9d6] border-4 border-[#c45544] shadow-[0_8px_0_#c45544,0_10px_15px_rgba(0,0,0,0.2)]">
          <DialogHeader>
            <DialogTitle className="text-[#4a3c31] text-xl font-bold">Coming Soon!</DialogTitle>
            <DialogDescription className="text-[#795c48]">
              This feature is still being sculpted and will be available soon.  
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-6">
            <div className="w-24 h-24 bg-[#e06b53] rounded-full flex items-center justify-center text-white text-5xl border-4 border-[#c45544] shadow-[0_6px_0_#c45544]">
              🏺
            </div>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button type="button" variant="ghost" onClick={() => setComingSoonDialogOpen(false)} className="bg-[#e06b53] text-white hover:bg-[#f27d66] border-2 border-[#c45544] shadow-[0_4px_0_#c45544]">
              I'll Wait
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
