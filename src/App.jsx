import './App.scss'
import Cards from './components/Cards/Cards'
import cardsData from './data/cardsData'

function App() {
  return (
    <div className='app'>
      <div className='title1'>Reliable, efficient delivery</div>
      <div className='title2'>Powered by Technology</div>
      <div className='subtitle'>
        Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful
      </div>

      <Cards cards={cardsData} />
    </div>
  )
}

export default App
