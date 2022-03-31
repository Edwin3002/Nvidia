import React, { useEffect, useState } from 'react'
import { getD } from '../helpers/getData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

export const Detail = () => {
  let url = 'https://figuras-edwin.herokuapp.com/figuras/'
  const navigate = useNavigate()

  const back = () =>{
    navigate('/')
  }
  const [idQ, setIdQ] = useState(1)
  const [card, setcard] = useState({
    Title: '',
    subTitle: '',
    description: '',
    speakers: '',
    industry: '',
    topic: '',
  })
  ///Me trae la data
  const getData = async (i) => {
    const data = await getD(url + i)
    console.table(data)
    const { nombre, img, resumen, precio, categoria, id } = data
    setcard({
      Title: nombre,
      subTitle: precio,
      description: resumen,
      speakers: img,
      industry: categoria,
      topic: id,
    })
  }

  useEffect(() => {
    getData(idQ)

  }, [])


  return (
    <div>
      <button className='btnBack' onClick={() => { back() }}>
        <ArrowBackIcon color="primary" />
        Back
      </button>
      <div className='card'>
        <h2>Gtc 2022</h2>
        <h4>Gtc 2022</h4>
        <p>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
        </p>
        <p>Nvidia</p>
        <p> <b>Industry:</b> All industries</p>
        <p> <b>Primary Topic:</b> Al Strategy for Business Leaders</p>
      </div>
    </div>
  )
}
