import { Tabs } from '@chakra-ui/react';

export function TabTrigger( props) {
    return (
        <>
            <Tabs.Trigger value={props.value}>
            {props.text}
            </Tabs.Trigger>
        </>
    );
    }