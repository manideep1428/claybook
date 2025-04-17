"use client"
import { Header } from "@/components/Header"
import { LeftSidebar } from "@/components/LeftSidebar"
import { RightSidebar } from "@/components/RightSidebar"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SavedPage() {
  const savedItems = [
    { id: 1, title: "Handmade Vase", img: "/post1.svg" },
    { id: 2, title: "Clay Mask", img: "/post2.jpg" },
    { id: 3, title: "Miniature House", img: "/post1.svg" },
    { id: 4, title: "Animal Figurine", img: "/bear.svg" },
  ]

  return (
    <div className="min-h-screen bg-[#f8e9d6] font-['Nunito',_sans-serif] text-[#4a3c31]">
      <div className="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhlOWQ2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlYmQwYjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

      <Header />
      <main className="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
        <LeftSidebar />
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Saved</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
            {savedItems.map((item) => (
              <Card key={item.id} className="bg-white">
                <CardHeader>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <img src={item.img} alt={item.title} className="w-full h-32 object-cover rounded-md" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <RightSidebar />
      </main>
    </div>
  )
}
