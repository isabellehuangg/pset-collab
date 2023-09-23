const Home = () => {
    return ( 
        <div className="Home">
            <h1>Unlock Your Academic Journey:</h1>
            <p>Join, Learn, and Collaborate!</p>
            <div className="buttons">
                <a href="/login"><button className="button">Log In</button></a>
                <a href="/signup"><button className="button">Sign Up</button></a>
            </div>
        </div>
     );
}
 
export default Home;