import { NavigationLayout } from './components/NavigationLayout'

export default function Courses(){
    return(
        <NavigationLayout>
                <h1>Courses</h1>
                <p>Here are the courses we offer:</p>
                <ul>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Angular</li>
                </ul>
        </NavigationLayout>
    )
}