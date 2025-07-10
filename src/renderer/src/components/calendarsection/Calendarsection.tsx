import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './custom-calendar.css'


type ValuePiece = Date | null
type CalendarValue = Date | [ValuePiece, ValuePiece] | null

const CalendarDechets = () => {
  const [date, setDate] = useState<CalendarValue>(new Date())

  const dechetsParJour: Record<string, number> = {
    '2025-07-01': 15,
    '2025-07-03': 28,
    '2025-07-05': 42,
    '2025-07-08': 10,
    '2025-07-10': 0
  }
const tileContent = ({ date, view }: { date: Date; view: string }) => {
  if (view === 'month') {
    const key = date.toISOString().split('T')[0]
    const total = dechetsParJour[key]

    if (total !== undefined && total > 0) {
      return (
        <div className="relative group w-full h-full">
          {/* Point vert */}
          <div className="absolute top-[-1rem] right-1 w-2.5 h-2.5 bg-green-600 rounded-full"></div>

          {/* Tooltip au hover */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
            {total} 
          </div>
        </div>
      )
    }
  }
  return null
}

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full mt-10">
      <h2 className="text-2xl font-bold mb-6 text-[#2F855A]">
        Déchets collectés par jour (Calendrier)
      </h2>

      <div className="w-full">
        <Calendar
          onChange={setDate}
          value={date}
          tileContent={tileContent}
          className="w-full react-calendar" // Ajoute cette classe pour personnaliser en CSS aussi
        />
      </div>
    </div>
  )
}

export default CalendarDechets
