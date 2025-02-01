/**
 * Speeds up dyanmic route segments. Think about this later! Check bookmarks "static-params".
 */
function generateStaticParams() { }

export default async function Page({
    params,
  }: {
    params: Promise<{ tag: string }>
  }) {
    const tag = (await params).tag
    return <h1>Problem page: { tag }</h1>
  }