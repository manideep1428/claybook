"use client"
import { Header } from "@/components/Header"
import { LeftSidebar } from "@/components/LeftSidebar"
import { PostFeed } from "@/components/PostFeed"
import { RightSidebar } from "@/components/RightSidebar"

export default function ClayWorld() {
  return (
    <div className="min-h-screen bg-[#f8e9d6] font-['Nunito',_sans-serif] text-[#4a3c31]">
      {/* Clay Texture Background */}
      <div className="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhlOWQ2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlYmQwYjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

      {/* Navigation Bar */}
      <Header />

      <main className="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
        {/* Sidebar - Left */}
        <LeftSidebar />

        {/* Main Content - Middle */}
        <PostFeed />

        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  )
}