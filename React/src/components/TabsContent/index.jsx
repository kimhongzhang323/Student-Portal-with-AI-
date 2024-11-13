import {Tabs} from '@chakra-ui/react'

export function TabsContent(props){
    return(
        <Tabs.Content value={props.value} className='grayBorder'>
            {props.text}     {/* Replace this with actual content */}
        </Tabs.Content>
    )
}