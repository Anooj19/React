const Register = () => {
    return (
        <div>
            <h1> Register Form</h1>
            <label>Name : </label>
            <input type="text"></input>
            <br />
            <br />
            <label> Father Name : </label>
            <input type="text"></input>
            <br />
            <br/>
            <label> Date Of Birth : </label>
            <input type="date"></input>
            <br />
            <br />
            <label>Email : </label>
            <input type="email"></input>
            <br />
            <br />
            <label>Mobile Number : </label>
            <input type="number"></input>
            <br />
            <br />
            <label> Course : </label>
            <input type="checkbox" class="course" /> Java
            <input type="checkbox" class="course" /> Python
            <input type="checkbox" class="course" /> Javascript
            <br />
            <br/>

            <button type="submit"> submit </button>
            
        </div>
    )
}

export default Register;