import { useNavigate } from "react-router-dom"
export default function ReturnButton() {
  const navigate = useNavigate()
  return (
    <button type="button" onClick={() => navigate(-1)} className='return-btn btn'>
      &#8592;
    </button>
  )
}
