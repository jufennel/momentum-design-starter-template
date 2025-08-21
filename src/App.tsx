import './App.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <div>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </div>
    </>
  )
}

export default App
