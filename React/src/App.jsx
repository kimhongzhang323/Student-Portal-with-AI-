import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import Courses from './Courses'
import Login from './Login'
import Another from './another'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element = {<Courses />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/another" element = {<Another/>} />
      </Routes>
    </Router>
  )
}

export default App
