import { classList } from "./Constants/Class";

const Dashboard = () => {
    return ( 
        <div className="DemoDashboard">
            <h1>What will you master today?</h1>
            <div class="courses">
                {classList.map((classCode) => (                    
                    <a href="/demo/class" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="course" id={classCode.id}>
                        <img src="https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxpTW1WbU1qRmxNQzAxTWpOakxUUmtZMk10WWpCbVlTMWlOelUwTkdKbE0yRTNZV1VHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--c405174f10b50426f1fe476b9870b7130397afa4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-f5aa67f8157.png" alt="code" style={{ width: '10rem', borderRadius: '1rem' }} />
                        <div>{classCode.class}</div>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
 
export default Dashboard;