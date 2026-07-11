import Container from "@/components/container";
import BlogIcon from "@/components/icons/general";
import { getAllBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All blogs - Yushank Kashyap",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div>
      <Container>
        <div className="px-4 mt-10">
          <div className="text-md leading-snug text-subdued">Blogs</div>
          <div className="mt-4">
            {allBlogs.map((blog, idx) => (
              <Link
                key={idx}
                href={`/blog/${blog.slug}`}
                className="block mt-5 mb-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <BlogIcon className="w-5 h-5 text-subdued/60" />
                    <h2 className="text-md font-medium text-default">
                      {blog?.title}
                    </h2>
                  </div>
                  <p className="text-subdued/40 text-sm">{blog.date}</p>
                </div>
                <p className="text-sm text-subdued">
                  {truncate(blog?.description || "", 150)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
