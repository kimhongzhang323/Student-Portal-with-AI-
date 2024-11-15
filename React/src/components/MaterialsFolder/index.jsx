import { Heading } from "@chakra-ui/react";
import { CiFolderOn } from "react-icons/ci";

function handleRedirect(link){
    return () => {
        window.location.href = link;
    };
}

export function MaterialsFolder(props) {
    return (
        <div className='materialsFolder' onClick={handleRedirect(props.link)}>
            <CiFolderOn style={{ height: '30px', width: '30px', margin: '5px 10px' }} />
            <Heading style={{ textAlign: 'left' }}>
                {props.folderName}
            </Heading>
        </div>
    )
}