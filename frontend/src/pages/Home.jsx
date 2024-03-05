import { useState } from "react"
import { getImageUrl, uploadImage } from "../api/userApi"


function Home() {

  const [image,setImage] = useState("")
  const [outPut,setOutPut] = useState()

  const submitHndler = async ()=>{

    const {url} = await getImageUrl()
    await uploadImage(url,image)
    setOutPut(url.split('?')[0])

  }

  return (
    <div>
      <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      <button onClick={()=>submitHndler()}>submit</button>
      <img style={{width:'500px',height:'300px'}} src={`${outPut}`} alt="image" />
    </div>
  )
}

export default Home
