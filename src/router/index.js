import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import userform from '@/components/userform'
import classform from '@/components/classform'
import goodsform from '@/components/goodsform'
import adminform from '@/components/adminform'
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
			},{
				path: 'statistics',
				name: 'statistics',
				component: statistics
			}]
		}]
})
