"use client"
import { Header } from "@/components/Header"
import { LeftSidebar } from "@/components/LeftSidebar"
import { RightSidebar } from "@/components/RightSidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function FriendsPage() {
  const friends = [
    { id: 1, name: "Alice", avatar: "/placeholder-user.jpg" },
    { id: 2, name: "Bob", avatar: "/avator.svg" },
    { id: 3, name: "Charlie", avatar: "/fox.svg" },
    { id: 4, name: "Dana", avatar: "/bear.svg" },
  ]

  return (
    <div className="min-h-screen bg-[#f8e9d6] font-['Nunito',_sans-serif] text-[#4a3c31]">
      {/* Clay Texture Background */}
      <div className="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhlOWQ2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlYmQwYjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

      {/* Navigation Bar */}
      <Header />

      <main className="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
        {/* Sidebar - Left */}
        <LeftSidebar />

        {/* Main Content - Friends Page */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Friends</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {friends.map((friend) => (
              <div key={friend.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
                <Avatar>
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <span className="mt-2 text-center font-semibold">{friend.name}</span>
                <Button variant="outline" size="sm" className="mt-2">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  )
}
