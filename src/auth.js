import auth0 from 'auth0-js';
import router from './router';
import authConfig from './auth_config.json';

const auth = new auth0.WebAuth({
  domain: "dev-8fb7e5kg24azc51x.us.auth0.com",
  clientID: "geHen3fHpDG8MiXAKq4V7szvY0dqaKqx",
  redirectUri: 'http://localhost:8080/home',
  responseType: 'token id_token',
  scope: 'openid profile email',
});

const AuthService = {
  login() {
    auth.authorize();
  },
  handleAuthentication() {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        router.replace('/');
      } else if (err) {
        console.log(err);
      }
    });
  },
  setSession(authResult) {
    // Save tokens and user info in localStorage or Vuex store
    const { accessToken, idToken, expiresIn } = authResult;

    // Save tokens to localStorage
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);

    // Save token expiration time
    const tokenExpiration = Date.now() + expiresIn * 1000;
    localStorage.setItem('token_expiration', tokenExpiration);

    // Fetch user info using authResult.idTokenPayload
    // Save user info to localStorage or Vuex store
  },
  logout() {
    // Clear tokens and user info from localStorage or Vuex store
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('token_expiration');

    // Redirect to the logout endpoint of your Auth0 app
    auth.logout({
      returnTo: 'http://localhost:8080/login', // Replace with your desired logout URL
      clientID: authConfig.clientId,
    });
  },
  isAuthenticated() {
    // Check if the user is authenticated (e.g., by verifying tokens)
    const accessToken = localStorage.getItem('access_token');
    const idToken = localStorage.getItem('id_token');
    const tokenExpiration = localStorage.getItem('token_expiration');

    // Verify if tokens exist and are not expired
    return accessToken && idToken && tokenExpiration && Date.now() < tokenExpiration;
  },
};

export default AuthService;
