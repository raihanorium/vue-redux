import App, {router} from '../app';

const auth = {
    isAuthenticated: false,
    user: null,
    
    login(username, password) {
        console.log('Logging in with ', username, password);
        this.isAuthenticated = true;
        this.user = username;
        
        // go to previously requested page
        router.push(App.$route.query.redirect);
    },
    
    logout(){
        this.isAuthenticated = false;
        this.user = null;
    }
};

export default auth;