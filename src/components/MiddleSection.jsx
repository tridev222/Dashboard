import { useState } from "react"
import { Search } from "lucide-react"
import { appointments } from "../data/appointments"
import { anatomyLabels, activityData } from "../data/healthData"

//----------------------human figure image------------------------------------------------
const AnatomyImage = ({ className = "", showLabels = true }) => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => setIsLoading(false)
  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="bg-white rounded-2xl p-4 shadow-sm h-full flex items-center justify-center">
        <div className="relative">
          {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />}
          <img
            src={hasError ? "/placeholder.svg?height=400&width=300" : "/images/anatomy.png"}
            alt="Human anatomy muscular system"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-auto max-w-[380px] max-h-[330px] object-contain transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
              Failed to load image
            </div>
          )}

          {showLabels &&
            anatomyLabels.map((label) => (
              <div
                key={label.id}
                className="absolute"
                style={{
                  top: label.position.top,
                  left: label.type === "heart" ? "85%" : "-15%",
                }}
              >
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg relative ${
                    label.type === "heart" ? "bg-blue-500" : "bg-cyan-400"
                  }`}
                >
                  {label.label}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                      label.type === "heart"
                        ? "border-t-[6px] border-b-[6px] border-r-[8px] border-transparent border-r-blue-500 -left-2"
                        : "border-t-[6px] border-b-[6px] border-l-[8px] border-transparent border-l-cyan-400 -right-2"
                    }`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
//-----------------anatomy cards-------------------------------
const AnatomyCard = ({ type, date, progress, color, icon, className = "", onClick }) => (
  <div
    className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow ${className}`}
    onClick={onClick}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center space-x-2">
        <div className="text-lg">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900 text-xs">{type}</h3>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>

    <div className="space-y-1">
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all duration-300 ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  </div>
)

//-----------------------Activiy secction-----------------------------------
const Activity = ({ className = "" }) => {
  const maxValue = Math.max(...activityData.flatMap((item) => item.bars.map((bar) => bar.value)))

  return (
    <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 ${className}`}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-900">Activity</h2>
        <span className="text-xs text-gray-500">3 appointment on this week</span>
      </div>

      <div className="flex items-end justify-between space-x-2 h-16">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1 flex-1">
            <div className="w-full flex justify-center items-end space-x-0.5 h-12">
              {item.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className={`w-1.5 rounded-t transition-all duration-300 ${
                    bar.color === "bg-purple-500" ? "bg-sky-400" : bar.color
                  }`}
                  style={{
                    height: `${(bar.value / maxValue) * 100}%`,
                    minHeight: "3px",
                  }}
                ></div>
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
//------------------middle section component---------------------------------
export default function MiddleSection() {
  return (
    <div className="flex-1 bg-white h-screen flex flex-col">
      {/*--------------------- Search Bar ---------------------------------------*/}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <span className="text-xs text-gray-500">This Week</span>
        </div>

        {/*------------------Anatomy and Cards ----------------*/}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-1">
          <div className="flex items-center justify-center">
            <AnatomyImage className="h-full max-h-128" />
          </div>

          <div className="flex flex-col justify-between">
            {appointments.map((appointment) => (
              <AnatomyCard
                key={appointment.id}
                type={appointment.type}
                date={appointment.date}
                progress={appointment.progress}
                color={appointment.color}
                icon={appointment.icon}
                className="mb-2"
                onClick={() => console.log(`Clicked ${appointment.type}`)}
              />
            ))}
            <div className="text-right">
              <button className="text-blue-500 text-xs font-medium hover:text-blue-600">Details →</button>
            </div>
          </div>
        </div>

        <div className="h-32">
          <Activity className="h-full" />
        </div>
      </main>
    </div>
  )
}
