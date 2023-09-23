const Home = () => {
    return (
      <div className="Home">
        <h1 className="title">Unlock Your Academic Journey</h1>
        <p className="description">Join, Learn, and Collaborate!</p>
        <div className="buttons">
            <a href = "/login">
                <button className="button" style={{ background: 'linear-gradient(190deg, #f4ad63, #fadca7)' }}>Log In</button>
            </a>
            <a href = "/signup">
                <button className="button">Sign Up</button>
            </a>
        </div>
      </div>
    );
  }
  
  export default Home;
  