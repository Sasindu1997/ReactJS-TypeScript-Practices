import { Status } from './Status';
import { Heading } from './Heading';
import { Oscar } from './Oscar';

function MsgApp() {

    return (
        <div className="GreetApp">
            <Status status='success'/>
            <Heading>Placeholder text.</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Decaprio!</Heading>
            </Oscar>
        </div>
    )
}

export default MsgApp