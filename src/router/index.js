import Vue from 'vue'
import Router from 'vue-router'


import ShouYe from '@/components/shouye'
import Artists from '@/components/artists'
import Projects from '@/components/projects'
import Home from '@/components/home'


import Allartists from '@/components/allartists'
import Commond from '@/components/commond'
import ChuArtists from '@/components/chuArtists'


//作者的详情页面
import Accounts from '@/components/accounts'
//作者详情二级
import Accounts_works from '@/components/accounts_works'
import Accounts_designs from '@/components/accounts_designs'


//发布
import NewWork from '@/components/newWork'
import NewProject from '@/components/newProject'
Vue.use(Router)

//首页画作
import Works from '@/components/works'
import TheNewWork from '@/components/thenewwork'
import Ranking from '@/components/ranking'
import Yesterday from '@/components/yesterday'
import Sevenday from '@/components/sevenday'

//首页设计
import Designs from '@/components/designs'
//首页征稿
import Collects from '@/components/collects'
//征稿详情
import Collects_detail from '@/components/collects_detail'

//首页活动
import Events from '@/components/events'

//首页qq群
import Qqun from '@/components/qqun'

//work详情
import Workdetail from '@/components/workdetail'

//约稿详情
import Projectsdetail from '@/components/projectsdetail'
//约稿详情二级
import Projectsdetail_detail from '@/components/projectsdetail_detail'
import Projectsdetail_artists from '@/components/projectsdetail_artists'
import Projectsdetail_signup from '@/components/projectsdetail_signup'

//首页搜索
import Search from '@/components/search'
//搜索二级路由
import Search_work from '@/components/search_work'
import Search_design from '@/components/search_design'
export default new Router({
  routes: [
    {
    	path:'/shouye',
    	component:ShouYe
    },
    {
    	path:'/artists',
    	component:Artists,
        children:[
            {
                path:'allartists',
                component:Allartists
            },
            {
                path:'commond',
                component:Commond
            },
            {
                path:'chuArtists',
                component:ChuArtists
            },
            {
                path:'/',
                redirect:'/artists/allartists'
            }

        ]
    },
    {
    	path:'/projects',
    	component:Projects
    },
    {
    	path:'/home',
    	component:Home
    },
    {
        path:"/accounts/:id",
        component:Accounts,
        children:[
           {
             path:'works',
             component:Accounts_works
           },
           {
            path:'designs',
            component:Accounts_designs
           },
           {
            path:'/',
            redirect:'/accounts/:id/works'
           }
        ]
    },
    {   
        path:'/newWork',
        component:NewWork
    },
    {
        path:'/newProject',
        component:NewProject
    },
    {
        path:'/works',
        component:Works,
        children:[
            {
                path:'newwork',
                component:TheNewWork
            },
            {
                path:'ranking',
                component:Ranking,
                children:[
                    {
                        path:'11',
                        component:Yesterday
                    },
                    {
                        path:'12',
                        component:Sevenday
                    },{
                        path:'/',
                        redirect:'/works/ranking/11'
                    }
                ]
            },
            {
                path:'/',
                redirect:'/works/newwork'
            }
        ]
    },
    {
        path:'/designs',
        component:Designs
    },
    {
        path:'/collects',
        component:Collects
    },
    {
        path:'/collect/:id',
        component:Collects_detail
    },
    {
        path:'/events',
        component:Events
    },
    {
        path:"/qqun",
        component:Qqun
    },
    {
        path:'/work/:id',
        component:Workdetail
    },
    {
        path:'/project/:id',
        component:Projectsdetail,
        children:[
            {
                path:'detail',
                component:Projectsdetail_detail
            },
            {
                path:'artists',
                component:Projectsdetail_artists
            },
            {
                path:'signup',
                component:Projectsdetail_signup

            },{
                path:'/',
                redirect:'/project/:id/detail'
            }

        ]
    },
    {
        path:'/search',
        component:Search,
        children:[
            {
                path:'work',
                component:Search_work
            },
            {
                path:'design',
                component:Search_design

            },
            {
                path:'/',
                redirect:'/search/work'
            }
        ]
    },

    {
    	path:'*',
    	redirect:'shouye'
        
    }
  ]
})
