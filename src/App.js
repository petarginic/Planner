import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Profile, Phonebook, CalendarPage, Reminder, Login, Associates } from './pages'

const App = () => {
   return (
      <Router>
         {/* ROUTES */}
         <div>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/phonebook" element={<Phonebook />} />
               <Route path="/login" element={<Login />} />
               <Route path="/calendar" element={<CalendarPage />} />
               <Route path="/reminder" element={<Reminder />} />
               <Route path="/associates" element={<Associates />} />
            </Routes>
         </div>
      </Router>
   )
}

export default App
