// app/cases/page.tsx

export default function CasesPage() {
  return (
    <>
      {/* 顶部导航（和首页一致，只是“经典案例”高亮） */}
      <header>
        <div className="container">
          <nav>
            <a href="/" className="logo">
              <i className="fas fa-network-wired" /> 牛苏科技
            </a>
            <ul className="nav-links">
              <li>
                <a href="/">首页</a>
              </li>
              <li>
                <a href="/#solutions">解决方案</a>
              </li>
              <li>
                <a href="/cases" className="active">
                  经典案例
                </a>
              </li>
              <li>
                <a href="/#about">关于我们</a>
              </li>
              <li>
                <a href="/#contact" className="btn-contact">
                  联系我们
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* 顶部大图横幅 */}
        <section className="case-hero">
          <div className="container">
            <h1>经典成功案例</h1>
            <p>见证数智化转型的力量，看看我们如何为客户创造价值。</p>
          </div>
        </section>

        {/* 案例卡片网格 */}
        <section className="case-section container">
          <div className="case-grid">
            {/* 卡片 1 —— 动设备监测 */}
            <a
              href="https://mp.weixin.qq.com/s/fTBP9ul72lxhDaD7I3yqMA"
              target="_blank"
              rel="noopener noreferrer"
              className="case-card"
            >
              <div
                className="case-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                }}
              >
                <span className="case-tag">动设备监测</span>
              </div>
              <div className="case-content">
                <span className="case-date">2025-12-10</span>
                <h3>泰兴扬子医药化工动设备智慧监测</h3>
                <p>
                  通过部署“灵瞳智能系统”，对离心机、循环泵、清洗泵、机封水泵和冷冻机、空压机等动设备进行24小时的连续监测，真正实现从“事后维修”向“智能监测、智能运维”的跨越。
                </p>
                <div className="read-more">
                  阅读公众号原文 <i className="fas fa-arrow-right" />
                </div>
              </div>
            </a>

            {/* 卡片 2 —— 配电房安全 */}
            <a
              href="https://mp.weixin.qq.com/s/你的文章链接2"
              target="_blank"
              rel="noopener noreferrer"
              className="case-card"
            >
              <div
                className="case-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                }}
              >
                <span className="case-tag">配电房安全</span>
              </div>
              <div className="case-content">
                <span className="case-date">2023-10-22</span>
                <h3>商业综合体配电房“无人值守”改造案例</h3>
                <p>
                  利用 AI 视频巡检与无线测温技术，帮助客户实现配电室 24
                  小时无人化管理，运维效率提升 80%。
                </p>
                <div className="read-more">
                  阅读公众号原文 <i className="fas fa-arrow-right" />
                </div>
              </div>
            </a>

            {/* 卡片 3 —— 智慧消防 */}
            <a
              href="https://mp.weixin.qq.com/s/你的文章链接3"
              target="_blank"
              rel="noopener noreferrer"
              className="case-card"
            >
              <div
                className="case-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1599052528761-a02901c0c6f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                }}
              >
                <span className="case-tag">智慧消防</span>
              </div>
              <div className="case-content">
                <span className="case-date">2023-09-08</span>
                <h3>某物流园区智慧消防系统落地应用</h3>
                <p>
                  解决了园区面积大、消防水压监测难的问题。系统上线首月即发现
                  3 处管网泄漏隐患，确保消防合规。
                </p>
                <div className="read-more">
                  阅读公众号原文 <i className="fas fa-arrow-right" />
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 牛苏科技 (NiuSu Tech) 版权所有</p>
      </footer>
    </>
  );
}
