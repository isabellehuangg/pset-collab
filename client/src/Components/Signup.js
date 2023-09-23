const SignupForm = () => {
    return (
        <form>
            <div>
                <label for="first">First Name *</label>
                <input type="text" id="first" required />
            </div>
            <div>
                <label for="last">Last Name *</label>
                <input type="text" id="last" required />
            </div>
            <div>
                <label for="program">Program *</label>
                <input type="text" id="last" required />
            </div>
            <div>
                <label for="term">Term *</label>
                <select id="term">
                    <option disabled selected value> Select </option>
                    <option value="1A">1A</option>
                    <option value="1B">1B</option>
                    <option value="2A">2A</option>
                    <option value="2B">2B</option>
                    <option value="3A">3A</option>
                    <option value="3B">3A</option>
                    <option value="4A">4A</option>
                    <option value="4B">3A</option>
                </select>
            </div>
            <div>
                <label for="email">Email *</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label for="password">Password *</label>
                <input type="password" id="password" required />
            </div>
            <button className="button">Start Learning</button>
        </form>
    )
}

const Signup = () => {
    return (
        <div className="Signup">
            <div className="formContainer">
                <h1>Tell us a bit about yourself!</h1>
                <SignupForm />
            </div>
        </div>
    );
}

export default Signup;