import Mock from 'mockjs'
import homeApi from './mockServeData/home'

// Mock.mock(/home\/getData/,function(){
//     console.log("拦截到getData接口")
// })


Mock.mock(/home\/getData/,homeApi.getStatisticalData)