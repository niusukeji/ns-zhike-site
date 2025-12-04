export default function Website() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 industrial-bg">
      {/* 背景网格特效 */}
      <div className="fx-gridflow" aria-hidden />

      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-[1200px] px-4 h-14 flex items-center justify-between">
          {/* 左侧 Logo + 品牌 */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-sky-400 grid place-items-center font-black text-slate-950">
              N
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-wide">NS智科</div>
              <div className="text-[10px] text-slate-400">
                工业智慧监测 · SMART INDUSTRIAL MONITORING
              </div>
            </div>
          </a>

          {/* 中间菜单 */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white" href="#solutions">
              方案
            </a>
            <a className="hover:text-white" href="#assets">
              动设备
            </a>
            <a className="hover:text-white" href="#power">
              配电安全
            </a>
            <a className="hover:text-white" href="#fire">
              智慧消防
            </a>
            <a className="hover:text-white" href="#cases">
              案例
            </a>
            <a className="hover:text-white" href="#contact">
              联系
            </a>
          </nav>

          {/* 右侧按钮 */}
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-sm font-medium shadow-cyan-500/40 shadow-lg"
          >
            获取方案
          </a>
        </div>
      </header>

      <main>
        {/* 顶部 Hero：总介绍 */}
        <section id="home" className="relative overflow-hidden border-b border-slate-900/80">
          <div className="hero-arc" />
          <div className="scanline" />
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-2 py-1 text-[11px] rounded bg-slate-900/70 ring-1 ring-slate-800">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="tracking-[0.2em] uppercase text-slate-300">
                  NS智科 · 工业智慧监测
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                智慧监测，先知先觉
                <br className="hidden md:block" />
                守护工业与园区安全
              </h1>

              <p className="text-slate-300 text-sm md:text-base">
                以 AI + IoT 为底座，从“感知–传输–分析–决策–运维”全链路赋能动设备、配电房、
                消防设施与智慧农业，帮助企业实现预测性维护、少人/无人值守与降本增效。
              </p>

              <ul className="text-sm text-slate-300 space-y-1">
                <li>· 动设备智慧监测 · 配电房用电安全 · 消防设施智慧监测 · 智慧农业</li>
                <li>· 支持私有化 / 本地化部署，满足安全与合规要求</li>
                <li>· 统一平台，一张图总览多站点、多系统运行状态</li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#solutions"
                  className="px-4 py-2 rounded-md bg-cyan-500 text-slate-950 text-sm font-medium hover:bg-cyan-400"
                >
                  查看解决方案
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-md border border-slate-700 text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-200"
                >
                  获取定制方案
                </a>
              </div>
            </div>

            {/* 右侧简要亮点 */}
            <div className="space-y-4">
              <div className="grid gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="text-xs text-slate-400 mb-1">核心能力</div>
                  <div className="text-sm text-slate-100">
                    振动、温度、电流、电压、压力、液位、环境等多源数据采集，结合算法模型实现设备状态评估与故障预警。
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="text-xs text-slate-400 mb-1">运维模式</div>
                  <div className="text-sm text-slate-100">
                    从“事后抢修”升级为“预测性维护”，告警联动工单，形成闭环管理和设备健康档案。
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="text-xs text-slate-400 mb-1">适用行业</div>
                  <div className="text-sm text-slate-100">
                    能源、化工、钢铁、制造、医疗、教育、园区/园林、公共建筑等多行业场景。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 一体化方案总览 */}
        <section
          id="solutions"
          className="border-b border-slate-900/80 bg-slate-950/80"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 space-y-10">
            <header className="text-center space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                SOLUTIONS
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                一体化智慧监测整体解决方案
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
                围绕“动设备–配电房–消防设施–智慧农业”，构建统一的智慧监测平台。
                打通感知、网络、平台、应用各层，实现多系统数据融合与一体化运维管理。
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
              {/* 动设备 */}
              <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
                <h3 className="text-lg font-semibold">动设备智慧监测</h3>
                <p className="text-sm text-slate-300">
                  面向电机、泵、风机、压缩机、齿轮箱等旋转设备，通过振动 + 温度 +
                  电流等多源数据采集，结合 AI 诊断和健康指数，实现提前预警，减少意外停机与抢修成本。
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>· 在线状态监测 · 故障模式识别 · 预测性维护</li>
                  <li>· 支持有线/无线采集，适配复杂现场</li>
                </ul>
                <a
                  href="#assets"
                  className="inline-flex text-sm text-cyan-300 hover:text-cyan-200"
                >
                  查看动设备方案详情 →
                </a>
              </article>

              {/* 配电房 */}
              <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
                <h3 className="text-lg font-semibold">
                  配电房用电安全智慧监测
                </h3>
                <p className="text-sm text-slate-300">
                  围绕中低压配电柜、母线、电缆接头与环境六参，打造“电气 + 环境 +
                  能效 + 碳排”一体化安全监控与能效管理系统，实现少人/无人值守配电房。
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>· 电气安全 · 环境监控 · 能效与碳排监测</li>
                  <li>· 一张图总览多站点配电房运行状态</li>
                </ul>
                <a
                  href="#power"
                  className="inline-flex text-sm text-cyan-300 hover:text-cyan-200"
                >
                  查看配电房方案详情 →
                </a>
              </article>

              {/* 消防设施 */}
              <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
                <h3 className="text-lg font-semibold">消防设施智慧监测</h3>
                <p className="text-sm text-slate-300">
                  以消防泵房给水系统为核心，覆盖水池、水泵、管网、阀门、泵房环境与电气控制，
                  支持远程监控、智能巡检、故障预警与黑匣子存证，保障关键时刻“拉得出、打得赢”。
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>· 泵房状态在线 · 一键总览多泵房运行</li>
                  <li>· 告警联动维保工单，形成闭环管理</li>
                </ul>
                <a
                  href="#fire"
                  className="inline-flex text-sm text-cyan-300 hover:text-cyan-200"
                >
                  查看消防方案详情 →
                </a>
              </article>

              {/* 智慧农业 */}
              <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
                <h3 className="text-lg font-semibold">智慧农业与园区场景</h3>
                <p className="text-sm text-slate-300">
                  基于“天空地一体化”感知体系（气象站、土壤传感器、视频与遥感），
                  打造从耕、种、管、收到仓储、冷链的全链路数字农业解决方案，帮助园区与农企实现标准化生产与品牌化运营。
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>· 作物长势监测 · 智慧灌溉 · 病虫害预警</li>
                  <li>· 冷链与仓储环境在线监管</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* 动设备智慧监测 */}
        <section
          id="assets"
          className="border-b border-slate-900/80 bg-gradient-to-b from-slate-950 to-slate-900"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 space-y-8">
            <header className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold">
                动设备智慧监测整体解决方案
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-3xl">
                面向电机、泵、风机、压缩机、齿轮箱等关键旋转设备，通过多源在线监测 + 算法诊断 +
                预测性维护，减少非计划停机，避免突发故障带来的停产与安全事故。
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">业务痛点</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 巡检频次有限，隐患发现滞后</li>
                  <li>· 故障多为“突发停机”，停产损失大</li>
                  <li>· 维保依赖经验，缺乏量化依据</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">方案架构</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 感知层：无线振动温度传感器、电流互感器、转速传感器等</li>
                  <li>· 传输层：工业网关 + RS485/以太网/4G/5G</li>
                  <li>· 平台层：设备健康评估、故障诊断与趋势分析</li>
                  <li>· 应用层：告警、工单、报表、大屏与移动端</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">方案价值</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 非计划停机明显减少，生产更稳定</li>
                  <li>· 运维效率提升，巡检工作量下降</li>
                  <li>· 故障位置与原因清晰可追溯</li>
                  <li>· 形成完整的设备健康档案与经验知识库</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 配电房用电安全 */}
        <section
          id="power"
          className="border-b border-slate-900/80 bg-slate-950/90"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 space-y-8">
            <header className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold">
                配电房用电安全智慧监测方案
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-3xl">
                围绕配电房一次、二次设备及环境安全，构建“电气安全 + 环境监测 + 能效与碳排管理”的一体化平台，
                支持多站点多配电房统一监管，实现少人/无人值守。
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">监测内容</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 电压、电流、功率、谐波、三相不平衡</li>
                  <li>· 开关状态、电源切换、母线温度、电缆接头</li>
                  <li>· 环境温湿度、水浸、烟雾、门禁等</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">平台功能</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 一张图总览多配电房运行状态</li>
                  <li>· 告警分级、闭环处理与追溯</li>
                  <li>· 回路级能效分析与电能质量诊断</li>
                  <li>· 符合双碳考核的能耗与碳排统计报表</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">应用价值</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 提升供电可靠性，降低电气火灾风险</li>
                  <li>· 让迎检和合规工作有据可查</li>
                  <li>· 挖掘节能空间，助力企业双碳目标</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 消防设施智慧监测 */}
        <section
          id="fire"
          className="border-b border-slate-900/80 bg-gradient-to-b from-slate-950 to-slate-900"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 space-y-8">
            <header className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold">
                消防设施智慧监测与消防泵房给水集控系统
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-3xl">
                把消防泵房当作“动态生命体”，通过在线监测、智能预警与数字维保，实现泵房从“黑箱管理”走向“透明可控”，
                确保关键时刻消防给水系统可靠可用。
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">监测范围</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 水池/水箱液位、管网压力与流量</li>
                  <li>· 消防泵、电机电流、轴承温度与振动</li>
                  <li>· 阀门状态、泵房环境温湿度与门禁</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">系统功能</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 一屏总览多泵房运行状态与历史趋势</li>
                  <li>· 异常压力、电源故障等自动预警</li>
                  <li>· 泵房维保计划、巡检记录与工单闭环</li>
                  <li>· 运行黑匣子记录，为责任认定提供依据</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold">应用价值</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>· 避免“战时掉链子”，提升消防保障能力</li>
                  <li>· 降低泵房运维盲区和管理风险</li>
                  <li>· 支撑园区/城市级智慧消防一网统管</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 典型案例 */}
        <section id="cases" className="border-b border-slate-900/80 bg-slate-950">
          <div className="mx-auto max-w-[1200px] px-4 py-16 space-y-8">
            <header className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold">典型应用案例</h2>
              <p className="text-sm md:text-base text-slate-300 max-w-3xl">
                方案已在能源、化工、制造、公共建筑等多个行业场景落地应用。
                下面仅展示部分典型项目（可根据实际情况替换为真实项目名称）。
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
                <h3 className="text-lg font-semibold">某能源集团 · 洗煤厂动设备监测</h3>
                <p className="text-sm text-slate-300">
                  对提升机、刮板机、水泵等关键设备实施在线监测与故障诊断，非计划停机时间显著下降，
                  维护方式从“抢修”转向“计划性检修”。
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
                <h3 className="text-lg font-semibold">高校/医院 · 配电房用电安全</h3>
                <p className="text-sm text-slate-300">
                  在校园和三甲医院多座配电房部署智慧配电平台，统一监测电气安全与能耗指标，
                  提升供电连续性并为能耗管理提供数据支撑。
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
                <h3 className="text-lg font-semibold">大型场馆与交通枢纽 · 消防泵房集控</h3>
                <p className="text-sm text-slate-300">
                  对体育场馆、高铁站等场所的消防泵房进行集中监控和数字维保，
                  大幅提升消防系统的可视化管理和应急响应能力。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section id="contact" className="bg-slate-950">
          <div className="mx-auto max-w-[1200px] px-4 py-16 grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">合作与咨询</h2>
              <p className="text-sm md:text-base text-slate-300">
                如果你正在规划动设备运维优化、配电房改造、消防提升或智慧农业项目，
                欢迎与我们联系，我们可以根据你的行业与现场实际情况，提供定制化的整体方案建议。
              </p>
              <div className="space-y-2 text-sm text-slate-300">
                <p>建议提供的信息：</p>
                <ul className="space-y-1">
                  <li>· 所在行业与项目阶段（新建 / 改造）</li>
                  <li>· 关注模块（动设备 / 配电房 / 消防 / 农业）</li>
                  <li>· 当前主要痛点或目标（安全、合规、降本、双碳等）</li>
                </ul>
              </div>

              {/* 这里把下面的联系方式改成你的真实信息 */}
              <div className="space-y-1 text-sm text-slate-300">
                <p>公司：上海牛苏科技有限公司（NS智科）</p>
                <p>邮箱：example@niusukeji.com</p>
                <p>电话：+86-000-0000-0000</p>
                <p>地址：可填写国内公司地址 / 加拿大办公地址</p>
              </div>
            </div>

            {/* 简单表单（前端展示用，不接后端一样可以） */}
            <form className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="space-y-1">
                <label className="text-sm text-slate-200">姓名</label>
                <input
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-200">公司/单位</label>
                <input
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                  placeholder="例如：XX集团/XX园区"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-200">联系方式</label>
                <input
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                  placeholder="手机号或邮箱"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-200">关注方案</label>
                <select className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-500">
                  <option>动设备智慧监测</option>
                  <option>配电房用电安全</option>
                  <option>消防设施智慧监测</option>
                  <option>智慧农业 / 其他</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-200">需求描述</label>
                <textarea
                  rows={4}
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-500 resize-none"
                  placeholder="简单描述你的项目背景、现场情况和目标，例如：配电房改造、动设备过多故障、消防泵房需要远程监控等。"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-cyan-600 hover:bg-cyan-500 py-2 text-sm font-medium text-slate-950"
              >
                提交意向（示意按钮）
              </button>
              <p className="text-[11px] text-slate-500">
                当前为展示页面，提交按钮仅做示意。正式项目中可对接邮件或后端接口。
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/80 bg-slate-950 py-4">
        <div className="mx-auto max-w-[1200px] px-4 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} NS智科 / 上海牛苏科技有限公司</span>
          <span>工业智慧监测 · 智能运维 · 配电安全 · 智慧消防 · 智慧农业</span>
        </div>
      </footer>
    </div>
  );
}
