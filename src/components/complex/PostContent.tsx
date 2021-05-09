import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import mdxComponents from "../mdx";
import Head from "next/head";

export default function Post({
  code,
  frontmatter,
}: {
  code: string;
  frontmatter: { title: string; description: string };
}) {
  const Component = React.useMemo(() => getMDXComponent(code) || null, [code]);
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Matt Elphick</title>
      </Head>
      <article className="max-w-4xl w-full mx-auto flex flex-col gap-5 h-full mt-10">
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-6xl">{frontmatter.title}</h1>
          <p className="px-5 py-2 text-center text-lg">
            {frontmatter.description}
          </p>
        </header>
        <main className="md">
          <Component components={mdxComponents} />
        </main>
      </article>
    </>
  );
}
