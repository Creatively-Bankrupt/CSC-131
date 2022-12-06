import React, {useState} from 'react'

export default function ImageUpload()
{
const [image, setImage] = useState('')
const [loading, setLoading] = useState(false)

const UploadImage = async e => {
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'croisd')
  setLoading(true)
  const res = await fetch(
    'http://api.cloudinary.com/v1_1/dz5pkqivr/image/upload',
    {
      method: 'POST',
      body: data
    }
    )
    const file = await res.json
    setImage(file.secure_url)
    setLoading(false)
}
return (
  <div className = "Upload Image">
    <h1>Upload</h1>
    <input 
    type = "file"
     name = "file"
     placeholder = "Upload an image"
     onChange={UploadImage}
    />
    {loading ? (
      <h3>Loading...</h3>
    ): (
      <img src={image} style={{width: '200px'}} />
    )}
  </div>
  )
}
