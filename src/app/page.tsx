import Container from "@/components/container";
import { Crafts } from "@/components/landingCrafts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LandingBlogs } from "@/components/landingBlogs";
import { DottedSeparator } from "@/components/separator";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <DottedSeparator className="my-10" />
        <Crafts />
        <DottedSeparator className="my-10" />
        <LandingBlogs />
        <DottedSeparator className="my-10" />
        <Footer />
      </Container>
    </div>
  );
}
