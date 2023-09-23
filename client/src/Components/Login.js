const LoginForm = () => {
    return (
        <form>
            <div className="question">
                <label for="email">Email *</label>
                <input type="email" id="email" required />
            </div>
            <div className="question">
                <label for="password">Password *</label>
                <input type="password" id="password" required />
            </div>
            <button className="button">Start Learning</button>
        </form>
    )
}

const Login = () => {
    return ( 
        <div className="Login">
            <div className="formContainer">
                <h1>Happy to have you back!</h1>
                <LoginForm />
            </div>
        </div>
     );
}
 
export default Login;