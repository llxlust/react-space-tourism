import { RoleContext } from '../../context/point-context'
import classes from './crew-navbar.module.scss'
import {useContext} from 'react'
interface ICrewNavbar{
    role:string
    roleHandler:(role:string)=>void
}
export default function CrewNavbar({role,roleHandler}:ICrewNavbar){
    const currentRole = useContext(RoleContext)
    return(<>
    <div className={classes[`${role === currentRole ? "useCircle" : "unuseCircle"}`]} onClick={()=>roleHandler(role)}></div>
    </>)
}