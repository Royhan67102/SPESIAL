import {Route, Routes} from 'react-router-dom'
// import Hello from './components/Hello'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import NowPlaying from './pages/NowPlaying'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Layout from './Layout'

function App() {
  return (
  <>
  {/* <Home/> */}

  <Layout>
  <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/movie/create' element={<Create />} ></Route>
    <Route path='/movie/now' element={<NowPlaying />} ></Route>
    <Route path='/movie/popular' element={<Popular />} ></Route>
    <Route path='/movie/top' element={<TopRated />} ></Route>
  </Routes>
  </Layout>
  </>
  )
}

export default App
