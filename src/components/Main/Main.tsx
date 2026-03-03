import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import ReactTypedPage from '../../pages/ReactTypedPage'
import ReactIcons from '../../pages/ReactIcons'

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-typed" element={<ReactTypedPage />} />
        <Route path="/react-icons" element={<ReactIcons />} />
      </Routes>
    </main>
  )
}

export default Main
