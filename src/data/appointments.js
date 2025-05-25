export const appointments = [
  {
    id: 1,
    type: "Lungs",
    date: "16 may 2025",
    progress: 85,
    color: "bg-red-500",
    icon: "🫁",
  },
  {
    id: 2,
    type: "Teeth",
    date: "26 apr 2025",
    progress: 60,
    color: "bg-green-500",
    icon: "🦷",
  },
  {
    id: 3,
    type: "Bone",
    date: "24 may 2025",
    progress: 40,
    color: "bg-orange-500",
    icon: "🦴",
  },
]

export const calendarData = {
  currentWeek: "October 2021",
  days: [
    { day: "Mon", date: "25", appointments: [{ time: "10:00", color: "bg-gray-300" }] },
    {
      day: "Tues",
      date: "26",
      appointments: [
        { time: "08:00", color: "bg-gray-300" },
        { time: "09:00", color: "bg-blue-600" },
      ],
    },
    {
      day: "Wed",
      date: "27",
      appointments: [
        { time: "12:00", color: "bg-gray-300" },
        { time: "13:00", color: "bg-gray-300" },
      ],
    },
    {
      day: "Thurs",
      date: "28",
      appointments: [
        { time: "10:00", color: "bg-gray-300" },
        { time: "11:00", color: "bg-sky-400" },
        { time: "16:00", color: "bg-gray-300" },
      ],
    },
    {
      day: "Fri",
      date: "29",
      appointments: [
        { time: "12:00", color: "bg-sky-300" },
        { time: "14:00", color: "bg-gray-300" },
        { time: "15:00", color: "bg-gray-300" },
      ],
    },
    {
      day: "Sat",
      date: "30",
      appointments: [
        { time: "09:00", color: "bg-sky-300" },
        { time: "14:00", color: "bg-gray-300" },
        { time: "15:00", color: "bg-gray-300" },
      ],
    },
    {
      day: "Sun",
      date: "31",
      appointments: [
        { time: "10:00", color: "bg-gray-300" },
        { time: "11:00", color: "bg-gray-300" },
      ],
    },
  ],
  featuredAppointments: [
    {
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      color: "bg-blue-600",
      textColor: "text-white",
      icon: "🦷",
    },
    {
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djones",
      color: "bg-sky-100",
      textColor: "text-gray-700",
      icon: "🏃",
    },
  ],
  upcomingSchedule: [
    {
      day: "Thursday",
      appointments: [
        { title: "Health checkup complete", time: "11:00 AM", icon: "🏥", color: "bg-sky-100" },
        { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️", color: "bg-sky-100" },
      ],
    },
    {
      day: "Saturday",
      appointments: [
        { title: "Cardiologist", time: "12:00 AM", icon: "❤️", color: "bg-sky-100" },
        { title: "Neurologist", time: "16:00 PM", icon: "🧠", color: "bg-sky-100" },
      ],
    },
  ],
}
