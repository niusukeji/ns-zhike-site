export default function MachinerySolutionPage() {
  return (
    <div>
      {/* 顶部横幅 */}
      <section className="solution-hero">
        <div className="container">
          <h1>动设备智慧监测解决方案</h1>
          <p>从“事后维修”到“预测维护”，延长设备寿命，保障生产连续性。</p>
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
            牛苏科技的动设备智慧监测系统，针对电机、风机、水泵、压缩机、齿轮箱等旋转设备，
            利用无线工业传感器采集高频振动、温度、电流等关键运行参数，
            配合自研的 AI 智能诊断模型，实时分析设备健康状态。
          </p>
          <p>
            系统可以在“人耳听不见、人眼看不到”的阶段识别早期故障，
            在设备发生非计划停机前数周甚至数月给出预警，
            帮助企业从“坏了赶紧修”转向“算好了再修”，实现真正的预测性维护。
          </p>
        </div>

        {/* 核心技术亮点 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-cogs"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            核心技术亮点
          </h3>

          <div className="feature-grid">
            <div className="feature-item">
              <i className="fas fa-microchip" />
              <h4>AI 智能诊断</h4>
              <p>
                基于工业大数据训练的算法模型，
                自动识别不平衡、不对中、轴承故障、齿轮故障等典型问题，
                支持多工况、多转速下的诊断。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-wifi" />
              <h4>无线高频采集</h4>
              <p>
                工业级无线振动温度传感器，安装便捷，无需复杂布线，
                支持高频采样和边缘预处理，不漏掉任何细微异常。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-cloud" />
              <h4>云端 / 本地部署</h4>
              <p>
                既可采用 SaaS 云端模式，快速上线；也可在企业机房本地化部署，
                满足数据安全与合规的双重要求。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line" />
              <h4>多维度分析工具</h4>
              <p>
                提供时域、频域、包络分析、趋势曲线等专业工具，
                让设备工程师像看“心电图”一样看设备状态。
              </p>
            </div>
          </div>
        </div>

        {/* 适用行业与场景 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-industry"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            适用行业与场景
          </h3>
          <p>适用于所有依赖连续运转和关键机组的重资产行业，典型包括：</p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: 20,
              color: "#555",
              marginTop: 10,
            }}
          >
            <li>
              <strong>流程工业：</strong>
              石油化工、精细化工、煤化工、制药、造纸、食品饮料等连续生产场景。
            </li>
            <li>
              <strong>冶金与矿山：</strong>
              轧机、破碎机、球磨机、提升机、皮带输送机等重载设备。
            </li>
            <li>
              <strong>能源与公用工程：</strong>
              电厂辅机、循环水泵、冷却塔风机、供热 / 供冷站、HVAC 机组等。
            </li>
            <li>
              <strong>制造业产线：</strong>
              汽车、电子、装配线、机器人单元等关键工序设备。
            </li>
            <li>
              <strong>市政与基础设施：</strong>
              市政泵站、污水处理、供水厂、轨道交通机电系统等。
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
              <strong>给设备做“健康体检”：</strong>
              不等设备“倒下”再抢修，而是在亚健康状态就给出提醒，有计划地安排检修。
            </li>
            <li>
              <strong>减少非计划停机：</strong>
              通过提前预警，把突发停机变成可控的计划停机，让生产节奏更稳定。
            </li>
            <li>
              <strong>备件与人力更从容：</strong>
              提前知道哪些设备“快生病”，备件采购、检修资源统筹安排，不再手忙脚乱。
            </li>
            <li>
              <strong>经验变成数据资产：</strong>
              故障数据和处理经验沉淀在系统里，新人也能快速上手，减少对“老师傅”的依赖。
            </li>
            <li>
              <strong>为技改与更新提供依据：</strong>
              通过长期健康档案，清楚知道哪些设备该大修、哪些该更新，用数据说话。
            </li>
          </ul>
        </div>
      </section>

      {/* 底部 CTA（可以保留原来的 contact 深色背景版） */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>立即获取动设备专属解决方案</h2>
          <p style={{ marginBottom: 20, fontSize: 18 }}>
            欢迎与我们的技术团队交流，我们会结合现场情况，为您制定适合的动设备智慧监测试点与推广方案。
          </p>
          <a href="/contact" className="hero-btn" style={{ marginTop: 10 }}>
  免费预约演示
</a>

        </div>
      </section>
    </div>
  );
}
