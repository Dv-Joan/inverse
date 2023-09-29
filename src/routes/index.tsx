import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BaseballApi } from "~/components/baseball";
import { Counter } from "~/components/counter";
import { NavBar } from "~/components/shared/navbar";

export default component$(() => {
  return (
    <>
      <div>
        <NavBar />
        <Counter />
        <BaseballApi />
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
