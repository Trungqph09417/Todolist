import React, { useEffect } from 'react'
import Headers from '../../components/Headers'
// import * as apis from "../../apis"
import {useSelector,useDispatch} from 'react-redux'
import * as actions from '../../store/actions'
import Slider from '../../components/Slider'

const Home = () => {
  const dispatch=useDispatch();
     useEffect(() => {
     dispatch(actions.getHome())
}, [])
  return (

    <div className='overflow-y-auto '>
    <div className='flex items-center px-[59px]'>
       <Headers/>
       </div>
       <div className='w-full '>
        <Slider/>
      </div> 
    </div>
     
    
  )
}

export default Home