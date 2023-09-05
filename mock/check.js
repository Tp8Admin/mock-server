module.exports = [
    // 一：检测PHP环境
    {
      url: '/api/install/envCheckPhp',
      method: 'get',
      response: () => {
        return {
          "code": 1,
          "data": [
            // 1、PHP的版本
            {
                name: 'PHP的版本',
                name_en: 'php_version',
                describe: "8.2.3",
                link: [],
                state: "ok"
            },
            // 2、配置目录
            {
                name: '配置目录',
                name_en: 'config_is_writable',
                describe: "可写",
                link: [],
                state: "ok"
            },
            // 3、public目录
             {
                name: 'public目录',
                name_en: 'public_is_writable',
                describe: "可写",
                link: [],
                state: "ok"
            },
            // 4、PHP的PDO库
            {
                name: 'PHP的PDO库',
                name_en: 'php_pdo',
                describe: "已安装",
                link: [],
                state: "ok"
            },
            // 5、PHP的GD2库
            {
                name: 'PHP的GD2库',
                name_en: 'php_gd2',
                describe: "已安装",
                link: [],
                state: "ok"
            },
            // 6、PHP的proc库
            {
                name: 'PHP的proc库',
                name_en: 'php_proc',
                describe: "允许执行",
                link: [],
                state: "ok"
            },
          ]
        }
      }
    },

    // 二：检测NodeJs环境
    {
        url: '/api/install/envCheckNpm',
        method: 'get',
        response: () => {
          return {
            "code": 1,
            "data": [
               // 1、NPM版本
               {
                name: 'NPM版本',
                name_en: 'npm_version',
                describe: "已安装",
                link: [],
                state: "ok"
              },
              // 2、NodeJS版本
              {
                  name: 'NodeJS版本',
                  name_en: 'config_is_writable',
                  describe: "可写",
                  link: [],
                  state: "ok"
              },
              // 3、NPM包管理器
              {
                  name: 'NPM包管理器',
                  name_en: 'npm_package_manager',
                  describe: "已安装",
                  link: [],
                  state: "ok"
              },
             
            ]
          }
        }
      },
  ]