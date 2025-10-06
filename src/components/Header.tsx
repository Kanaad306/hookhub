export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              HookHub
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Discover and browse open-source Claude Code hooks
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
