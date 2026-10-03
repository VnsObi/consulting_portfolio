import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

const CALLOUT_LABEL: Record<string, string> = {
  finding: "Key finding",
  evidence: "Evidence",
  analysis: "Analysis",
  hypothesis: "Hypothesis",
  result: "Measured result",
  note: "Note",
  caution: "Caution",
};

/** CMS links are editor input: only allow site-relative, anchor, http(s) and mailto targets. */
function safeHref(href: unknown): string | null {
  if (typeof href !== "string") return null;
  const value = href.trim();
  return /^(\/(?!\/)|#|https?:\/\/|mailto:)/i.test(value) ? value : null;
}

const components: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const href = safeHref(value?.href);
      if (href === null) return <>{children}</>;
      if (href.startsWith("/") || href.startsWith("#")) {
        return <Link href={href}>{children}</Link>;
      }
      return (
        <a
          href={href}
          rel="noopener noreferrer"
          {...(value?.blank ? { target: "_blank" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    codeBlock: ({ value }) => {
      // Plain-text blocks are how authors draw flowcharts and ASCII diagrams.
      const isText = !value.language || value.language === "text";
      return (
        <div className="not-prose my-8 rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
          {(value.filename || !isText) && (
            <div className="flex justify-between px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-700">
              <span>{value.filename || "code"}</span>
              {!isText && <span>{value.language}</span>}
            </div>
          )}
          <pre tabIndex={0} className="p-4 overflow-x-auto text-sm leading-relaxed text-slate-100">
            <code>{value.code}</code>
          </pre>
        </div>
      );
    },
    imageBlock: ({ value }) => {
      if (!value.url) return null;
      return (
        <figure className="not-prose my-10">
          <a href={value.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={value.url}
              alt={value.alt ?? ""}
              width={value.width ?? 1600}
              height={value.height ?? 900}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto rounded-xl border border-slate-200"
            />
          </a>
          {value.caption && (
            <figcaption className="mt-3 text-sm text-slate-500">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => (
      <div
        role="note"
        className={`not-prose my-8 rounded-xl border p-5 md:p-6 ${
          value.tone === "caution"
            ? "border-amber-300 bg-amber-50"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <span
          className={`block text-sm font-semibold mb-2 ${
            value.tone === "caution" ? "text-amber-800" : "text-midnight-blue"
          }`}
        >
          {CALLOUT_LABEL[value.tone ?? "note"] ?? "Note"}
        </span>
        <p className="text-lg text-deep-slate leading-relaxed">{value.text}</p>
      </div>
    ),
    dataTable: ({ value }) => {
      const [head, ...rows] = value.rows ?? [];
      if (!head) return null;
      return (
        <figure className="not-prose my-10">
          <div
            className="overflow-x-auto border-y border-slate-300"
            role="region"
            aria-label={value.caption ?? "Table"}
            tabIndex={0}
          >
            <table className="w-full text-left text-sm">
              <thead className="text-deep-slate border-b border-slate-300">
                <tr>
                  {(head.cells ?? []).map((cell: string, index: number) => (
                    <th key={index} scope="col" className="px-3 py-3 font-semibold first:pl-0">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {rows.map((row: { _key: string; cells?: string[] }) => (
                  <tr key={row._key}>
                    {(row.cells ?? []).map((cell, index) => (
                      <td key={index} className="px-3 py-3 align-top first:pl-0">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-sm text-slate-500">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function ArticleBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div
      className="prose prose-xl text-slate-700 max-w-none
        prose-headings:text-deep-slate prose-headings:font-semibold
        prose-a:text-midnight-blue prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
        prose-strong:text-deep-slate
        prose-code:before:content-none prose-code:after:content-none prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:break-words
        prose-blockquote:border-l-0 prose-blockquote:border-y prose-blockquote:border-slate-200 prose-blockquote:px-0 prose-blockquote:py-5 prose-blockquote:not-italic prose-blockquote:font-semibold prose-blockquote:text-deep-slate"
    >
      <PortableText value={body} components={components} />
    </div>
  );
}
