import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function PopularTunes() {
  return (
    <Card className="border-4 border-[#5dae8b] rounded-xl shadow-[0_8px_0_#4a8c70,0_10px_15px_rgba(0,0,0,0.2)] overflow-hidden bg-[#6ec19e] clay-card">
      <CardHeader className="pb-2 pt-4">
        <h3 className="font-bold text-white">Popular Clay Tunes</h3>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#4a8c70] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs border-2 border-[#3d7259]">
                1
              </div>
              <span className="text-sm text-white">Clay Dreams</span>
            </div>
            <div className="text-xs text-white/80">4:12</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#4a8c70] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs border-2 border-[#3d7259]">
                2
              </div>
              <span className="text-sm text-white">Molded Melodies</span>
            </div>
            <div className="text-xs text-white/80">3:34</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#4a8c70] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs border-2 border-[#3d7259]">
                3
              </div>
              <span className="text-sm text-white">Sculpted Sounds</span>
            </div>
            <div className="text-xs text-white/80">3:17</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#4a8c70] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs border-2 border-[#3d7259]">
                4
              </div>
              <span className="text-sm text-white">Clay Hero Theme</span>
            </div>
            <div className="text-xs text-white/80">2:48</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#4a8c70] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs border-2 border-[#3d7259]">
                5
              </div>
              <span className="text-sm text-white">Pottery Beats</span>
            </div>
            <div className="text-xs text-white/80">2:02</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
