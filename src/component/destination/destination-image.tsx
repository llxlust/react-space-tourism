import {useContext} from 'react'
import classes from './destination-image.module.scss'
import { ContentContext } from '../../context/point-context'
interface IDestinationImage{
    image:{
        png:string
        webp:string
    }
    name:string
}
export default function DestinationImage({image,name}:IDestinationImage){
    const currentContent = useContext(ContentContext)
    return(
        <>
            {name === currentContent ? <img src={image.png} className={`${classes.planet} ${classes.rotate}`}></img>:<></>}
        </>
    )
}