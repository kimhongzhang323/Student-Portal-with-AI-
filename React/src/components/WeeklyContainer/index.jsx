import { Heading } from "@chakra-ui/react";
import { WeeklyItem } from "../WeeklyItem";

export function WeeklyContainer(props) {
  return (
    <div className="weeklyContainer">
        <Heading style={{ textAlign: "left",paddingLeft:'10px' }}>
            {props.week}
        </Heading>
        <div style={{width:'calc(100% - 5px)',borderBottom:'1.5px solid rgba(0,0,0,0.3)',margin:'5px'}}></div>
        <WeeklyItem title='BEFORE YOU COME TO CLASS' type='general' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ullamcorper turpis, finibus porttitor enim. Aliquam malesuada velit aliquet odio tristique, euismod aliquet mauris consequat. " />
        <WeeklyItem title='DURING CLASS' type='general' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ullamcorper turpis, finibus port titor enim. Aliquam malesuada velit aliquet odio tristique, euismod aliquet mauris consequat. " />
        <WeeklyItem title="ASSIGNMENT SUBMISSION" type='assignmentUpload' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ullamcorper turpis, finibus porttitor enim. Aliquam malesuada velit aliquet odio tristique, euismod aliquet mauris consequat. " />
    </div>
  );
}