import UnderDev from "@/modules/under-dev";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function UnderDevelopment() {
  const router = useRouter();
  useEffect(() => {
    router.push("/under-development");
  });
  return <UnderDev />;
}
