import { Toaster } from "sonner";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <Toaster richColors />
      <HomePage />
    </>
  );
}
