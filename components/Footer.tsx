export default function Footer() {
  return (
    <footer className="bg-[#2F5D50] text-white py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <h3 className="text-2xl font-bold mb-2">
          Norfolk Bell Tent Hire
        </h3>

        <p className="text-white/70 mb-6">
          Luxury bell tents across Norfolk & Suffolk
        </p>

        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} Norfolk Bell Tent Hire. All rights reserved.
        </div>

      </div>
    </footer>
  );
}