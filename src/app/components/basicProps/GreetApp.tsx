import { Greet } from './Greet';
import { Person } from './Person';
import { PersonList } from './PersonList';

function GreetApp() {

    const personName = {
        first : 'John',
        last : 'Smith'
    }

    const nameList = [
        {
            first : 'John',
            last : 'Smith'
        },
        {
            first : 'Clarke',
            last : 'Kent'
        },
        {
            first : 'Princes',
            last : 'Diana'
        }
    ]

    return (
        <div className="GreetApp">
            <Greet name="John" messageCount={10} isLoggedIn={true}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
        </div>
    )
}

export default GreetApp