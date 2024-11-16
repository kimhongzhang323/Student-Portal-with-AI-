    import { BsFiletypePdf } from "react-icons/bs";


    export function FileTreeItem(props){
        return(
            <div style={{display:'flex',marginLeft:'50px', width:'80%',margin:'30px 50px'}}>
                <div
                    style={{
                        borderLeft: '3px solid gray',
                        height: '15%',
                        position:'absolute',
                        transform:'translateY(-77%)'
                    }}
                > 
                </div>
                <div style={{borderBottom:'3px solid rgba(0,0,0,0.3)',borderLeft:'3px solid gray', height:'100%',width:'3%',marginTop:'13px'}}>

                </div>
                <BsFiletypePdf size='30px'/>
                <div style={{alignItems:'center'}}>
                    {props.fileName}
                </div>
            </div>
        )
    }