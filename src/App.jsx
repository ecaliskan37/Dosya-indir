import { useState, useRef } from 'react'
import './styles.css'
import TopText from './components/TopText'

export default function App() {
  const [filesToUpload, setFilesToUpload] = useState([])
  const ref = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    filesToUpload.forEach((file) => console.log(file))
    ref.current.value = ''
  }

  const handleFileChange = (e) => {
    console.log(e)
    if (e.target.files) {
      setFilesToUpload([...filesToUpload, ...e.target.files])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TopText />
      <input
        ref={ref}
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
