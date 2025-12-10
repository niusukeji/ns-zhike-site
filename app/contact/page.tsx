'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    solution: '动设备智慧监测整体解决方案',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setMessage('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '839cfaea-72c1-493b-9912-0d9311f0b462', // ← 这里换成你自己的 key
          subject: '来自牛苏科技官网的合作咨询',
          from_name: '牛苏科技网站',
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage('提交成功，我们会尽快与您联系！');
        // 清空表单
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          solution: '动设备智慧监测整体解决方案',
          description: '',
        });
      } else {
        console.error(data);
        setStatus('error');
        setMessage('提交失败，请稍后重试或直接通过电话/邮箱联系我们。');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('网络异常，提交失败，请稍后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-950/90 border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-slate-950 font-bold">
              NS
            </span>
            <span className="font-semibold tracking-wide">牛苏科技</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="/" className="hover:text-white">
              返回首页
            </a>
            <a href="/cases" className="hover:text-white">
              经典案例
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          合作与咨询
        </h1>
        <p className="text-center text-slate-300 mb-10">
          请简单描述您的项目需求，提交后我们会将信息直接发送到邮箱并尽快与您取得联系。
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm text-slate-300">
                姓名 <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="请输入您的姓名"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                公司/单位
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="例如：XX化工、XX能源、XX园区"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                联系电话 <span className="text-cyan-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="便于我们与您电话沟通"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                邮箱
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="可选，接收方案文档"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              关注方案模块
            </label>
            <select
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option>动设备智慧监测整体解决方案</option>
              <option>配电房用电安全智慧监测方案</option>
              <option>消防设施智慧监测解决方案</option>
              <option>智慧农业监测与运维方案</option>
              <option>其它/综合解决方案</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              项目背景与需求简要描述 <span className="text-cyan-400">*</span>
            </label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="例如：目前设备/配电房/消防系统存在的痛点、计划改造时间、希望实现的目标等。"
            />
          </div>

          {status === 'success' && (
            <p className="text-sm text-emerald-400">{message}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-rose-400">{message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-48 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-2 text-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '提交中…' : '提交意向'}
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-500 text-center">
          温馨提示：点击“提交意向”后，表单内容会通过 Web3Forms
          安全加密传输并发送到我们的邮箱，不会公开展示。
        </p>
      </main>
    </div>
  );
}
