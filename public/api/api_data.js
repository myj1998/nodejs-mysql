define({ "api": [
  {
    "type": "post",
    "url": "/admin/delete",
    "title": "删除账户",
    "name": "AdminDelete",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/info",
    "title": "获取管理员个人资料",
    "name": "AdminInfo",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/info"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/list",
    "title": "获取管理员列表",
    "name": "AdminList",
    "group": "Admin",
    "sampleRequest": [
      {
        "url": "/admin/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/login",
    "title": "登录管理员账户",
    "description": "<p>登录成功， 返回token,有效期4小时，请在头部headers中设置Authorization: <code>Bearer ${token}</code>, 所有请求都必须携带token;</p>",
    "name": "AdminLogin",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>请求结果信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>注册成功之后返回的token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户uid.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.role",
            "description": "<p>用户角色id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200返回的JSON:",
          "content": "HTTP / 1.1 200 OK\n{\n    \"status\": true,\n    \"msg\": \"成功\",\n    \"data\":{\n        \"id\":5,\n        \"role\":3,\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiIxIiwiaWF0IjoxNTU3MzM1Mzk3LCJleHAiOjE1NTczNDI1OTd9.vnauDCSHdDXaZyvTjNOz0ezpiO-UACbG-oHg_v76URE\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/admin/register",
    "title": "注册管理员账户",
    "description": "<p>注册成功， 返回token, 请在头部headers中设置Authorization: <code>Bearer ${token}</code>,所有请求都必须携带token;</p>",
    "name": "AdminRegister",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱地址.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/register"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>请求结果信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>注册成功之后返回的token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户uid.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.role",
            "description": "<p>用户角色id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200返回的JSON:",
          "content": "HTTP / 1.1 200 OK\n{\n    \"status\": true,\n    \"msg\": \"成功\",\n    \"data\":{\n        \"id\":5,\n        \"role\":3,\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiIxIiwiaWF0IjoxNTU3MzM1Mzk3LCJleHAiOjE1NTczNDI1OTd9.vnauDCSHdDXaZyvTjNOz0ezpiO-UACbG-oHg_v76URE\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/admin/info",
    "title": "编辑管理员个人资料",
    "name": "AdminUpdate",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像地址.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/info"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/article/add",
    "title": "添加新的文章",
    "name": "AddArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_1st",
            "description": "<p>一级分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_2nd",
            "description": "<p>二级分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章摘要.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "main_photo",
            "description": "<p>文章主图.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/add"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/category",
    "title": "获取某分类下的文章列表",
    "description": "<p>注意：默认按照日期降序排序</p>",
    "name": "ArticleCategory",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>一级分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每一页文章数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageindex",
            "description": "<p>第几页.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/category"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/detail",
    "title": "获取指定id的文章详情",
    "name": "ArticleDetail",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/list",
    "title": "获取所有文章列表",
    "description": "<p>注意：默认按照日期降序排序</p>",
    "name": "ArticleList",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每一页文章数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageindex",
            "description": "<p>第几页.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>文章数组.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>文章总数.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/delete",
    "title": "删除指定id的文章",
    "name": "DeleteArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/edit",
    "title": "编辑指定id文章",
    "name": "EditArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_1st",
            "description": "<p>一级分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_2nd",
            "description": "<p>二级分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章摘要.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "main_photo",
            "description": "<p>文章主图.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/edit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/category/add",
    "title": "添加分类",
    "description": "<p>注意：目前最多支持二级分类</p>",
    "name": "AddCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>父级分类id.一级分类的parent_id=0</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/add"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/detail",
    "title": "获取指定id的分类详情",
    "name": "CategoryDetail",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/list",
    "title": "获取所有分类",
    "name": "CategoryList",
    "group": "Category",
    "sampleRequest": [
      {
        "url": "/category/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/sub",
    "title": "获取子级分类",
    "name": "CategorySub",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>父级id。一级分类的父类id=0;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/sub"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category/delete",
    "title": "删除指定id分类",
    "description": "<p>注意：删除指定id分类,如果其拥有子级分类不允许删除，必须清空子分类才可删除。</p>",
    "name": "DeleteCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category/edit",
    "title": "编辑指定id分类",
    "name": "EditCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>父级分类id.一级分类的parent_id=0</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/edit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/role",
    "title": "添加角色",
    "name": "RoleAdd",
    "group": "Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "delete",
    "url": "/role/:id",
    "title": "删除角色",
    "name": "RoleDelete",
    "group": "Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "参数示例:",
        "content": "/role/3",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/list",
    "title": "获取角色列表",
    "name": "RoleList",
    "group": "Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "/role/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "put",
    "url": "/role/:id",
    "title": "更新角色",
    "name": "RoleUpdate",
    "group": "Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "参数示例:",
        "content": "/role/3",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/tag/add",
    "title": "创建新的标签",
    "name": "AddTag",
    "group": "Tag",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>标签名.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/tag/add"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/tag/delete",
    "title": "删除标签",
    "description": "<p>有文章与标签关联，不允许删除标签；将关联文章删除，标签没有关联，可以删除标签；</p>",
    "name": "DeleteTag",
    "group": "Tag",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>标签id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/tag/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/tag/edit",
    "title": "编辑标签名称",
    "name": "EditTag",
    "group": "Tag",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>标签id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>标签名称.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/tag/edit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/tag/list",
    "title": "获取标签列表",
    "name": "TagList",
    "group": "Tag",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "/tag/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/upload/common/",
    "title": "通用图片上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，不限制尺寸，avatar存储至avatar文件夹,common存储至common文件夹</p>",
    "name": "uploadCommon",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"common\"",
              "\"avatar\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>上传类型：avatar--头像上传；common--通用上传；</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/upload/common/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/upload/delete",
    "title": "删除图片API",
    "description": "<p>如果上传错误的图片，通过此API删除错误的图片</p>",
    "name": "uploadDelete",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>图片文件路径,注：src='./images/goods/file.jpg'，必须严格按照规范路径，'./images'不可省略;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/upload/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/upload/editor/",
    "title": "富文本编辑器图片上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，不限制尺寸，存储至details文件夹</p>",
    "name": "uploadEditor",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/upload/editor/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "删除账户",
    "name": "UserDelete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "参数示例:",
        "content": "/user/3",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "/user"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "获取用户个人资料",
    "name": "UserInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/list",
    "title": "获取用户列表",
    "name": "UserList",
    "group": "User",
    "sampleRequest": [
      {
        "url": "/user/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录普通用户",
    "name": "UserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "注册普通用户",
    "name": "UserRegister",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/register"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "编辑个人资料",
    "name": "UserUpdate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body参数:",
          "content": "{\n  \"username\": '黄小米',\n  \"nickname\":\"hxm\",\n  \"sex\":\"女\",\n  \"tel\":\"15863008280\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "参数示例:",
        "content": "/user/3",
        "type": "js"
      }
    ],
    "sampleRequest": [
      {
        "url": "/user"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/menu/tree",
    "title": "根据角色id获取侧边栏树形菜单",
    "name": "TreeMenu",
    "group": "admin-Menu",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>角色id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/menu/tree"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/menu.js",
    "groupTitle": "admin-Menu"
  }
] });
