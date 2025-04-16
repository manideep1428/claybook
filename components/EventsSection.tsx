export function EventsSection() {
  return (
    <div className="rounded-xl bg-[#8c89cc] p-5 shadow-[0_8px_0_#6a67a9,0_10px_15px_rgba(0,0,0,0.2)] border-4 border-[#6a67a9] clay-card">
      <h3 className="mb-3 font-bold text-white">Clay Events</h3>
      <div className="space-y-3">
        <div className="rounded-lg bg-[#7a77b9] p-3 border-4 border-[#6a67a9] clay-event">
          <div className="font-bold text-white">Clay Art Festival</div>
          <div className="text-xs text-white/80">Saturday at 2 PM</div>
          <div className="mt-2 text-sm text-white">Join us for the biggest clay art event of the year!</div>
        </div>
        <div className="rounded-lg bg-[#7a77b9] p-3 border-4 border-[#6a67a9] clay-event">
          <div className="font-bold text-white">Clay Animation Workshop</div>
          <div className="text-xs text-white/80">Sunday at 11 AM</div>
          <div className="mt-2 text-sm text-white">Learn how to create your own clay characters!</div>
        </div>
      </div>
    </div>
  )
}
