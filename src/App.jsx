import Header from "./componentes/Header"
import './global.css'
import styles from './App.module.css'
import Sidebar from "./componentes/SideBar"
import Post from "./componentes/Post"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </div >
  )
}

export default App
