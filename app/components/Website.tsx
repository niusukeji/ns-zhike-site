export default function Website() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 industrial-bg">
      <div className="fx-gridflow" aria-hidden />
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-[1600px] px-4 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-sky-400 grid place-items-center font-black text-slate-950">N</div>
            <div className="leading-tight">
              <div className="font-semibold tracking-wide">NS智科</div>
              <div className="text-[10px] text-slate-400">SMART INDUSTRIAL MONITORING</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white" href="#solutions">方案</a>
            <a className="hover:text-white" href="#assets">动设备</a>
            <a className="hover:text-white" href="#power">配电安全</a>
            <a className="hover:text-white" href="#fire">智慧消防</a>
            <a className="hover:text-white" href="#cases">案例</a>
            <a className="hover:text-white" href="#contact">联系</a>
          </nav>
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-sm font-medium shadow-cyan">获取方案</a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="hero-arc" />
        <div className="scanline" />
        <div className="mx-auto max-w-[1600px] px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2 py-1 text-[11px] rounded bg-slate-900/70 ring-1 ring-slate-800">
              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-pulse" />
              实时 · 稳定 · 工业级
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              智慧监测，<span className="text-cyan-400">先知先觉</span>守护工业安全
            </h1>
            <p className="mt-4 text-slate-300 md:text-lg">
              AIoT 一体化：从感知→传输→分析→决策→执行。覆盖<strong className="text-white">动设备</strong>、<strong className="text-white">配电房</strong>、<strong className="text-white">消防设施</strong>，实现预测性维护与无人值守。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#solutions" className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-medium hover:bg-cyan-500 shadow-cyan">查看方案</a>
              <a href="#cases" className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium hover:border-slate-500">典型案例</a>
            </div>
            <div className="mt-6 text-[12px] text-slate-400">
              私有化/本地化部署 · 多协议（RS485/MQTT/Ethernet） · 移动端运维 · 黑匣子存证
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-slate-800 bg-slate-900/60 p-4 card-glass">
              <div className="h-full w-full rounded-lg bg-slate-950/40 grid place-items-center text-slate-400 text-sm">
                平台大屏占位（可替换为演示截图/视频）
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-60 rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-cyan">
              <div className="text-xs text-slate-400">实时告警</div>
              <div className="mt-2 space-y-2 text-sm">
                <AlertRow label="配电房 A 相电压异常" level="预警" />
                <AlertRow label="2# 冷却泵 轴承温升" level="告警" />
                <AlertRow label="泵房末端压力偏低" level="预警" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-[1600px] px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">一体化智慧监测方案</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          工控级采集 + 工业网关 + 边云协同 + AI 诊断。支持多站点集中管理、能耗与碳强度分析、工单闭环。
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card title="动设备智慧监测"  desc="振动/温度/电流多源采集 · 健康指数 · 故障识别 · 预测性维护" href="#assets" />
          <Card title="配电房用电安全" desc="电能质量 · 弧光/局放 · 环境六参 · 智能派单 · 能耗/碳排" href="#power" />
          <Card title="消防设施智慧监测" desc="泵房水压/液位/温湿度 · 无人值守 · 专家库应急 · 黑匣子" href="#fire" />
        </div>
      </section>

      <Section id="assets" title="动设备智慧监测" subtitle="让设备先知先觉，提前 30–90 天预警">
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-sm text-slate-300">
            <li>感知层：加速度/温度/噪声/电流等高精度传感器</li>
            <li>网络层：Zigbee / RS485 / Ethernet / MQTT</li>
            <li>分析层：健康指数、趋势预测、根因诊断</li>
            <li>应用层：可视化大屏 + 工单闭环 + 移动端运维</li>
          </ul>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {['电机','泵','风机','压缩机','齿轮箱','减速机'].map(t => (
              <div key={t} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">{t}</div>
            ))}
            {[
              ['停机时间','-40%'],
              ['故障率','-70%'],
              ['巡检人力','-50%'],
              ['运维效率','+60%'],
            ].map(([k,v]) => (
              <div key={k} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 flex items-center justify-between">
                <span>{k}</span><span className="text-cyan-400 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="power" title="配电房用电安全智慧监测" subtitle="从供电走向智控：电气+环境+能效一体化">
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-sm text-slate-300">
            <li>电能质量：谐波、三相不平衡、电压暂降</li>
            <li>安全预警：弧光/局放、烟雾、水浸、温湿度</li>
            <li>能效与碳：分项计量、能耗趋势、碳强度</li>
            <li>运维闭环：异常→工单→指引→反馈→审核</li>
          </ul>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {['智慧园区','数据中心','医院','制造工厂','高校能源站','轨道交通'].map(t => (
              <div key={t} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">{t}</div>
            ))}
            {['可视化大屏','移动端告警','私有化部署','多协议对接'].map(t => (
              <div key={t} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">{t}</div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="fire" title="消防设施智慧监测" subtitle="无人值守 · 专家库策略 · 事件黑匣子">
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-sm text-slate-300">
            <li>数据感知：水压/流量/液位/温湿度/门禁/视频</li>
            <li>自动巡检：计划编排、远程巡检、异常派单</li>
            <li>安全保障：UPS、电源冗余、IP65 工业防护</li>
            <li>多端监控：Web + App + 大屏</li>
          </ul>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {['商业综合体','园区','医院','政府楼宇','地铁/枢纽','仓储物流'].map(t => (
              <div key={t} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">{t}</div>
            ))}
            {[
              ['事故率','-60%'],
              ['响应时间','-80%'],
              ['误报率','-85%'],
              ['维保效率','+50%'],
            ].map(([k,v]) => (
              <div key={k} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 flex items-center justify-between">
                <span>{k}</span><span className="text-cyan-400 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section id="cases" className="mx-auto max-w-[1600px] px-4 py-16 border-t border-slate-800/70">
        <h3 className="text-2xl font-semibold">典型案例</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {t:'制造工厂 · 预测性维护',d:'非计划停机 -38%，维修成本 -15%'},
            {t:'数据中心 · 智能配电',d:'PUE 由 1.65 优化到 1.42'},
            {t:'园区泵房 · 智慧消防',d:'响应时间 -80%，误报率 -85%'},
          ].map(c => (
            <div key={c.t} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 card-glass">
              <div className="font-medium">{c.t}</div>
              <div className="mt-2 text-sm text-slate-300">{c.d}</div>
              <div className="mt-4 text-sm text-cyan-300">查看详情 →</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1600px] px-4 py-16 border-t border-slate-800/70">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-semibold">联系我们</h3>
            <p className="mt-3 text-slate-300">预约演示 / 获取行业方案 / 合作咨询。提交后我们将在 1 个工作日内联系您。</p>
            <form
  className="mt-6 grid grid-cols-1 gap-4"
  action="https://formsubmit.co/793313652@qq.com"
  method="POST"
>
  {/* FormSubmit 配置 */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_subject" value="NS智科官网 · 新客户线索" />
  {/* 提交成功后跳转（本地开发可跳到首页锚点；部署后可换成 /thanks 页面） */}
  <input type="hidden" name="_next" value="http://localhost:3000/#thanks" />

  {/* 你的字段（注意要有 name） */}
  <input name="company" placeholder="公司名称"
         className="bg-slate-900/70 border border-slate-800 rounded-lg px-4 py-3 text-sm outline-none focus:border-slate-600"/>
  <input name="contact" placeholder="联系人"
         className="bg-slate-900/70 border border-slate-800 rounded-lg px-4 py-3 text-sm outline-none focus:border-slate-600"/>
  <input name="phone" placeholder="电话/微信"
         className="bg-slate-900/70 border border-slate-800 rounded-lg px-4 py-3 text-sm outline-none focus:border-slate-600"/>
  <textarea name="message" placeholder="需求描述（可选）" rows={4}
         className="bg-slate-900/70 border border-slate-800 rounded-lg px-4 py-3 text-sm outline-none focus:border-slate-600"/>
  {/* 反垃圾字段（用户不会看到） */}
  <input type="text" name="_honey" className="hidden" />
  <button type="submit" className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-medium hover:bg-cyan-500 shadow-cyan">
    提交信息
  </button>
  <div className="text-xs text-slate-400">
    提交即同意用于商洽联系；数据仅用于售前沟通。
  </div>
</form>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 card-glass">
            <div className="text-sm text-slate-300">更多方式</div>
            <div className="mt-3 text-sm text-slate-300 space-y-2">
              <div>邮箱：contact@niusukeji.com（示例）</div>
              <div>地址：上海（可替换为实际地址）</div>
              <div>公众号：NS智科（扫码关注获取资料）</div>
            </div>
            <div className="mt-6 h-40 rounded-lg border border-slate-800 grid place-items-center text-slate-500 text-sm">公众号二维码占位</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/70">
        <div className="mx-auto max-w-[1600px] px-4 py-8 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} NS智科 · NIUSU Technology</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">隐私政策</a>
            <a href="#" className="hover:text-slate-200">服务条款</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* 组件们 —— 都在同一个文件里，注意每个函数都有“成对的大括号” */
function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a href={href} className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/70 transition card-glass">
      <div className="text-lg font-medium">{title}</div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
      <div className="mt-4 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition">了解更多 →</div>
    </a>
  );
}

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-[1600px] px-4 py-16 border-t border-slate-800/70">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function AlertRow({ label, level }: { label: string; level: '预警' | '告警' }) {
  const color = level === '告警' ? 'text-rose-300' : 'text-amber-300';
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="truncate">{label}</span>
      <span className={color}>{level}</span>
    </div>
  );
}
