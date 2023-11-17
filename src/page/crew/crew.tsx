import CrewContent from "../../component/crew/crew";
import classes from "./crew.module.scss";
import { useState } from "react";
import allData from "../../local-json/data.json";
import { RoleContext } from "../../context/point-context";
import CrewImage from "../../component/crew/crew-image";
import CrewNavbar from "../../component/crew/crew-navbar";
export default function Crew() {
  const [data, setData] = useState(allData.crew);
  const [currentRole, setCurrentRole] = useState<string>("Commander");
  const roleHandler = (role:string) =>{
    setCurrentRole(role);
  }
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.content}>
          <div className={classes.title}>
            <span>02 </span>MEET YOUR CREW
          </div>
          <div className={classes.mainContent}>
            <div className={classes.flex1}>
              <div className={classes.bioBox}>
                {data.map(({ role,images,bio,name }) => {
                  return (
                    <>
                      <RoleContext.Provider value={currentRole}>
                        <CrewContent role={role} images={images} bio={bio} name={name}/>
                      </RoleContext.Provider>
                    </>
                  );
                })}
              </div>
              <div className={classes.crewNav}>
                {data.map(({ role,images,bio,name }) => {
                    return (
                      <>
                        <RoleContext.Provider value={currentRole}>
                          <CrewNavbar role={role} roleHandler={(role)=>roleHandler(role)}/>
                        </RoleContext.Provider>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className={classes.flex1}>
              <div className={classes.imageBox}>
                 {data.map(({ role,images}) => {
                  return (
                    <>
                      <RoleContext.Provider value={currentRole}>
                        <CrewImage role={role} images={images}/>
                      </RoleContext.Provider>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
