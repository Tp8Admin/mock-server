module.exports = [
    // 测试
    {
      url: '/api/test',
      method: 'get',
      response: () => {
        return {
          "status": "success",
          "data": {
            username: 'zhangsan',
          }
        }
      }
    },
  ]