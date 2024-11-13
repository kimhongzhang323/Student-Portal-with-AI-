import { Heading } from "@chakra-ui/react";

export function WeeklyContainer(props) {
  return (
    <div className="weeklyContainer">
      <Heading style={{ textAlign: "left",paddingLeft:'10px' }}>
        {props.week}
      </Heading>
      <div style={{width:'calc(100% - 5px)',borderBottom:'1.5px solid rgba(0,0,0,0.3)',margin:'5px'}}></div>
    </div>
  );
}