import { useState } from "react"
import Sidebar from "./components/Sidebar"
import MiddleSection from "./components/MiddleSection"
import RightSection from "./components/RightSection"
import Toast from "./components/Toast"

export default function App() {
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const showToast = (message) => {
    setToastMessage(message)
    setToastVisible(true)
  }

  const hideToast = () => {
    setToastVisible(false)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onShowToast={showToast} />
      <MiddleSection />
      <RightSection />

      <Toast message={toastMessage} isVisible={toastVisible} onClose={hideToast} />
    </div>
  )
}


