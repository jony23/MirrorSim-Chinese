import fs from 'node:fs';
import path from 'node:path';
const m = {
  Audio:'音频', Capture:'捕获', Devices:'设备', Support:'支持', Close:'关闭',
  'Include device frame':'包含设备边框', 'Open in Explorer after saving':'保存后在资源管理器中打开', 'Show capture flash':'显示捕获闪光',
  'Screenshot Folder':'截图文件夹', 'Save to':'保存到', 'Filename prefix':'文件名前缀', 'Append timestamp to filename':'在文件名中追加时间戳',
  Recording:'录制', 'Include iPhone audio':'包含 iPhone 音频', 'Play iPhone audio':'播放 iPhone 音频', 'Follow iPhone volume':'跟随 iPhone 音量',
  'Channel output':'声道输出', Stereo:'立体声', 'Mono compatibility':'单声道兼容', Orientation:'方向', Portrait:'竖屏', Landscape:'横屏',
  'Follow iPhone orientation':'跟随 iPhone 方向', 'Remember last orientation':'记住上次方向', 'Remember last view mode':'记住上次视图模式',
  'Keep Minimal window always on top':'简洁窗口始终置顶', 'Solid window background':'纯色窗口背景', 'Screen Mirroring name':'屏幕镜像名称',
  'Network & Discovery':'网络与发现', 'Listen automatically on launch':'启动时自动监听', 'Auto-reconnect after drops':'断线后自动重连',
  'Windows Firewall':'Windows 防火墙', 'Device Trust':'设备信任', 'Known device':'已知设备', 'Needs attention':'需要处理', Never:'从未',
  'Pairing or trust confirmation is pending':'等待配对或信任确认', 'Allow this session':'允许本次会话', 'Allow & Remember':'允许并记住',
  'Trust this iPhone':'信任此 iPhone', 'Approve this iPhone':'允许此 iPhone', Dismiss:'关闭', 'Pairing Failed':'配对失败',
  'AirPlay Verification Required':'需要 AirPlay 验证', 'Unknown iPhone':'未知 iPhone', 'Audio unavailable':'音频不可用',
  'Mute iPhone audio':'静音 iPhone 音频', 'Unmute iPhone audio':'取消静音 iPhone 音频', 'Fit window to phone':'适配手机窗口',
  'Switch to Console':'切换到控制台', 'Show Controls':'显示控制栏', 'Hide Controls':'隐藏控制栏', Fullscreen:'全屏',
  'Video picture unavailable':'视频画面不可用', 'Preview interrupted':'预览中断', 'Starting iPhone video...':'正在启动 iPhone 视频…',
  Status:'状态', Playback:'播放', 'Effective playback':'实际播放', 'iPhone level':'iPhone 音量', 'Connection not allowed':'连接未获允许',
  'Blocked on this PC':'已在此电脑上阻止', 'Pairing pending':'等待配对', 'New device':'新设备', 'Trusted device':'受信任设备',
  'Device ID':'设备 ID', Model:'型号', OS:'系统', Transport:'传输', Codec:'编码器', Capabilities:'能力', Trust:'信任'
};
function walk(d){for(const n of fs.readdirSync(d)){const f=path.join(d,n),s=fs.statSync(f);if(s.isDirectory())walk(f);else if(f.endsWith('.ts')||f.endsWith('.tsx')){let x=fs.readFileSync(f,'utf8');for(const [a,b] of Object.entries(m).sort((a,b)=>b[0].length-a[0].length)){for(const q of ['"',"'",'`'])x=x.split(q+a+q).join(q+b+q);x=x.split('>'+a+'<').join('>'+b+'<')}fs.writeFileSync(f,x)}}}
walk('src');
