import Image from "next/image"
import { Heart, MessageCircleIcon as Message, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PostProps {
  author: {
    name: string;
    avatar: string;
    fallback: string;
  };
  timePosted: string;
  content: string;
  image?: {
    src: string;
    alt: string;
  };
  musicPlayer?: {
    title: string;
    album: string;
    currentTime: string;
    duration: string;
    progress: number;
  };
  likes: number;
  comments: number;
  variant?: "green" | "purple" | "yellow";
}

export function Post({
  author,
  timePosted,
  content,
  image,
  musicPlayer,
  likes,
  comments,
  variant = "green"
}: PostProps) {
  // Set colors based on variant
  const colors = {
    green: {
      bg: "bg-[#6ec19e]",
      border: "border-[#5dae8b]",
      shadow: "shadow-[0_8px_0_#4a8c70,0_10px_15px_rgba(0,0,0,0.2)]",
      avatarBorder: "border-[#4a8c70]",
      hoverBg: "hover:bg-[#7fcbab]",
      borderInner: "border-[#4a8c70]",
      musicBg: "bg-[#4a8c70]",
      musicBorder: "border-[#3d7259]",
      textColor: "text-white",
    },
    purple: {
      bg: "bg-[#8c89cc]",
      border: "border-[#7a77b9]",
      shadow: "shadow-[0_8px_0_#6a67a9,0_10px_15px_rgba(0,0,0,0.2)]",
      avatarBorder: "border-[#6a67a9]",
      hoverBg: "hover:bg-[#9996d6]",
      borderInner: "border-[#6a67a9]",
      musicBg: "bg-[#6a67a9]",
      musicBorder: "border-[#5d5a99]",
      textColor: "text-white",
    },
    yellow: {
      bg: "bg-[#f9cc75]",
      border: "border-[#f8c156]",
      shadow: "shadow-[0_8px_0_#d9a84a,0_10px_15px_rgba(0,0,0,0.2)]",
      avatarBorder: "border-[#d9a84a]",
      hoverBg: "hover:bg-[#fad694]",
      borderInner: "border-[#d9a84a]",
      musicBg: "bg-[#d9a84a]",
      musicBorder: "border-[#c0923f]",
      textColor: "text-[#4a3c31]",
    },
  }

  const color = colors[variant]

  return (
    <Card className={`border-4 ${color.border} rounded-xl ${color.shadow} overflow-hidden ${color.bg} clay-card`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Avatar className={`h-12 w-12 border-4 ${color.avatarBorder} clay-avatar`}>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="bg-[#f8c156]">{author.fallback}</AvatarFallback>
            </Avatar>
            <div>
              <div className={`font-bold ${color.textColor}`}>{author.name}</div>
              <div className={`text-xs ${color.textColor}/80`}>{timePosted}</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className={`rounded-full h-8 w-8 ${color.textColor} ${color.hoverBg}`}>
            <span className="text-xl">⋯</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className={`mb-3 ${color.textColor}`}>{content}</p>
        {image && (
          <div className={`rounded-lg overflow-hidden border-4 ${color.borderInner} shadow-[0_4px_0_#3d7259] clay-image`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="w-full object-cover"
            />
          </div>
        )}
        {musicPlayer && (
          <div className={`mt-4 ${color.musicBg} rounded-lg p-3 border-4 ${color.musicBorder} clay-music-player`}>
            <div className="flex items-center gap-2 mb-2">
              <Music className={`h-4 w-4 ${color.textColor}`} />
              <span className={`text-sm font-bold ${color.textColor}`}>Now Playing: {musicPlayer.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`text-xs ${color.textColor}/80`}>{musicPlayer.album}</div>
              <div className={`ml-auto flex items-center gap-1 text-xs ${color.textColor}/80`}>
                <span>{musicPlayer.currentTime}</span>
                <div className={`h-2 w-20 ${color.musicBorder} rounded-full relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 h-full w-[${musicPlayer.progress}%] bg-[#f8c156]`}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className={`border-t-4 ${color.borderInner} pt-3 flex flex-col`}>
        <div className="flex justify-between w-full mb-2">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2">
              <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#f27d66] border-2 ${color.borderInner} text-white text-xs`}>
                ❤️
              </div>
              <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#f8c156] border-2 ${color.borderInner} text-white text-xs`}>
                👍
              </div>
            </div>
            <span className={`text-sm ${color.textColor}/80 ml-1`}>{likes}</span>
          </div>
          <div className={`text-sm ${color.textColor}/80`}>{comments} comments</div>
        </div>
        <div className={`flex w-full justify-around border-t-4 ${color.borderInner} pt-2`}>
          <Button variant="ghost" className={`flex items-center gap-2 ${color.textColor} ${color.hoverBg} clay-button`}>
            <Heart className="h-4 w-4" /> Like
          </Button>
          <Button variant="ghost" className={`flex items-center gap-2 ${color.textColor} ${color.hoverBg} clay-button`}>
            <Message className="h-4 w-4" /> Comment
          </Button>
          <Button variant="ghost" className={`flex items-center gap-2 ${color.textColor} ${color.hoverBg} clay-button`}>
            <span className="text-xl">↪️</span> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
