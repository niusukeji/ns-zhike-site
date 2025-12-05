export default function Website() {
  return (
    <div>
      {/* 顶部导航 */}
      <header>
        <div className="container">
          <nav>
            <a href="#hero" className="logo">
              <i className="fas fa-network-wired" /> 牛苏科技
            </a>
            <ul className="nav-links">
              <li>
                <a href="#hero">首页</a>
              </li>
              <li>
                <a href="#solutions">解决方案</a>
              </li>
              <li>
                <a href="#about">关于我们</a>
              </li>
              <li>
                <a className="hover:text-white" href="/contact">
  联系我们
</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 首屏横幅 */}
      <section id="hero" className="hero">
        <div className="container hero-content">
          <h1>智联万物，预见未来</h1>
          <p>
            专业的工业物联网智慧监测方案提供商，为您守护动设备、配电房与消防设施安全，
            帮助企业从传统巡检走向预测性维护与智能运维。
          </p>
          <a href="#solutions" className="hero-btn">
            探索解决方案
          </a>
        </div>
      </section>

      {/* 三大核心业务板块 */}
      <section id="solutions" className="solutions container">
        <div className="section-title">
          <h2>三大核心业务板块</h2>
          <div className="line" />
        </div>

        <div className="solution-grid">
          {/* 动设备智慧监测 */}
          <a href="/solutions/machinery" className="card">
            <div className="card-icon">
              <i className="fas fa-cogs" />
            </div>
            <h3>动设备智慧监测</h3>
            <p>
              面向电机、泵、风机、压缩机、齿轮箱等关键设备，通过振动、温度、电流等多源数据采集，
              结合 AI 算法实现故障识别与健康评估，支持预测性维护。
            </p>
            <ul className="card-list">
              <li>
                <i className="fas fa-check-circle" />
                振动 / 温度 / 电流实时采集
              </li>
              <li>
                <i className="fas fa-check-circle" />
                轴承、齿轮等典型故障模式识别与预警
              </li>
              <li>
                <i className="fas fa-check-circle" />
                设备全生命周期健康档案与报表
              </li>
            </ul>
          </a>

          {/* 配电房电力安全监测 */}
          <a href="/solutions/power" className="card">
            <div className="card-icon">
              <i className="fas fa-bolt" />
            </div>
            <h3>配电房用电安全监测</h3>
            <p>
              24 小时在线监测配电柜、电缆、母线及配电环境，从电气安全到能效管理、碳排统计，
              实现配电房少人 / 无人值守。
            </p>
            <ul className="card-list">
              <li>
                <i className="fas fa-check-circle" />
                局放 / 接头温度 / 线缆发热监测
              </li>
              <li>
                <i className="fas fa-check-circle" />
                环境温湿度 / 水浸 / 烟雾联动监控
              </li>
              <li>
                <i className="fas fa-check-circle" />
                能效分析与多维度用电报表
              </li>
            </ul>
          </a>

          {/* 消防设施智慧监测 */}
          <a href="/solutions/fire" className="card">
            <div className="card-icon">
              <i className="fas fa-fire-extinguisher" />
            </div>
            <h3>消防设施智慧监测</h3>
            <p>
              让消防设施“开口说话”，实时掌握水箱液位、管网水压、消防泵运行及泵房环境，
              确保关键时刻消防给水系统可靠可用。
            </p>
            <ul className="card-list">
              <li>
                <i className="fas fa-check-circle" />
                水箱液位 / 管网水压 / 流量在线监测
              </li>
              <li>
                <i className="fas fa-check-circle" />
                烟感 / 喷淋末端压力 / 泵房环境监测
              </li>
              <li>
                <i className="fas fa-check-circle" />
                告警信息秒级推送与事件追溯
              </li>
            </ul>
          </a>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h3>关于牛苏科技</h3>
              <p>
                <strong>牛苏科技（Niusu Tech）</strong>
                专注于工业物联网与智慧运维，聚焦“动设备、配电房、消防设施”三大关键领域，
                提供从现场感知、边缘计算到云平台分析的一体化解决方案。
              </p>
              <p>
                团队成员拥有多年工业现场与项目实施经验，方案已在能源、化工、制造、公共建筑等多个行业落地，
                帮助客户降低故障率与运维成本，提升安全水平并满足合规要求。
              </p>
              <p>
                我们希望通过可靠的产品与专业的服务，让工业现场的每一台设备都“看得见、管得住、可预防”，
                成为企业在数字化与智能化升级道路上的长期合作伙伴。
              </p>
              <p
                style={{
                  marginTop: '20px',
                  color: 'var(--primary-color)',
                  fontWeight: 'bold',
                }}
              >
                愿景：成为您最值得信赖的工业安全智慧管家。
              </p>
            </div>
            <div className="about-img" />
          </div>
        </div>
      </section>

      {/* 联系我们 + 合作与咨询表单 */}
      <section id="contact" className="contact">
  <div className="container">
    <h2>联系我们</h2>

    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-phone-alt" />
        <p>
          业务咨询热线
          <br />
          <strong>021-1234-5678</strong>
        </p>
      </div>
      <div className="contact-item">
        <i className="fas fa-envelope" />
        <p>
          商务合作邮箱
          <br />
          <strong>contact@niusu-keji.com</strong>
        </p>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt" />
        <p>
          公司地址
          <br />
          <strong>中国 上海市某某科技园区 A 座</strong>
        </p>
      </div>
    </div>

    {/* 按钮：跳到 /contact 页面填写合作与咨询 */}
    <a href="/contact" className="hero-btn" style={{ marginTop: 20 }}>
      填写合作与咨询
    </a>
  </div>
</section>


      {/* 页脚 */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} 牛苏科技 (Niusu Tech) 版权所有 | 工业物联网 |
          智慧监测
        </p>
      </footer>
    </div>
  );
}
