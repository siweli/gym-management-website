import { redirect } from "next/navigation";
import "./globals.css";

export default function Home() {
  redirect("./fit-gym")
  return (
    <main>
      <h1>you shouldnt be here</h1>
    </main>
  );
}
