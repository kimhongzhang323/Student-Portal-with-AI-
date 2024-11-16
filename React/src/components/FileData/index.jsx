import { BsFiletypePdf } from "react-icons/bs";

export default function FileData(props){
    return(
        <div style={{display:'flex',alignContent:'center',margin:props.margin}}>
            <BsFiletypePdf size={props.size}/>
            <div style={{alignItems:'center'}}>
                {props.fileName}
            </div>
        </div>
    )
}