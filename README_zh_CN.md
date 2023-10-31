<div align="center">
<img alt="图标" src="https://cdn.jsdelivr.net/gh/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/public/icon.png" style="width: 8em; height: 8em;">

---
[![GitHub 最新发行版本 (最新一次发行/预发行)](https://img.shields.io/github/v/release/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts?include_prereleases&style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/releases/latest)
[![GitHub 最新发行时间](https://img.shields.io/github/release-date/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/releases/latest)
[![GitHub 许可证](https://img.shields.io/github/license/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/blob/main/LICENSE)
[![GitHub 最后一次提交时间](https://img.shields.io/github/last-commit/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/commits/main)
![GitHub 仓库大小](https://img.shields.io/github/repo-size/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts?style=flat-square)
![查看次数](https://hits.b3log.org/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts.svg)
[![GitHub 发行版本下载次数](https://img.shields.io/github/downloads/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/total?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/releases)

---
简体中文 \| [English](./README.md)

---
</div>

# 思源自定义字体插件

一款可以自定义界面中各类元素所使用的字体列表的[思源笔记](https://github.com/siyuan-note/siyuan)插件。

## 预览

![预览图片](https://cdn.jsdelivr.net/gh/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/public/preview.png)

## 介绍

### 功能介绍

* 内置 [Twitter Emoji (Twemoji)](https://github.com/mozilla/twemoji-colr) 表情符号字体

  * 可通过字体族名 `Twemoji Mozilla` 引用该字体
* 查看内核所在系统的字体列表

  * 在使用伺服时该列表中的部分字体无法加载
* 查看当前应用(桌面端/浏览器)支持的字体列表

  * 在当前应用中可以使用的字体列表
* 自定义 CSS 代码片段

  * 可通过 [@font-face](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face) 动态加载本地/网络字体文件
* 自定义界面中各类元素字体列表

  * `基础字体`: 界面使用的字体
  * `编辑器字体`: 编辑器中使用的字体
  * `代码字体`: 行内代码, 代码块与文本输入框中使用的字体
  * `图表字体`: 关系图使用的字体
  * `数学字体`: 行内公式与公式块使用的字体
  * `表情符号字体`: 表情符号(Emoji, 用于文档图标)使用的字体

### 设置项介绍

* `常规设置`

  * `重置设置选项`

    * 这是一个按钮
    * 重置所有设置选项为默认选项
    * 点击该按钮后会弹出确认对话框

      * 点击对话框确认按钮后会重置本插件所有选项为默认选项, 之后会自动刷新当前界面
  * `系统字体列表`

    * 这是一个按钮
    * 查看内核所在系统的字体列表
    * 点击该按钮后会弹出一个显示系统字体列表的对话框
  * `可用字体列表`

    * 这是一个按钮
    * 查看当前应用支持的字体列表
    * 点击该按钮后会弹出一个显示当前可用字体列表的对话框

      * 最顶层列表项的右侧显示该字体族的引用名称, 自定义字体时需要使用该名称
      * 最顶层列表项展开后可以查看该字体族中所有样式的字体
* `CSS 片段`

  * `启用`

    * 这是一个开关
    * 默认状态: *打开*
    * 开关打开后会将该设置项下方的 CSS 代码片段应用到当前界面
  * `CSS 片段`

    * 这是一个文本输入框
    * 默认注册了一个 `@font-face` 规则, 用于加载插件中附带的 [Twemoji Mozilla](https://github.com/mozilla/twemoji-colr) 表情符号字体
    * 详情请参考: [@font-face - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)
* `字体设置`

  * 字体列表需要使用字体族名称指定字体

    * 例如 `微软雅黑` 的字体族名称为 `Microsoft YaHei`
    * 当前应用支持的字体族可以在 `常规设置` > `可用字体列表` 中查看
    * 字体列表每行设置一个字体族名称, 越靠前的字体优先级越高
  * `基础字体`: 界面使用的字体

    * 在该选项卡中可以自定义编辑器以外的文本所使用的字体列表
  * `编辑器字体`: 编辑器中使用的字体

    * 在该选项卡中可以自定义编辑器中文本所使用的字体列表
    * 在桌面端中本字体列表优先级低于 `思源设置`→`编辑器`→`字体` 设置项

      * 若需要在桌面端中应用本字体列表, 可以将 `思源设置`→`编辑器`→`字体` 设置项设置为 `默认`
  * `代码字体`: 行内代码, 代码块与文本输入框中使用的字体

    * 在该选项卡中可以自定义编辑器中 `行内代码`, `代码块` 以及 `文本输入框` 中文本所使用的字体
  * `图表字体`: 关系图使用的字体

    * 在该选项卡中可以自定义关系图中文本所使用的字体
  * `数学字体`: 行内公式与公式块使用的字体

    * 在该选项卡中可以自定义编辑器中 `行内公式` 与 `数学公式块` 中文本所使用的字体
  * `表情符号字体`: 表情符号(Emoji, 用于文档图标)使用的字体

    * 在该选项卡中可以自定义文档图标中的表情符号所使用的字体
* `菜单设置`

  * `块字体列表`

    * 这是一个文本输入框
    * 文本框的的每一行指定一个字体名称, 可以使用块菜单设置块的字体为该字体

## 更改日志

[CHANGELOG.md](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/blob/main/CHANGELOG.md)
