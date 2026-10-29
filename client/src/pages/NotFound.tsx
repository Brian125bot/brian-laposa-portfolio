import Mark from "@/components/Mark";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-paper text-ink">
      <div className="wrap">
        <Mark className="h-10 w-10" />
        <h1 className="h2 mt-10">No peak at this address.</h1>
        <p className="prose-serif mt-6 max-w-[32rem] text-graphite">
          The page you followed doesn&rsquo;t exist. It may have moved, or the
          link may be mistyped.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex h-12 items-center rounded-md bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors duration-200 hover:bg-endpoint"
        >
          Go to the home page
        </a>
      </div>
    </main>
  );
}
