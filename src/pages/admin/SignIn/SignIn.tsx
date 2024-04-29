
function SignIn() {
  return (
    <>
      <div className="background"></div>
      <div className="wrapper">
        <div className="auth-grid-container">
          <div className="Sign-Up">
            <h1>Sign Up</h1>
            <p>
              Hello! Get a free account to start saving on your next trip! Save
              on your hotel, rental car, and flight.
            </p>
            <form>
              <div className="input">
                <input type="text" />
                <i className="far fa-user" aria-hidden="true" />
                <label>Username</label>
              </div>
              <div className="input">
                <input type="password" />
                <i className="fas fa-unlock-alt" aria-hidden="true" />
                <label>Enter Password</label>
              </div>
            </form>
            <button className="start">Sign In</button>
            <button className="google">
              <i className="fab fa-google" aria-hidden="true" />
              &nbsp;&nbsp;Sign up with Google
            </button>
            <h2 className="sm-h2">
              Already have an account? <a href="#">Sign In</a>
            </h2>
          </div>
          <div className="Quote">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
              <div className="quote">
                <p>"This is an awesome quote."</p>
                <br />
                <p>Ricky Eckhardt</p>
              </div>
            </div>
            <footer className="signup-footer">
              <span className="signup-links">
                Follow us: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  className="link"
                  href="https://www.facebook.com/ricky.eckhardt"
                >
                  <i className="fab fa-facebook-square" aria-hidden="true" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  className="link"
                  href="https://www.threads.net/@sarphiramusafir.india"
                >
                  <i className="fab fa-twitter-square" aria-hidden="true" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  className="link"
                  href="https://www.instagram.com/sarphiramusafir.india/?hl=en"
                >
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>
              </span>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
