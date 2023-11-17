import { TechnologyContext } from '../../context/point-context'
import classes from './technology-image.module.scss'
import {useContext} from 'react'
interface ITechnologyImage{
    images:{
        portrait:string
        landscape:string
    }
    name:string
}
export default function TechnologyImage({images,name}:ITechnologyImage){
    const currentTechnology = useContext(TechnologyContext)
    return(<>
    {name === currentTechnology ? <>
        <img src={images.portrait}></img>
    </>:<></>}
    </>)
}