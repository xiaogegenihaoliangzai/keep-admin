import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userform from '@/components/userform'
import classform from '@/components/classform'
import goodsform from '@/components/goodsform'
import adminform from '@/components/adminform'

Vue.use(Router)
export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,
		}, , {
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
			}]
		},

	]
})
