import { RoleContext } from '../../context/point-context'
import classes from './crew-image.module.scss'
import {useContext} from 'react'
interface ICrewImage{
    role:string
    images:{
        png:string
        webp:string
    }
}
export default function CrewImage({role,images}:ICrewImage){
    const curretRole = useContext(RoleContext)
return(<>
    {role === curretRole ? <>
        <img className={classes.img} src={images.png}></img>
    </> : <></>}
</>)
}