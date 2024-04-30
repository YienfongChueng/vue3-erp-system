import axios from 'axios'

export const handQueue = (
  reqs // 请求总数
) => {
  reqs = reqs || []

  const requestQueue = (maxNums) => {
    maxNums = maxNums || 6 // 最大并发数
    const queue = [] // 请求池
    let current = 0 // 当前请求

    const dequeue = () => {
        console.log("====dequeue===",current,queue)
      while (current < maxNums && queue.length) {
        current++;
        const requestPromiseFactory = queue.shift() // 出列
        requestPromiseFactory().then(() => { 
            // 成功的请求逻辑 
        }).catch(error => { // 失败
            console.log(error)
        }).finally(() => {
            current--
            dequeue()
        });
      }
    }

    return (request) => {
      queue.push(request) // 入队
      console.log("queue:",queue)
      dequeue()
    }
  }

  const enqueue = requestQueue(6)
  for (let i = 0; i < reqs.length; i++) {
    enqueue(() => axios.get('/api/test' + i))
  }
}


