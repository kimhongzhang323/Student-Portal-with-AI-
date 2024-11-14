import { Heading } from "@chakra-ui/react";
import { CiFolderOn } from "react-icons/ci";

export function MaterialsFolder(props) {
    return (
        <div className='materialsFolder'>
            <CiFolderOn style={{ height: '30px', width: '30px', margin: '5px 10px' }} />
            <Heading style={{ textAlign: 'left' }}>
                {props.folderName}
            </Heading>
        </div>
    )
}