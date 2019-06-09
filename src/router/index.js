import Vue from 'vue'
import Router from 'vue-router'
import entire from '@/components/layout/entire'
import headers from '@/components/layout/headers'
import mainblock from '@/components/layout/mainblock'
import enterprise from '@/components/baseDevtype/enterprise'
import Welcome from '@/components/sb/Welcome'
import adddel from '@/components/sb/adddel'
import adddeladd from '@/components/sb/adddeladd'
import adddedit from '@/components/sb/adddedit'
import enterpriseadd from '@/components/baseDevtype/enterpriseadd'
import baseuseradd from '@/components/baseuser/baseuseradd'
import baseuser from '@/components/baseuser/baseuser'
import baseuseredit from '@/components/baseuser/baseuseredit'
import enterpriseedit from '@/components/baseDevtype/enterpriseedit'
import baseDevice from '@/components/baseDevice/baseDevice'
import baseDeviceadd from '@/components/baseDevice/baseDeviceadd'
import baseDeviceedit from '@/components/baseDevice/baseDeviceedit'
import Login from '@/components/layout/Login'
import baseFlow from '@/components/baseFlow/baseFlow'
import baseFlowadd from '@/components/baseFlow/baseFlowadd'
import baseFlowedit from '@/components/baseFlow/baseFlowedit'

import produceFault from '@/components/produceFault/produceFault'
import produceFaultadd from '@/components/produceFault/produceFaultadd'
import produceFaultedit from '@/components/produceFault/produceFaultedit'

import produceRepair from '@/components/produceRepair/produceRepair'
import produceRepairadd from '@/components/produceRepair/produceRepairadd'
import produceRepairedit from '@/components/produceRepair/produceRepairedit'

import produceReport from '@/components/produceReport/produceReport'
import produceReportadd from '@/components/produceReport/produceReportadd'
import produceReportedit from '@/components/produceReport/produceReportedit'
// 中控页面
import Control from '@/components/Control/Control'
//作业信息
import produceJob from '@/components/produceJob/produceJob'
import produceJobList from '@/components/produceJob/produceJobList'
// 模型建立与展示
import energyConsume from '@/components/energyConsume/energyConsume'
import EnergyModel from '@/components/energyConsume/EnergyModel'
// 能耗信息
import energyConsumeList from '@/components/energyConsume/energyConsumeList'
import energyConsumeadd from '@/components/energyConsume/energyConsumeadd'
import energyConsumeedit from '@/components/energyConsume/energyConsumeedit'
// 折标煤系数
import energyStandradcoal from '@/components/energyStandradcoal/energyStandradcoal'
import energyStandradcoaladd from '@/components/energyStandradcoal/energyStandradcoaladd'
import energyStandradcoaledit from '@/components/energyStandradcoal/energyStandradcoaledit'
// 作业信息
import consume from '@/components/devInfo/consume'
import usage from '@/components/devInfo/usage'
import intactRatio from '@/components/devInfo/intactRatio'
import cost from '@/components/devInfo/cost'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entire',
      component: entire,
			children:[
								{path:'enterprise',component:enterprise},
								{path:'/',component:Welcome,name:'Welcome'},
								// 企业信息
								{path:'adddel',component:adddel},
								{path: '/adddeladd',name: 'adddeladd',component: adddeladd},
								{path: '/adddedit',name: 'adddedit',component: adddedit},
								// 设备类别
								{path: '/enterprise',name: 'enterprise',component: enterprise},
								{path: '/enterpriseadd',name: 'enterpriseadd',component: enterpriseadd},
								{path: '/enterpriseedit',name: 'enterpriseedit',component: enterpriseedit},
								// 用户信息
								{path:'baseuser',component:baseuser},
								{path: '/baseuseradd',name: 'baseuseradd',component: baseuseradd},
								{path: '/baseuseredit',name: 'baseuseredit',component: baseuseredit},
								// 设备信息
								{path: '/baseDevice',name: 'baseDevice',component: baseDevice},
								{path: '/baseDeviceadd',name: 'baseDeviceadd',component: baseDeviceadd},
								{path: '/baseDeviceedit',name: 'baseDeviceedit',component: baseDeviceedit},
								// 流程信息
								{path: '/baseFlow',name: 'baseFlow',component: baseFlow},
								{path: '/baseFlowadd',name: 'baseFlowadd',component: baseFlowadd},
								{path: '/baseFlowedit',name: 'baseFlowedit',component: baseFlowedit},
								// 故障记录
								{path: '/produceFault',name: 'produceFault',component: produceFault},
								{path: '/produceFaultadd',name: 'produceFaultadd',component: produceFaultadd},
								{path: '/produceFaultedit',name: 'produceFaultedit',component: produceFaultedit},
								//维修记录
								{path: '/produceRepair',name: 'produceRepair',component: produceRepair},
								{path: '/produceRepairadd',name: 'produceRepairadd',component: produceRepairadd},
								{path: '/produceRepairedit',name: 'produceRepairedit',component: produceRepairedit},
								// 报岗信息
								{path: '/produceReport',name: 'produceReport',component: produceReport},
								{path: '/produceReportadd',name: 'produceReportadd',component: produceReportadd},
								{path: '/produceReportedit',name: 'produceReportedit',component: produceReportedit},
								// 中控页面
								{path: '/Control',name: 'Control',component: Control},
								// 作业信息
								{path: '/produceJob',name: 'produceJob',component: produceJob},
								{path: '/produceJobList',name: 'produceJobList',component: produceJobList},
								// 模型建立与展示
								{path: '/energyConsume',name: 'energyConsume',component: energyConsume},
								{path: '/EnergyModel',name: 'EnergyModel',component: EnergyModel},
								// 能耗信息
								{path: '/energyConsumeList',name: 'energyConsumeList',component: energyConsumeList},
								{path: '/energyConsumeadd',name: 'energyConsumeadd',component: energyConsumeadd},
								{path: '/energyConsumeedit',name: 'energyConsumeedit',component: energyConsumeedit},
								// 折标煤系数
								{path: '/energyStandradcoal',name: 'energyStandradcoal',component: energyStandradcoal},
								{path: '/energyStandradcoaladd',name: 'energyStandradcoaladd',component: energyStandradcoaladd},
								{path: '/energyStandradcoaledit',name: 'energyStandradcoaledit',component: energyStandradcoaledit},
								// 作业信息
								{path: '/consume',name: 'consume',component: consume},
								{path: '/usage',name: 'usage',component: usage},
								{path: '/intactRatio',name: 'intactRatio',component: intactRatio},
								{path: '/cost',name: 'cost',component: cost}
								]
    },
		{
		  path: '/headers',name: 'headers',component: headers
		},
		{
		  path: '/mainblock',name: 'mainblock',component: mainblock
		},
		{
		  path: '/Login',name: 'Login',component: Login
		}
		
  ]
})
