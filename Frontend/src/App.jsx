import { useEffect } from 'react'

import axios from "axios"
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateQuiz from './pages/CreateQuiz'
import JoinQuiz  from './pages/JoinQuiz'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import CreateQuizPage from './pages/CreateQuizPage'
import LogOut from './components/LogOut'
import BasicInfo from './components/BasicInfo'
import QuizzesCreated from './components/QuizzesCreated'
import QuizzesJoined from './components/QuizzesJoined'

import { RequiresAuth } from './contexts/RequiresAuth'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/logout' element={<LogOut/>} />
      <Route exact path='/profile' element={<RequiresAuth><Profile/></RequiresAuth>}>
       <Route index element={<BasicInfo/>}/>
       <Route path='created-quizzes' element={<QuizzesCreated/>}/>
       <Route path='joined-quizzes' element={<QuizzesJoined/>}/>
      </Route>
      <Route exact path='/create' element={<RequiresAuth><CreateQuizPage/></RequiresAuth>} />
      <Route exact path='/play' element={<RequiresAuth><JoinQuiz /></RequiresAuth>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    
    
  )
}

export default App
