export default function AdminAbout() {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=random"
          alt="Admin Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Suka</h2>
          <p className="text-gray-600 text-sm">Lead Developer & System Admin</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow text-gray-700 text-sm md:text-base leading-relaxed">
        This dashboard is part of a modular portfolio project built with React and Laravel 12. It showcases real-time cart logic, checkout flow, and live chart integration.
      </div>
    </div>
  );
}