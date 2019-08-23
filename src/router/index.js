import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import login from '@/components/login'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
import userform from '@/components/userform'
import classform from '@/components/classform'
import goodsform from '@/components/goodsform'
import adminform from '@/components/adminform'
<<<<<<< HEAD
import statistics from '@/components/statistics'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
 

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: login,
		}, {
=======

Vue.use(Router)
export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,
		}, , {
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
			path: '/adminform',
			name: 'adminform',
			component: adminform,
			children: [{
				path: 'userform',
				name: 'userform',
				component: userform
			},{
				path: 'classform',
				name: 'classform',
				component: classform
			},{
				path: 'goodsform',
				name: 'goodsform',
				component: goodsform
<<<<<<< HEAD
			},{
				path: 'statistics',
				name: 'statistics',
				component: statistics
			}]
		}]
=======
			}]
		},

	]
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
})
