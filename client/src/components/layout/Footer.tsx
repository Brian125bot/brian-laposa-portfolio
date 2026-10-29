import Mark from "@/components/Mark";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap flex flex-col gap-4 border-t border-paper/15 py-8 text-[0.875rem] text-paper/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Mark className="h-6 w-6" />
          <span>© {new Date().getFullYear()} Brian Laposa</span>
        </div>
        <a href="#top" className="w-fit transition-colors duration-200 hover:text-paper">
          Back to top
        </a>
      </div>
    </footer>
  );
}
