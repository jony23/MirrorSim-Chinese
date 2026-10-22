# MirrorSim 中文汉化版

MirrorSim 是一个免费的 Windows 开源 AirPlay 接收器，可以通过 Wi-Fi 将 iPhone 屏幕和音频镜像到电脑，并提供手机边框、截图、录屏和诊断功能。

本仓库是 MirrorSim 的简体中文汉化版本，保留原项目功能和 AirPlay 接收组件。汉化内容覆盖菜单、设置、配对提示、状态信息、错误提示和截图/录屏说明。

## 原作者与原项目

- 原作者：[@Mahcks](https://github.com/Mahcks)
- 原项目：[Mahcks/MirrorSim](https://github.com/Mahcks/MirrorSim)
- 原项目许可证：[MIT License](LICENSE)
- 内置 AirPlay 接收组件来源：[AirPlayServer by xenos1337](https://github.com/xenos1337/AirPlayServer)

本汉化版不是原作者官方发布版本。原项目版权、许可证和第三方组件声明仍然有效。

## 下载

请从本仓库的 [Releases](https://github.com/jony23/MirrorSim-Chinese/releases/tag/v0.2.0-zh) 下载中文便携版：

1. 下载 `MirrorSim-Chinese.zip`。
2. 解压到任意文件夹。
3. 运行其中的 `MirrorSim.exe`。

## 使用方法

1. 启动 MirrorSim，点击“开始监听”。
2. 将 iPhone 和电脑连接到同一个 Wi-Fi。
3. 打开 iPhone 控制中心，点击“屏幕镜像”。
4. 选择 MirrorSim 显示的接收器名称。
5. 首次连接时，在 MirrorSim 弹窗中点击“允许本次会话”或信任设备。

## 主要功能

- Wi-Fi 镜像 iPhone 屏幕和音频
- 简洁手机边框和控制台视图
- 截图保存到磁盘或复制到剪贴板
- 录制带 iPhone 音频的 WebM 视频
- 竖屏/横屏显示和手动旋转
- 设备信任、连接历史和诊断信息
- 内置网络发现，不需要另装 Bonjour
- 可调整预览质量、音量和键盘快捷键

## 系统要求

- Windows 10 或更高版本，64 位
- iPhone 和电脑在同一个 Wi-Fi 网络
- Windows 防火墙允许 MirrorSim 通过当前网络

## 注意事项

- 受 DRM 保护的视频可能显示为黑屏，这是 iOS 的限制，MirrorSim 无法解密。
- 本汉化版由社区整理和构建。功能原始问题也可以反馈到[原项目](https://github.com/Mahcks/MirrorSim/issues)。
- 请勿将本汉化版冒充为原作者官方版本。

## 开发构建

项目使用 Bun、Rust 和 Tauri。安装依赖后运行：

```powershell
bun install
bun run build
bunx tauri build --no-bundle
```

Windows 构建需要 Visual Studio Build Tools 的 C++ 桌面开发组件、MSVC 和 Windows SDK。

## 隐私

镜像内容在本机处理，不上传到云端。更多说明请查看 [PRIVACY.md](PRIVACY.md)。
