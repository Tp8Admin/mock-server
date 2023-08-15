module.exports = [
    // 一：检测PHP环境
    {
      url: '/api/envCheckPhp',
      method: 'get',
      response: () => {
        return {
          "status": "success",
          "data": {
            // 1、PHP的版本
            php_version: {
                describe: "8.2.3",
                link: [],
                state: "ok"
            },
            // 2、配置目录
            config_is_writable: {
                describe: "可写",
                link: [],
                state: "ok"
            },
            // 3、public目录
            public_is_writable: {
                describe: "可写",
                link: [],
                state: "ok"
            },
            // 4、PHP的PDO库
            php_pdo: {
                describe: "已安装",
                link: [],
                state: "ok"
            },
            // 5、PHP的GD2库
            php_gd2: {
                describe: "已安装",
                link: [],
                state: "ok"
            },
            // 6、PHP的proc库
            php_proc: {
                describe: "允许执行",
                link: [],
                state: "ok"
            },
          }
        }
      }
    },

    // 二：检测NodeJs环境
    {
        url: '/api/envCheckNpm',
        method: 'get',
        response: () => {
          return {
            "status": "success",
            "data": {
               // 1、NPM版本
               npm_version: {
                describe: "已安装",
                link: [],
                state: "ok"
              },
              // 2、NodeJS版本
              config_is_writable: {
                  describe: "可写",
                  link: [],
                  state: "ok"
              },
              // 3、NPM包管理器
              npm_package_manager: {
                  describe: "已安装",
                  link: [],
                  state: "ok"
              },
             
            }
          }
        }
      },
  ]