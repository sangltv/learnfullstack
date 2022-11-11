import {Div, Button} from "@thaysang/mui"
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import axios from "axios"
const Login = () => {
    return (
        <FormContainer
            defaultValues={{name: ''}}
            onSuccess={data => {
                axios.post("https://nodejs-fake-api.herokuapp.com/login",data).then(
                    r => {
                        console.log(r)
                    }
                )
            }}
        >
            <Div display="flex" flexDirection="column">
                <TextFieldElement name="username" label="username" required/>
                <TextFieldElement type="password" name="password" label="password" required/>
                <Button type="submit">Login</Button>
            </Div>
        </FormContainer>
    )
}

export default Login