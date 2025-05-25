import {
  LayoutGrid,
  TrendingUp,
  Calendar,
  User,
  BarChart3,
  MessageSquare,
  Phone,
  Settings
} from "lucide-react"

export default function Sidebar({ className = "", onShowToast }) {
  const handleMenuClick = (implemented) => {
    if (!implemented) {
      onShowToast("wo rasta abhi band hai")
    }
  }

  return (
    <div className={`w-64 h-screen bg-gray-100 flex flex-col ${className}`}>
      {/*---------------------- Logo -------------------------------------------*/}
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold">
          <span className="text-cyan-500">Health</span>
          <span className="text-blue-900">care.</span>
        </h1>
      </div>

      {/*-------------------- Navigation Content ------------------------------*/}
      <div className="px-6 flex-1 space-y-6">
        {/* GENERAL Section */}
        <div>
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 text-left">GENERAL</h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => handleMenuClick(true)}
                className="inline-flex items-center px-3 py-2 text-sm rounded-md w-full text-left text-gray-900 font-medium bg-white shadow-sm"
              >
                <LayoutGrid className="w-4 h-4 mr-3 text-gray-600" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick(false)}
                className="inline-flex items-center px-3 py-2 text-sm rounded-md w-full text-left text-gray-500 hover:bg-gray-200"
              >
                <TrendingUp className="w-4 h-4 mr-3 text-gray-400" />
                History
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick(false)}
                className="inline-flex items-center px-3 py-2 text-sm rounded-md w-full text-left text-gray-500 hover:bg-gray-200"
              >
                <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                Calendar
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick(false)}
                className="inline-flex items-center px-3 py-2 text-sm rounded-md w-full text-left text-gray-500 hover:bg-gray-200"
              >
                <User className="w-4 h-4 mr-3 text-gray-400" />
                Appointments
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick(false)}
                className="inline-flex items-center px-3 py-2 text-sm rounded-md w-full text-left text-gray-500 hover:bg-gray-200"
              >
                <BarChart3 className="w-4 h-4 mr-3 text-gray-400" />
                Statistics
              </button>
            </li>
          </ul>
        </div>

        {/* TOOLS Section */}
        <div>
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 text-left">TOOLS</h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => handleMenuClick(false)}
                className="inline-flex items-center px-3 py-2 text-sm rounded-md w-full text-left text-gray-500 hover:bg-gray-200"
              >
                <MessageSquare className="w-4 h-4 mr-3 text-gray-400" />
                Chat
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick(false)}
                className="inline-flex items-center px-3 py-2 text-sm rounded-md w-full text-left text-gray-500 hover:bg-gray-200"
              >
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                Support
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* ----------------------Bottom Settings-------------------------------- */}
      <div className="px-6 pb-6">
        <button
          onClick={() => onShowToast("Menu at work, can't go ahead")}
          className="inline-flex items-center px-3 py-2 text-sm text-gray-500 hover:bg-gray-200 rounded-md w-full text-left"
        >
          <Settings className="w-4 h-4 mr-3 text-gray-400" />
          Setting
        </button>
      </div>
    </div>
  )
}
