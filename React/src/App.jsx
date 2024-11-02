import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import Courses from './Courses'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element = {<Courses />} />
      </Routes>
    </Router>
  )
}

export default App
