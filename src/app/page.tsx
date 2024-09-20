import BackToTopButton from "@/components/BackToTopButton";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div style={{ height: "1000px" }} />
      <BackToTopButton />
    </>
  );
}
