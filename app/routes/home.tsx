import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contapps" },
    { name: "Contacts app", content: "Welcome to Contapps, app to manage your contacts" },
  ];
}

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to Contapps, app to manage your contacts</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor magnam eos aut veniam iste minima ex dolorum minus, totam reprehenderit perferendis, deserunt velit, in voluptatem! Expedita optio eos error!</p>
    </section>
  );
}
