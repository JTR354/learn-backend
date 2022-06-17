# 前端控制缓存方案

- [can i use](https://caniuse.com/?search=Service%20Workers)
- [cacheStorage] (https://caniuse.com/?search=CacheStorage)

> 现代浏览器都支持serviceWorkers 和 (cacheStorage || indexDB)


> IE 浏览器会根据请求参数决定是否拿缓存数据

1. 在localStorage里面存 只需要存 登录用户 + 时间就好了， 每隔8小时更新一次 如 `username-08:00`
2. 在请求url上加上这个时间 如  `/api/ref-data?ts=08:00`
3. 在规定时间类，回去拿缓存中的数据。
