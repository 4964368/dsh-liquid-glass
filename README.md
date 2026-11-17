# Liquid_Glass
Liquid_Glass 是一个 DeepSeek Harness（DSH）客户端插件，为输入框、展开的侧栏和部分浮层添加玻璃边缘折射，为分段控件、开关和滑块添加弹簧透镜。分段控件可拖动选择。正文、代码和工具卡片使用实色，便于阅读。

## 兼容环境

以 DSH Windows 桌面版 `0.2.2-rc.1` 的 Web 客户端和插件协议为适配基线。折射需要支持 SVG 位移滤镜和 `backdrop-filter` 的 Chromium 客户端，并且内容安全策略允许位移图使用的 PNG data URL。开启系统「减少透明度」时会改用磨砂（若支持背景模糊）；无法折射时回退为平面材质。开启「减少动态效果」时，透镜直接切换位置。其他 DSH 版本、浏览器和平台尚未确认兼容；DSH 界面结构变动可能影响部分效果。

## 安装和升级

1. 在 DSH 侧栏打开「插件 → 添加插件」，选择 npm 来源，输入 `@wuren2/dsh-liquid-glass`。也可以选择本地来源，输入这个插件的 `.tgz` 包的绝对路径。
2. 安装后在插件列表中启用 **Liquid_Glass**。关闭插件会移除其样式、滤镜、监听和透镜节点；可在插件详情页卸载。
3. 如果已安装旧的无作用域包 `dsh-liquid-glass`，先在同一配置中停用并卸载旧包，再安装新包。两个包共享同一配置行 ID 和界面标记，请勿同时启用。同一浏览器源下已有的外观设置可继续使用。
## 设置和效果展示

在「插件 → Liquid_Glass」详情页调节 **折射强度**（默认 75%，范围 0–160%）和 **背景模糊**（默认 2，范围 0–100，对应 0–28 px）。调节后立即生效，数值保存在当前浏览器源的本地存储中。

打开会话，展开左侧栏并打开输入框的菜单，观察面板边缘；再拖动会话顶部的分段控件，观察透镜跟随与回弹。可从插件页开关 Liquid_Glass，对比启用前后的效果。

## 已知限制

- 大浮层、嵌套背景和超出同屏滤镜预算的元素会使用平面材质。
- React 由 DSH 客户端提供。

## 开发过程

维护者提出设计与交互需求，使用 Anthropic Claude 辅助制作 HTMLDemo，再使用 OpenAI Codex 参考该Demo适配 DSH。Demo用于验证圆弧折射剖面、色散和弹簧动画。`client.js` 是直接加载的客户端入口，含内嵌样式；`styles.css` 是供阅读的样式副本。

## 许可证 / License

本项目公开源代码（Source-Available），采用 [PolyForm Noncommercial License 1.0.0](./LICENSE)（SPDX：`PolyForm-Noncommercial-1.0.0`）。符合许可条件的个人非商业使用免费，许可证未设使用期限、次数或设备数量上限；符合条件的学习、研究、修改、二次开发和非商业分发均可进行。分发时须遵守正式许可证中的告知要求。许可证未涵盖的商业使用须另获项目权利持有人授权。本许可证并非 OSI 认可的开源许可证；以 [正式许可证全文](https://polyformproject.org/licenses/noncommercial/1.0.0) 为准。

This source-available project is licensed under the [PolyForm Noncommercial License 1.0.0](./LICENSE) (SPDX: `PolyForm-Noncommercial-1.0.0`). The license allows qualifying personal noncommercial use without fees or limits on duration, number of uses, or number of devices. It also allows qualifying study, research, modification, derivative works, and noncommercial distribution, subject to its terms and notice requirements. Commercial use outside the license requires separate permission from the rights holder. This is not an OSI-approved open-source license. See the [full license terms](https://polyformproject.org/licenses/noncommercial/1.0.0), including permitted uses by qualifying organizations.
