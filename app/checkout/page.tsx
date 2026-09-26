export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] pt-32 pb-24 flex items-center justify-center">
      <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center max-w-md w-full">
        <h1 className="font-serif text-3xl font-bold text-[#0c1a2e] mb-4">Checkout</h1>
        <p className="text-gray-500 mb-8">
          This is a placeholder for the headless Shopify checkout integration.
        </p>
        <a href="/" className="inline-block bg-[#0c1a2e] text-white font-bold py-3 px-6 rounded-xl hover:bg-ocean-blue transition-colors">
          Return to Home
        </a>
      </div>
    </main>
  );
}
