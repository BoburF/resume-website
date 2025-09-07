import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-4xl font-bold text-emerald-500 mb-4">404</h1>
            <p className="text-zinc-400 mb-6">This page could not be found.</p>
            <Link
                href="/"
                className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
}
