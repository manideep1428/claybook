import { BirthdaySection } from "./BirthdaySection"
import { EventsSection } from "./EventsSection"
import { PopularTunes } from "./PopularTunes"

export function RightSidebar() {
  return (
    <div className="hidden md:block md:col-span-1">
      <div className="sticky top-20 space-y-6">
        <BirthdaySection />
        <EventsSection />
        <PopularTunes />
      </div>
    </div>
  )
}
