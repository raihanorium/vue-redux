import Vue from 'vue/dist/vue.js';
import Auth from '../services/auth-service';

const loginPage = Vue.component('login-page', {
    template: `
        <div class="col-sm-4 col-sm-offset-4">
            <div class="panel panel-info">
            	<div class="panel-heading">
            		<h3 class="panel-title">Login</h3>
            	</div>
            	<div class="panel-body">
                	<div class="form-group">
                		<label for="username">Username</label>
                		<input type="text" class="form-control" id="username" placeholder="username">
                	</div>
                	
                	<div class="form-group">
                		<label for="password">Password</label>
                		<input type="password" class="form-control" id="password" placeholder="password">
                	</div>
                
                	<button type="submit" class="btn btn-primary pull-right" v-on:click="login">Login</button>
            	</div>
            </div>
        </div>
  `,

    methods: {
        login: function() {
            Auth.login('raihan',  'pass');
        }
    }
});

export default loginPage;
