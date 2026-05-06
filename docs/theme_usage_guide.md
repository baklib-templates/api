# 模板使用说明文档

## 1. 模板概览 (Theme Overview)

### 模板名称
**Api-Doc**

### 模板描述
清晰简洁的 API 文档模板，支持代码示例、高亮响应内容，适用于接口管理与开发者中心。多语言支持，多主题配色，适合产品型平台定制使用。

该模板基于 Baklib CMS 平台开发，采用 Liquid 模板引擎和 TailwindCSS 框架构建。模板集成了 Elements API 组件，能够优雅地展示 OpenAPI 规范文档，支持通过 URL 或直接内容两种方式加载 API 文档。模板采用响应式设计，适配桌面端和移动端设备，提供流畅的用户体验。

### 适用场景
该模板特别适合以下业务场景：

1. **API 文档管理平台**
   - 为开发团队提供统一的 API 接口文档展示平台
   - 支持 OpenAPI 3.0 规范的文档渲染
   - 提供清晰的接口说明、参数定义和响应示例

2. **开发者中心**
   - 构建面向开发者的技术文档中心
   - 提供 API 调用指南和代码示例
   - 支持多语言内容展示，便于国际化团队使用

3. **接口管理平台**
   - 集中管理和展示企业内外部接口文档
   - 提供统一的接口查询和浏览体验
   - 支持接口版本管理和更新通知

4. **产品型平台**
   - 为 SaaS 产品提供 API 集成文档
   - 支持第三方开发者接入和集成
   - 提供完整的开发工具和资源

### 项目标签
- API文档
- 开发者中心
- 接口管理
- OpenAPI
- 多语言
- 多主题
- 响应式
- DaisyUI
- 技术文档
- 代码示例

### 主要特性

#### 1. OpenAPI 文档展示
- 支持通过 URL 方式加载远程 OpenAPI 文档（`api_document_url`）
- 支持直接输入 OpenAPI 文档内容（`api_document`）
- 集成 Elements API 组件，提供专业的 API 文档渲染
- 支持代码示例展示和响应内容高亮
- 隐藏 Try It 功能，专注于文档展示

#### 2. 多语言支持
- 内置支持 4 种语言：中文简体（zh-CN）、English（en-US）、Germany（de）、France（fr）
- 所有界面文案和配置项均提供多语言翻译
- 支持站点级别的语言切换

#### 3. 多主题配色系统
- 集成 DaisyUI 主题框架，提供 30+ 种预设主题风格
- 支持的主题包括：light、dark、cupcake、bumblebee、emerald、corporate、synthwave、retro、cyberpunk、valentine、halloween、garden、forest、aqua、lofi、pastel、fantasy、wireframe、black、luxury、dracula、cmyk、autumn、business、acid、lemonade、night、coffee、winter、dim、nord、sunset
- 支持用户在前台切换主题
- 可配置关闭主题选择功能
- 提供推荐配色方案：时尚（fashion）和复古（old_school）

#### 4. 灵活的导航菜单
- 支持两种导航菜单样式：
  - **tree**：多层级折叠下拉菜单
  - **tree2**：第一层级作为栏目展开
- 支持自定义 Header 页头导航菜单（HTML + TailwindCSS）
- 支持自定义 Footer 页尾导航菜单
- 响应式设计，移动端自动适配

#### 5. 自定义 HTML 代码块
- 提供 3 个预设的 HTML 代码块配置项：
  - `features_one`
  - `features_two`
  - `features_three`
- 支持在模板中通过 `site.settings.features_one` 等方式调用
- 适用于添加自定义功能模块或营销内容

#### 6. 响应式布局设计
- 采用 TailwindCSS 构建，确保跨设备兼容性
- 文档页面采用抽屉式布局（drawer），移动端可收起侧边栏
- 首页和静态页采用全屏布局
- 支持平滑滚动和返回顶部功能

#### 7. 内容展示功能
- 支持文章发布日期显示（可配置开关）
- 支持文章作者信息显示（可配置开关）
- 支持标签系统
- 支持页面图标设置

#### 8. 站点基础配置
- 公司名称设置
- 版权/备案信息设置
- Head HTML 代码注入（支持 Meta 标签、统计代码等）
- 站点标题和描述配置

#### 9. 用户体验优化
- 支持站内搜索功能
- 提供热门搜索关键词配置
- 支持反馈表单功能
- 支持用户登录和 SSO 登录
- 提供 404、403 错误页面
- 支持页面访问权限控制

#### 10. 技术特性
- 基于 Liquid 模板引擎
- 使用 TailwindCSS 进行样式管理
- 集成 Alpine.js 实现交互功能
- 支持 Turbo 驱动的页面导航
- 使用 Web Components 技术（Elements API）
- 支持图片查看器功能

