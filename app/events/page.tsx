"use client"
import { Header } from "@/components/Header"
import { LeftSidebar } from "@/components/LeftSidebar"
import { RightSidebar } from "@/components/RightSidebar"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const events = [
    { id: 1, title: "Clay Workshop", date: "2025-05-10" },
    { id: 2, title: "Pottery Exhibition", date: "2025-06-15" },
    { id: 3, title: "Sculpture Contest", date: "2025-07-20" },
    { id: 4, title: "Community Fair", date: "2025-08-05" },
  ]

  return (
    <div className="min-h-screen bg-[#f8e9d6] font-['Nunito',_sans-serif] text-[#4a3c31]">
      <div className="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhlOWQ2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlYmQwYjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

      <Header />
      <main className="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
        <LeftSidebar />
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Events</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {events.map((e) => (
              <Card key={e.id} className="bg-white">
                <CardHeader>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{e.date}</p>
                </CardContent>
                <CardFooter>
                  <Button>Join</Button>
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
