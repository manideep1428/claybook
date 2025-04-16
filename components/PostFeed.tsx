import { Post } from "./Post"
import { CreatePost } from "./CreatePost"

export function PostFeed() {
  return (
    <div className="md:col-span-2 space-y-6">
      {/* Create Post */}
      <CreatePost />

      {/* Posts */}
      <Post 
        author={{
          name: "Clay Cat",
          avatar: "/avator.svg",
          fallback: "CC"
        }}
        timePosted="2 hours ago"
        content="Just finished my latest clay sculpture! What do you think? 🎨"
        image={{
          src: "/post1.svg",
          alt: "Clay sculpture"
        }}
        musicPlayer={{
          title: "Clay Creations",
          album: "Sculpted Sounds Vol. 1",
          currentTime: "2:45",
          duration: "3:30",
          progress: 75
        }}
        likes={42}
        comments={12}
        variant="green"
      />

      <Post 
        author={{
          name: "Clay Bunny",
          avatar: "/placeholder.svg?height=48&width=48",
          fallback: "CB"
        }}
        timePosted="5 hours ago"
        content="Carrot season is here! Who wants to join me for a clay carrot party? 🥕🥕🥕"
        image={{
          src: "/post2.jpg",
          alt: "Clay carrots"
        }}
        likes={87}
        comments={24}
        variant="purple"
      />

      <Post 
        author={{
          name: "Clay Duck",
          avatar: "/placeholder.svg?height=48&width=48",
          fallback: "CD"
        }}
        timePosted="Yesterday"
        content="Saved the clay world again today! Just another day in the life of a super duck! 💪🦸‍♂️"
        image={{
          src: "/post2.jpg",
          alt: "Super clay duck"
        }}
        musicPlayer={{
          title: "Clay Hero Theme",
          album: "Heroic Clay Soundtrack",
          currentTime: "1:15",
          duration: "2:48",
          progress: 50
        }}
        likes={156}
        comments={42}
        variant="yellow"
      />
    </div>
  )
}
