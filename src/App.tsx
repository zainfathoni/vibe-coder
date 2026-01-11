import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { IdeasPage } from './pages/IdeasPage'
import { IdeaDetailPage } from './pages/IdeaDetailPage'
import { SavedPage } from './pages/SavedPage'
import { SubmitIdeaPage } from './pages/SubmitIdeaPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-3xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ideas" element={<IdeasPage />} />
            <Route path="/ideas/:id" element={<IdeaDetailPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/submit" element={<SubmitIdeaPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
