const BASE_URL = "http://localhost:8082"
export const myRequest = (options)=>{
	// 同步封装
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method  || "GET",
			data:options.data || {},
			success: (res) => {
				if(res.data.status !== 0){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
	// 异步封装
	// uni.request({
		
	// })
}