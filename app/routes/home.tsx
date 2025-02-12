import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contapps" },
    { name: "Contacts app", content: "Welcome to Contapps, app to manage your contacts" },
  ];
}

export default function Home() {
  return (
    <section className="m-14 space-y-4">
      <h1 className="text-3xl text-center text-gray-600 font-bold pb-8">Welcome to Contapps</h1>
      <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat quis laborum iste explicabo ipsa nulla nisi error asperiores recusandae? Illo ea impedit mollitia similique accusantium officia aut accusamus libero?
      Repudiandae a odio repellat officiis cupiditate neque perferendis earum distinctio fugit. Atque alias aut suscipit quo officiis dignissimos itaque aspernatur. Perspiciatis ipsam voluptates doloribus! Veniam fugiat reprehenderit libero quo dolores.
      Qui dicta consequatur reiciendis, perspiciatis itaque adipisci repellendus aliquam doloremque incidunt et fugit est, vitae vero quasi distinctio. Illo reiciendis necessitatibus voluptatem repudiandae atque architecto, voluptatibus ipsa nulla dolor dolore?
      Ut, consequuntur modi. Excepturi at, cum ad beatae non eligendi harum perspiciatis delectus expedita debitis exercitationem fugiat officia, assumenda eveniet libero voluptate laudantium ut consequatur qui tempora itaque facilis! Libero.
      Facilis veritatis, reiciendis harum quaerat quisquam officia itaque sint sed illum ex rerum fuga, optio sequi. Vitae aut eaque iusto laudantium autem distinctio eligendi, ratione a porro sequi ea voluptatum!</p>
      <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat quis laborum iste explicabo ipsa nulla nisi error asperiores recusandae? Illo ea impedit mollitia similique accusantium officia aut accusamus libero?
      Repudiandae a odio repellat officiis cupiditate neque perferendis earum distinctio fugit. Atque alias aut suscipit quo officiis dignissimos itaque aspernatur. Perspiciatis ipsam voluptates doloribus! Veniam fugiat reprehenderit libero quo dolores.
      Qui dicta consequatur reiciendis, perspiciatis itaque adipisci repellendus aliquam doloremque incidunt et fugit est, vitae vero quasi distinctio. Illo reiciendis necessitatibus voluptatem repudiandae atque architecto, voluptatibus ipsa nulla dolor dolore?
      Ut, consequuntur modi. Excepturi at, cum ad beatae non eligendi harum perspiciatis delectus expedita debitis exercitationem fugiat officia, assumenda eveniet libero voluptate laudantium ut consequatur qui tempora itaque facilis! Libero.
      Facilis veritatis, reiciendis harum quaerat quisquam officia itaque sint sed illum ex rerum fuga, optio sequi. Vitae aut eaque iusto laudantium autem distinctio eligendi, ratione a porro sequi ea voluptatum!</p>
    </section>
  );
}
