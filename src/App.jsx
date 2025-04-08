import Header from "./componentes/Header"
import './global.css'
import styles from './App.module.css'
import Sidebar from "./componentes/SideBar"
import Post from "./componentes/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/eliassouza93.png',
      name: 'Elias de souza',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852664_640.jpg',
      name: 'Julia abreu',
      role: 'Design'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

function App() {
  return (
     <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
