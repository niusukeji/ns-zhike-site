export default function ContactPage() {
  return (
    <div>
      {/* 顶部标题条，复用蓝色 solution-hero 样式 */}
      <section className="solution-hero">
        <div className="container">
          <h1>合作与咨询</h1>
          <p>请留下您的联系方式和需求，我们的工程师会尽快与您取得联系。</p>
        </div>
      </section>

      {/* 合作与咨询表单区域，复用之前的深蓝背景样式 */}
      <section className="contact">
        <div className="container">
          <h2>填写合作与咨询信息</h2>

          <div className="contact-layout">
            {/* 左侧说明文字 */}
            <div className="contact-layout-left">
              <p style={{ marginBottom: 12 }}>
                适用场景：动设备智慧监测、配电房用电安全监测、消防设施智慧监测改造等项目咨询。
              </p>
              <p style={{ marginBottom: 12 }}>
                建议您尽量详细地描述现场情况（例如：设备类型、配电房数量、泵房位置、现有系统等），
                方便我们为您评估技术方案和实施路径。
              </p>
              <p style={{ fontSize: 13, color: "#9ca3af" }}>
                * 您填写的信息仅用于与牛苏科技的技术沟通，我们会严格保密。
              </p>
            </div>

            {/* 右侧表单 */}
            <div className="contact-layout-right">
              {/* 简单方式：使用 mailto，把表单内容发到邮箱
                  说明：
                  1）这个方式会在访客电脑上弹出默认邮件客户端（Outlook/邮箱APP等），
                     不是“后台静默发送”，但对目前静态网站来说是最简单可靠的方式。
                  2）请把下面的 contact@niusu-keji.com 换成你自己的邮箱。
               */}
              <form
                className="cta-form"
                method="POST"
                action="mailto:contact@niusu-keji.com"
                encType="text/plain"
              >
                <div className="cta-form-group">
                  <label htmlFor="name">姓名</label>
                  <input
                    id="name"
                    name="姓名"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

                <div className="cta-form-group">
                  <label htmlFor="company">公司 / 单位</label>
                  <input
                    id="company"
                    name="公司或单位"
                    placeholder="例如：XX集团设备部 / XX市消防大队"
                  />
                </div>

                <div className="cta-form-group">
                  <label htmlFor="phone">联系电话</label>
                  <input
                    id="phone"
                    name="联系电话"
                    placeholder="手机或座机号码"
                    required
                  />
                </div>

                <div className="cta-form-group">
                  <label htmlFor="wechat">微信号（选填）</label>
                  <input
                    id="wechat"
                    name="微信号"
                    placeholder="方便后续技术沟通"
                  />
                </div>

                <div className="cta-form-group">
                  <label htmlFor="topic">关注方案</label>
                  <select id="topic" name="关注方案">
                    <option value="动设备智慧监测">动设备智慧监测</option>
                    <option value="配电房用电安全监测">
                      配电房用电安全监测
                    </option>
                    <option value="消防设施智慧监测">消防设施智慧监测</option>
                    <option value="其他/待沟通">其他 / 待沟通</option>
                  </select>
                </div>

                <div className="cta-form-group">
                  <label htmlFor="desc">需求描述</label>
                  <textarea
                    id="desc"
                    name="需求描述"
                    placeholder="请简单描述项目场景、现状问题和主要目标，例如：配电房改造、动设备故障多发、泵房需要远程监控等。"
                    rows={4}
                  />
                  <small>当前为示例表单，发送时会在您本机自动打开邮件软件。</small>
                </div>

                <button type="submit">提交意向</button>
              </form>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: "#9ca3af",
                  textAlign: "right",
                }}
              >
                表单发送目标邮箱：contact@niusu-keji.com（可在代码中修改）
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
