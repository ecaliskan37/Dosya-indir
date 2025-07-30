import { useState } from 'react'
import './styles.css'
import TopText from './components/TopText'

export default function App() {
  const [filesToUpload, setFilesToUpload] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    filesToUpload.forEach((file) => console.log(file))
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFilesToUpload([...filesToUpload, e.target.files])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TopText />
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .pdf"
        multiple
        required
        onChange={handleFileChange}
      />
      <button>Upload </button>
    </form>
  )
}
