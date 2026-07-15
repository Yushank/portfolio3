import Container from "@/components/container";
import { HomeIcon } from "@/components/icons/general";
import { DottedSeparator } from "@/components/separator";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);

  if (!frontmatter) {
    return { title: "Blog not found" };
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content } = blog;

  return (
    <div>
      <Container>
        <div className="flex items-center justify-start py-4">
          <Link className="py-2 flex gap-2 cursor-pointer" href={"/"}>
            <HomeIcon className="h-5 w-5 text-subdued" />
            <p className="text-subdued/90 text-sm">Back Home</p>
          </Link>
        </div>

        <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-a:text-default prose-a:underline prose-a:decoration-subdued/30 my-10">
          <div className="prose">{content}</div>
        </div>
      </Container>
    </div>
  );
}
