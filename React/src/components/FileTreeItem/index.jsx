import { BsFiletypePdf } from "react-icons/bs";


export function FileTreeItem(props){
    return(
        <div style={{display:'flex',marginLeft:'50px', width:'80%',margin:'10px 50px'}}>
            <div style={{borderBottom:'3px solid rgba(0,0,0,0.3)', height:'50%',width:'3%'}}>

            </div>
            <BsFiletypePdf size='30px'/>
            <div style={{alignItems:'center'}}>
                {props.fileName}
            </div>
        </div>
    )
}