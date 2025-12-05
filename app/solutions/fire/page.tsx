export default function FireSolutionPage() {
  return (
    <div>
      {/* 顶部横幅 —— 统一蓝色背景 */}
      <section className="solution-hero">
        <div className="container">
          <h1>消防设施智慧监测方案</h1>
          <p>让消防设施真正“用得上、打得赢”，关键时刻不掉链子。</p>
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
            牛苏科技的消防设施智慧监测系统，以消防泵房给水系统为核心，
            覆盖水池 / 水箱、消防泵、管网、阀门以及泵房环境和电源等关键环节，
            实现对消防给水系统的在线监控和智能运维。
          </p>
          <p>
            系统把传统“建成就算完成”的消防设施，变成“持续在线的监控对象”，
            让管理人员随时知道水源是否充足、水压是否达标、泵组是否可靠，
            真正做到心中有数、关键时刻有底气。
          </p>
        </div>

        {/* 核心技术亮点 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-fire-extinguisher"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            核心技术亮点
          </h3>

          <div className="feature-grid">
            <div className="feature-item">
              <i className="fas fa-tint" />
              <h4>水源与水压监测</h4>
              <p>
                持续监测水池 / 水箱液位、管网水压和流量，及时发现缺水、压力不足、回水异常等问题，
                保障“有水、有压、可持续”。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-pump-soap" />
              <h4>消防泵运行监控</h4>
              <p>
                采集泵启停状态、电机电流、轴承温度和振动等数据，
                发现“起不来、停不下、转不顺”的异常工况，提前安排检修。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-toggle-on" />
              <h4>阀门与控制联动</h4>
              <p>
                监控关键阀门开闭状态和控制柜电源 / 切换状态，
                防止“阀门被误关”“电源在检修位”等人为风险。
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-video" />
              <h4>泵房环境与安防</h4>
              <p>
                集成泵房温湿度、烟雾、门禁与视频监控，
                远程就像“站在泵房里”一样巡检，异常情况一目了然。
              </p>
            </div>
          </div>
        </div>

        {/* 适用行业与场景 */}
        <div className="content-block">
          <h3>
            <i
              className="fas fa-city"
              style={{ color: "var(--primary-color)", marginRight: 8 }}
            />
            适用行业与场景
          </h3>
          <p>适用于对消防给水可靠性要求较高的各类建筑与区域，典型包括：</p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: 20,
              color: "#555",
              marginTop: 10,
            }}
          >
            <li>
              <strong>大型公共建筑：</strong>
              商业综合体、购物中心、超高层写字楼、会展中心、医院、学校等。
            </li>
            <li>
              <strong>交通枢纽与地下空间：</strong>
              地铁站、地下车库、隧道、火车站、机场航站楼等人流密集场所。
            </li>
            <li>
              <strong>工业园区与石化装置：</strong>
              化工园区、危险化学品仓储、精细化工装置区等高风险区域。
            </li>
            <li>
              <strong>仓储与冷链物流：</strong>
              大型立体库、冷库、物流园区、电商仓储中心等高货值场所。
            </li>
            <li>
              <strong>城市级 / 园区级智慧消防：</strong>
              需要对多处泵房和消防水系统统一监管的城市管理部门和园区管委会。
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
              <strong>关键时刻“不掉链子”：</strong>
              在平时就把问题找出来解决掉，真正做到“平时多流汗，战时少流泪”。
            </li>
            <li>
              <strong>泵房运维更轻松：</strong>
              远程巡检代替大量到现场“看一圈”的工作，精力集中在处理重点隐患上。
            </li>
            <li>
              <strong>形成消防“黑匣子”：</strong>
              系统完整记录关键动作和运行状态，为事故调查、责任认定和保险理赔提供依据。
            </li>
            <li>
              <strong>迎检更有底气：</strong>
              面对主管部门检查，可以直接出示系统运行记录和报表，
              证明消防设施“不是摆设，而是在持续受管控”。
            </li>
            <li>
              <strong>为智慧消防平台提供数据底座：</strong>
              通过标准接口接入园区 / 城市级平台，实现“一张图看所有泵房”的集中管理。
            </li>
          </ul>
        </div>
      </section>

      {/* 底部 CTA */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>提升消防泵房的“战时”保障能力</h2>
          <p style={{ marginBottom: 20, fontSize: 18 }}>
            欢迎联系牛苏科技，根据项目类型与现状，我们可以先从重点泵房试点改造，
            再逐步推广至全园区 / 全城市，实现消防设施智慧监管。
          </p>
         <a href="/contact" className="hero-btn" style={{ marginTop: 10 }}>
  免费预约演示
</a>

        </div>
      </section>
    </div>
  );
}
