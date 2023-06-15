import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import { useSelector } from 'react-redux'
import Users from './users'
import Rider from './rider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {token,role} = useSelector(state=> state.user)
  if(token && role == 'user'){
          return <User/>
    }else if(token && role == 'rider'){
         return <Rider/>
    }
    else{
      return (<Login/>)
     } 
 
}
