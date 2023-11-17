import { TechnologyContext } from '../../context/point-context'
import classes from './technology.module.scss'
import {useContext} from 'react'
interface ITechnologyContent{
    name:string
    desciption:string
}
export default function TechnologyContent({name,desciption}:ITechnologyContent){
    const currentTechnology = useContext(TechnologyContext)
    return(<>
        {name === currentTechnology ? <div className={classes.content}>
            <p className={classes.tech}>THE TECHNOLOGY...</p>
            <div className={classes.name}>{name}</div>
            <p className={classes.desciption}>{desciption}</p>
        </div> : <></>}
    </>)
}