"use client"
import { Header } from "@/components/Header"
import { LeftSidebar } from "@/components/LeftSidebar"
import { RightSidebar } from "@/components/RightSidebar"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GamesPage() {
 const games = [
   { id: 1, name: "Clay Match", description: "Match similar shapes." },
   { id: 2, name: "Sculpt & Guess", description: "Guess the clay model." },
   { id: 3, name: "Clay Puzzle", description: "Solve the clay puzzle." },
   { id: 4, name: "Memory Tiles", description: "Memorize the clay tiles." },
 ]

 return (
   <div className="min-h-screen bg-[#f8e9d6] font-['Nunito',_sans-serif] text-[#4a3c31]">
     <div className="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhlOWQ2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlYmQwYjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

     <Header />
     <main className="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
       <LeftSidebar />
       <div className="md:col-span-2">
         <h1 className="mb-4 text-2xl font-bold">Games</h1>
         <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
           {games.map((game) => (
             <Card key={game.id} className="bg-white p-4">
               <CardTitle className="mb-2">{game.name}</CardTitle>
               <CardContent className="p-0">
                 <p className="text-sm text-gray-600">{game.description}</p>
                 <Button className="mt-2">Play</Button>
               </CardContent>
             </Card>
           ))}
         </div>
       </div>
       <RightSidebar />
     </main>
   </div>
 )
}