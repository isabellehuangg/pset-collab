import { terms, pronouns, questions } from "./Constants/FormData";

const SignupForm = () => {
    return (
        <form>
            {questions.map((question) => (
                <div className="question" key={question.id}>
                    <label for={question.id}>{question.label}</label>
                    <input type="text" id={question.id} required />
                </div>
            ))}
            <div className="question-short">
                <div className="question">
                    <label for="term">Term *</label>
                    <select id="term">
                        <option disabled selected value> Select </option>
                        {terms.map((term) => (
                            <option key={term.value} value={term.value}>
                                {term.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="question">
                    <label for="pronouns">Pronouns</label>
                    <select id="pronouns">
                        <option disabled selected value> Select </option>
                        {pronouns.map((pronoun) => (
                            <option key={pronoun.value} value={pronoun.value}>
                                {pronoun.label}
                            </option>
                        ))}
                    </select>
                </div>
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