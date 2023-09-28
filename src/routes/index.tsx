import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Counter } from "~/components/counter";
import { NavBar } from "~/components/shared/navbar";

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          Puedes ver el <span class="highlight">contador</span>
          <br /> aquí
        </h3>
        <NavBar />
        <Counter />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
