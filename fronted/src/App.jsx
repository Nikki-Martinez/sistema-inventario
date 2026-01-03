import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import './styles/App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  )
}

export default App