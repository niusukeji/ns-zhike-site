export default function PowerSolutionPage() {
  return (
    <div>
      {/* 顶部横幅 —— 不再加 style，统一用 globals.css 里的蓝色背景 */}
      <section className="solution-hero">
        <div className="container">
          <h1>配电房用电安全智慧监测方案</h1>
          <p>让每一间配电房“状态可视、风险可控、能效可算”。</p>
        </div>
      </section>

      {/* 详情主体 */}
      <section className="detail-section container">
        <h2>系统介绍与核心价值</h2>

        {/* 系统简介 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-info-circle"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            系统简介
          </h3>
          <p>
            牛苏科技的配电房用电安全智慧监测系统，围绕中低压配电柜、母线、电缆接头以及配电房环境，
            构建“电气安全 + 环境监控 + 能效管理”的一体化平台。
          </p>
          <p>
            系统通过对关键电气参数与隐患指标进行在线采集和智能分析，
            及时发现过载、接触不良、局放、环境异常等风险，
            降低电气火灾和停电事故发生率，同时为节能降耗和双碳管理提供可靠数据。
          </p>
        </div>

        {/* 核心技术亮点 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-bolt"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            核心技术亮点
          </h3>

          <div className="feature-grid">
            <div className="feature-item">
              <i className="fas fa-plug" />
              <h4>全量电气参数监测</h4>
              <p>
                实时采集电压、电流、功率、功率因数、谐波、三相不平衡等关键指标，
                配合电能质量分析模块，全面掌握配电运行状态。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-thermometer-half" />
              <h4>温升与局放预警</h4>
              <p>
                对母线、开关触头、电缆接头等位置进行温度和局部放电监测，
                提前发现发热、绝缘老化和接触不良问题。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-shield-alt" />
              <h4>环境与安防联动</h4>
              <p>
                将温湿度、水浸、烟雾、门禁、视频等信息统一接入，
                实现“少人 / 无人值守”下的安全防护。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-pie" />
              <h4>能效与碳排分析</h4>
              <p>
                支持分区、分回路能耗统计及碳排核算，
                帮助企业识别节能空间，为双碳目标提供数据基础。
              </p>
            </div>
          </div>
        </div>

        {/* 适用行业与场景 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-building"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            适用行业与场景
          </h3>
          <p>适用于所有对供电连续性、安全性要求较高的场所，典型包括：</p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: 20,
              color: "#555",
              marginTop: 10,
            }}
          >
            <li>
              <strong>工业企业：</strong>
              钢铁、化工、石化、电子制造、汽车整车及零部件工厂等，
              涉及大量生产线与电机负载的场景。
            </li>
            <li>
              <strong>数据中心与通信机房：</strong>
              互联网数据中心、运营商机房、金融行业机房等，对供电影响极其敏感的场所。
            </li>
            <li>
              <strong>大型公共建筑：</strong>
              医院、学校、商业综合体、写字楼、展馆、体育场馆等城市关键设施。
            </li>
            <li>
              <strong>园区与基础设施：</strong>
              产业园区、轨道交通车站与区间变电所、市政水务和水处理厂等。
            </li>
            <li>
              <strong>新能源配套：</strong>
              分布式光伏升压站、储能站、风电场升压站等新型电力系统场景。
            </li>
          </ul>
        </div>

        {/* 应用价值 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-star"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            应用价值
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: 20,
              color: "#555",
              marginTop: 10,
            }}
          >
            <li>
              <strong>把配电房从“黑箱”变成“透明机房”：</strong>
              运行状态、隐患告警一屏掌握，远程也能看得清楚。
            </li>
            <li>
              <strong>减少停电事故与电气火灾：</strong>
              对高风险接点和设备提前预警，避免“突发跳闸”“发热起火”等重大事件。
            </li>
            <li>
              <strong>迎检更从容：</strong>
              检查时不再临时翻纸档，系统自动生成巡检记录、隐患整改和运行报表。
            </li>
            <li>
              <strong>巡检由“人找问题”变“系统提示问题”：</strong>
              运维人员精力集中在处理重点告警和优化工作上。
            </li>
            <li>
              <strong>支撑节能改造与双碳规划：</strong>
              用实际数据说明哪里浪费、哪里可以改，节能效果有据可查。
            </li>
          </ul>
        </div>
      </section>

      {/* 底部 CTA */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>获取配电房安全与能效优化方案</h2>
          <p style={{ marginBottom: 20, fontSize: 18 }}>
            无论是新建配电房还是存量改造，我们都可以根据现场情况给出分步实施建议，从试点到全覆盖稳步推进。
          </p>
          <a href="/contact" className="hero-btn" style={{ marginTop: 10 }}>
  免费预约演示
</a>

        </div>
      </section>
    </div>
  );
}
