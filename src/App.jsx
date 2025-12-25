import './App.scss'
import Cards from './components/Cards/Cards'
import cardsData from './data/cardsData'

function App() {
  return (
    <main className='app'>
      <h1 className='title1'>Reliable, efficient delivery</h1>
      <h2 className='title2'>Powered by Technology</h2>
      <p className='subtitle'>
        Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful
      </p>

      <Cards cards={cardsData} />
    </main>
  )
}

export default App
