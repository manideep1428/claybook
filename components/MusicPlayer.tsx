import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MusicPlayer() {
  return (
    <Card className="border-4 border-[#6a67a9] rounded-xl shadow-[0_8px_0_#5d5a99,0_10px_15px_rgba(0,0,0,0.2)] overflow-hidden bg-[#8c89cc] clay-card">
      <CardHeader className="pb-2">
        <h3 className="font-bold text-white">Now Playing</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="rounded-md overflow-hidden border-4 border-[#5d5a99] clay-album-cover">
            <Image
              src="/placeholder.svg?height=56&width=56"
              alt="Album cover"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-bold text-white">Clay Dreams</div>
            <div className="text-xs text-white/80">Molded Melodies</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-[#6a67a9] rounded-full relative overflow-hidden clay-progress">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-[#f8c156]"></div>
            <div className="absolute top-[-4px] left-[calc(33%-8px)] h-6 w-6 rounded-full border-4 border-[#6a67a9] bg-[#f8c156] clay-knob"></div>
          </div>
          <div className="flex justify-between text-xs text-white/80">
            <span>1:24</span>
            <span>4:12</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full w-10 h-10 p-0 bg-[#6a67a9] hover:bg-[#5d5a99] text-white clay-button"
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="19 20 9 12 19 4 19 20"></polygon>
            <line x1="5" y1="19" x2="5" y2="5"></line>
          </svg>
        </Button>
        <Button
          variant="default"
          size="sm"
          className="rounded-full w-12 h-12 p-0 bg-[#f8c156] hover:bg-[#f9cc75] text-[#4a3c31] border-4 border-[#d9a84a] clay-button"
        >
          <span className="sr-only">Play</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full w-10 h-10 p-0 bg-[#6a67a9] hover:bg-[#5d5a99] text-white clay-button"
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </Button>
      </CardFooter>
    </Card>
  )
}
