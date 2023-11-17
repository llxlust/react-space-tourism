import TechnologyImage from "../../component/technology/technology-image";
import classes from "./technology.module.scss";
import { useState } from "react";
import data from "../../local-json/data.json";
import { TechnologyContext } from "../../context/point-context";
import TechnologyNavbar from "../../component/technology/technology-navbar";
import TechnologyContent from "../../component/technology/technology";
export default function Technology() {
  const [techName, setTechName] = useState<string>("Launch vehicle");
  const [technology, setTechnology] = useState(data.technology);
  const technameHandler = (name: string) => {
    setTechName(name);
  };
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.content}>
          <div className={classes.title}>
            <span>03 </span>SPACE LAUNCH 001
          </div>
          <div className={classes.contentFlex}>
            <div className={classes.flex1}>
              <div className={classes.mixed}>
                <div>
                  {technology.map(({ name }, index) => {
                    return (
                      <>
                        <TechnologyContext.Provider value={techName}>
                          <TechnologyNavbar
                            name={name}
                            index={index}
                            technameHandler={technameHandler}
                          />
                        </TechnologyContext.Provider>
                      </>
                    );
                  })}
                </div>
                <div>
                  {technology.map(({name,description}) => {
                    return (
                      <>
                        <TechnologyContext.Provider value={techName}>
                          <TechnologyContent name={name} desciption={description}/>
                        </TechnologyContext.Provider>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={`${classes.flex1} ${classes.imageBox}`}>
              {technology.map(({ images, name }) => {
                return (
                  <>
                    <TechnologyContext.Provider value={techName}>
                      <TechnologyImage images={images} name={name} />
                    </TechnologyContext.Provider>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
