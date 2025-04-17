"use client"
import { Header } from "@/components/Header"
import { LeftSidebar } from "@/components/LeftSidebar"
import { RightSidebar } from "@/components/RightSidebar"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function PhotosPage() {
  const photos = [
    { id: 1, src: "/post1.svg", title: "Clay Sculpture" },
    { id: 2, src: "/post2.jpg", title: "Garden Figurine" },
    { id: 3, src: "/post1.svg", title: "Abstract Art" },
    { id: 4, src: "/post2.jpg", title: "Miniature Replica" },
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

        {/* Main Content - Photos Page */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Photos</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative">
                <img src={photo.src} alt={photo.title} className="w-full h-48 object-cover rounded-lg shadow" />
                <Button variant="outline" size="sm" className="absolute bottom-2 right-2">
                  Enlarge
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
