import { useNavigate } from "react-router-dom";

const Home = () => {
    const router = useNavigate();
    return (
        <div>
            <h1> Hello World.... </h1>
            <button onClick={() => router('Register')}> Go to Register</button>
            <br />
            <br/>
            <button onClick={() => router('Sign')} >SignIn</button>
        </div>
    )
}

export default Home;