export default function Footer() {
  return (
    <footer className="py-8 px-8 bg-gray-800 text-white text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} SpendTracker. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        <a
          href="https://t.me/spendtracker_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
}
