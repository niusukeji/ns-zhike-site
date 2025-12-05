export default function CasesPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', color: '#1f2933' }}>
      {/* 顶部横幅 */}
      <section
        style={{
          height: '220px',
          background: 'linear-gradient(90deg, #0070f3, #00c4ff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>经典案例</h1>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>
            持续更新典型项目实践，展示动设备、配电房与消防智慧监测的落地成效
          </p>
        </div>
      </section>

      {/* 内容主体 */}
      <section
        style={{
          maxWidth: '900px',
          margin: '40px auto 80px',
          padding: '0 20px',
          lineHeight: 1.8,
        }}
      >
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 600,
            marginBottom: '16px',
            borderLeft: '4px solid #0070f3',
            paddingLeft: '12px',
          }}
        >
          案例内容正在整理中……
        </h2>

        <p style={{ marginBottom: '10px' }}>
          后续会在这里陆续发布不同行业的典型项目案例，例如：
        </p>
        <ul style={{ paddingLeft: '22px', marginBottom: '16px' }}>
          <li>钢铁、化工、能源等流程工业的动设备预测性维护实践</li>
          <li>大型园区、数据中心的配电房用电安全与能效优化项目</li>
          <li>商业综合体、工业园区的消防设施智慧监测改造项目</li>
        </ul>
        <p>
          如需提前了解我们在相关行业的成功案例，欢迎通过首页的<strong> 联系我们 </strong>
          模块，拨打咨询电话或添加公众号<strong>“NS智科”</strong>与我们取得联系。
        </p>
      </section>
    </main>
  );
}
