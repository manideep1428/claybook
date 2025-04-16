import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BirthdaySection() {
  return (
    <div className="rounded-xl bg-[#f27d66] p-5 shadow-[0_8px_0_#c45544,0_10px_15px_rgba(0,0,0,0.2)] border-4 border-[#c45544] clay-card">
      <h3 className="mb-3 font-bold text-white">Clay Birthdays</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-12 w-12 border-4 border-[#c45544] clay-avatar">
              <AvatarImage src="/fox.svg" alt="Clay Fox" />
              <AvatarFallback className="bg-[#f8c156]">CF</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f8c156] border-2 border-[#c45544] text-xs">
              🎂
            </div>
          </div>
          <div>
            <div className="font-bold text-white">Clay Fox</div>
            <div className="text-xs text-white/80">Birthday today</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-12 w-12 border-4 border-[#c45544] clay-avatar">
              <AvatarImage src="/bear.svg" alt="Clay Bear" />
              <AvatarFallback className="bg-[#8c89cc]">CB</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f8c156] border-2 border-[#c45544] text-xs">
              🎂
            </div>
          </div>
          <div>
            <div className="font-bold text-white">Clay Bear</div>
            <div className="text-xs text-white/80">Birthday tomorrow</div>
          </div>
        </div>
      </div>
    </div>
  )
}
