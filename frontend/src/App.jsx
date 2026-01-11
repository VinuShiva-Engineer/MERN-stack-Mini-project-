
import { Button,Box } from '@chakra-ui/react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import NavBar from '../components/NavBar'
import PageWrapper from '../container/AppWrapper'

function App() {

  return (
    <PageWrapper>
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/create' element={<CreatePage/>}></Route>
        </Routes>
    </PageWrapper>


  )
}

export default App
