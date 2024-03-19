import HomePageModule from "@/modules/home";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/under-development");
    return;
  });
  return <HomePageModule />;
}
