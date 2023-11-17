import classes from "./destinatio.module.scss";
import data from "../../local-json/data.json";
import DestinationContent from "../../component/destination/destination";
import { useState } from "react";
import {
  PointContext,
  SetNameContext,
  ContentContext,
} from "../../context/point-context";
import DestinationNavbar from "../../component/destination-nav/destination-nav";
import DestinationImage from "../../component/destination/destination-image";
export default function Destination() {
  const [destination, setDestination] = useState(data.destinations);
  const [content, setContent] = useState<string>("Moon");
  const contentHandler = (name: string) => {
    setContent(name);
  };
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.content}>
          <div className={classes.topper}>
            <div className={classes.title}>
              <span>01</span> PICK YOUR DESTINATION
            </div>
          </div>
          <div className={classes.contentBox}>
            <div className={classes.imageBox}>
              {destination.map(({ name, images }) => {
                return (
                  <ContentContext.Provider value={content}>
                    <DestinationImage image={images} name={name} />
                  </ContentContext.Provider>
                );
              })}
            </div>
           <div className={classes.textBox}>
              <div className={classes.navBox}>
                {destination.map(
                  ({ name, images, description, distance, travel }) => {
                    return (
                      <div className={classes.textContent}>
                        <div className={classes.navBox}>
                          <PointContext.Provider value={content}>
                            <SetNameContext.Provider value={contentHandler}>
                              <DestinationNavbar currentName={name} />
                            </SetNameContext.Provider>
                          </PointContext.Provider>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                {destination.map(
                    ({ name, images, description, distance, travel }) => {
                      return (
                         <PointContext.Provider value={content}>
                            <DestinationContent
                              images={images}
                              description={description}
                              distance={distance}
                              travel={travel}
                              name={name}
                            />
                         </PointContext.Provider>
                      );
                    }
                  )}
              </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
