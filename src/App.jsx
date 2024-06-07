import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [data, setData] = useState([])

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => setData(json))
}, [])

return (
<>
  <div className="container ">
    <div className="flex flex-wrap gap-8 p-10 ">
      {data.map((item) => (
      <div key={item.id}
        className="card w-[265px] h-[380px] rounded-[15px] p-5 flex items-center flex-col gap-5 shadow-2xl shadow-[7px 14px 74px -19px rgba(212,26,26,1)]">
        <div className=" w-[180px] h-[180px] border border-[#ffffff] rounded-full overflow-hidden">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2012/02/batman_a.jpg" alt="profile picture" />
        </div>
        <div>
          <p className='text-[13px] font-jose font-bold text-[#ffffff]'>Id : {item.id}</p>
          <p className='text-[13px] font-jose font-bold text-[#ffffff] py-4'>Name : {item.name}</p>
          <p className='text-[13px] font-jose font-bold text-[#ffffff]'>Email : {item.email}</p>
        </div>
      </div>
      ))}
    </div>
  </div>
</>
)
}

export default App