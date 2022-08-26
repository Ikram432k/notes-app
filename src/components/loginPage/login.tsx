import { Div,Form,Input } from './loginStyle';
import { Link } from 'react-router-dom';
const Login=()=>{
    return(
        <Div>
            <Form>
                <Input>
                <h3>
                    Enter your Email and Password
                </h3>
                <input
                id="emailId"
                name="emailId"
                placeholder="Enter your email"
                />
                <input
                id="password"
                name="password"
                placeholder="Enter your password"
                />
                </Input>
                <div>
                    <Link to={`/home`}>
                    <button className="btn">logIn</button>
                    </Link>
                    <button className="btn">signUp</button>
                </div>
            </Form>
        </Div>
    )
}
export default Login;