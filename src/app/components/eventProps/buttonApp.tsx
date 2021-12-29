import { Button } from './button'
import { Input } from './input'


function ButtonApp() {
    return (
        <div className="App">
            <Button handleClick={(event, id) => console.log('Button clicked', event, id)} />
            <Input value="" handleChange={(event) => console.log(event)} />
        </div>
    )
}

export default ButtonApp