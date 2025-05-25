import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { calendarData } from "../data/appointments"

const CalendarComponent = ({ className = "" }) => {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 ${className}`}>
      {/* ----------------------------Calendar Header ------------------------------*/}
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-gray-900">{calendarData.currentWeek}</span>
        <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
          <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* ------------------------Calendar Grid----------------------------------------- */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {calendarData.days.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-xs text-gray-500 mb-2 font-medium">{day.day}</div>
            <div
              className={`text-sm font-bold mb-2 w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                day.date === "26" ? "bg-blue-600 text-white" : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              {day.date}
            </div>
            <div className="space-y-1">
              {day.appointments.slice(0, 2).map((apt, aptIndex) => (
                <div key={aptIndex} className={`text-xs px-1.5 py-1 rounded-md text-white font-medium ${apt.color}`}>
                  {apt.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/*------------------------------------- Featured Appointments----------------------------- */}
      <div className="grid grid-cols-2 gap-3">
        {calendarData.featuredAppointments.map((appointment, index) => (
          <div key={index} className={`${appointment.color} ${appointment.textColor} p-3 rounded-xl shadow-sm border`}>
            <div className="flex items-center mb-2">
              <span className="text-lg mr-2">{appointment.icon}</span>
              <div className="text-sm font-bold">{appointment.title}</div>
            </div>
            <div className="text-xs opacity-90 mb-1">{appointment.time}</div>
            <div className="text-xs opacity-80">{appointment.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const UpcomingSchedule = ({ className = "" }) => {
  return (
    <div className={`${className} p-2`}>
      <h3 className="text-lg font-bold text-gray-900 mb-2">The Upcoming Schedule</h3>
      {calendarData.upcomingSchedule.map((schedule, index) => (
        <div key={index} className="mb-1">
          <div className="text-sm text-gray-600 mb-3 font-medium">On {schedule.day}</div>
          <div className="grid grid-cols-2 gap-3">
            {schedule.appointments.map((apt, aptIndex) => (
              <div
                key={aptIndex}
                className={`p-2 rounded-xl ${apt.color} border border-sky-200 hover:shadow-sm transition-shadow`}
              >
                <div className="flex items-center mb-2">
                  <span className="text-sm mr-1">{apt.icon}</span>
                  <div className="text-sm font-semibold text-gray-800">{apt.title}</div>
                </div>
                <div className="text-xs text-gray-600 font-medium">{apt.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function RightSection () {
  return (
    <div className="flex-1 h-screen bg-gray-100 flex flex-col">
      <div className="p-4 flex justify-end items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-sm border-2 border-white"></div>
        <button className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:shadow-md transition-all duration-200 transform hover:scale-105">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 flex-1 flex flex-col space-y-4">
        {/* -----------------------Calendar Component ------------------------*/}
        <div className="flex-1">
          <CalendarComponent className="h-auto" />
        </div>

        <div className="flex-1">
          <UpcomingSchedule className="h-auto" />
        </div>
      </div>
    </div>
  )
}

