export default function ThanksPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-white">信息已提交 ✅</h1>
        <p className="mt-3 text-slate-300">
          我们已收到您的需求，商务顾问将于 1 个工作日内与您联系。
        </p>
        <a
          href="/"
          className="inline-block mt-8 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-5 py-3 text-sm font-medium"
        >
          返回首页
        </a>
      </div>
    </main>
  );
}
