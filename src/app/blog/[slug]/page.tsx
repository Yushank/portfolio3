import Container from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
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
    <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-a:text-default prose-a:underline prose-a:decoration-subdued/30 my-10">
      <Container>
        <div className="prose">{content}</div>
      </Container>
    </div>
  );
}
