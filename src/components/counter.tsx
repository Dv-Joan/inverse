import { component$, useSignal, useStore, $ } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(20);
  const initialStore = { counter: 50 };
  const store = useStore(initialStore);
  const functionStore = useStore({
    contador: 0,
    increment: $(function () {
      this.contador++;
    }),
    decrement: $(function () {
      this.contador--;
    }),
  });

  return (
    <div class="flex lg:flex-row flex-col gap-10 justify-center m-10">
      <section class="max-w-sm p-5 space-y-5   rounded-lg shadow-md dark:bg-[#181f2c]">
        <h3 class=" text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
          useSignal
        </h3>
        <p class="text-gray-700 dark:text-gray-400">
          Counter increment/decrement classic example with useSignal qwik
          module.
        </p>

        <button
          onClick$={() => count.value++}
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 duration-100  "
        >
          Increment
        </button>
        <span class="mx-2 text-gray-600 dark:text-gray-300">{count}</span>
        <button
          onClick$={() => count.value--}
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white border-[1px] border-blue-700 rounded-lg hover:bg-blue-500 active:bg-blue-600 duration-100"
        >
          Decrement
        </button>
      </section>
      <section class="max-w-sm p-5 space-y-5 rounded-lg shadow-md dark:bg-[#181f2c]">
        <h3 class=" text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
          useStore
        </h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Counter increment/decrement classic example with useStore qwik module.
        </p>

        <button
          onClick$={() => store.counter++}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#EE8122] rounded-lg hover:bg-[#9e5617] active:bg-[#81440f] duration-100  "
        >
          Increment
        </button>
        <span class="mx-2 text-gray-600 dark:text-gray-300">
          {store.counter}
        </span>
        <button
          onClick$={() => store.counter--}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-[1px] border-[#EE8122] rounded-lg hover:bg-[#9e5617] active:bg-[#81440f] duration-100"
        >
          Decrement
        </button>
      </section>
      <section class="max-w-sm p-5 space-y-5 rounded-lg shadow-md dark:bg-[#181f2c]">
        <h3 class=" text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
          useStore | Functions
        </h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Counter increment/decrement classic example with useStore qwik modile
          and including inner function .
        </p>
        <button
          onClick$={() => functionStore.increment()}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2daa1a] rounded-lg hover:bg-[#1d7a0f] active:bg-[#16520d] duration-100  "
        >
          Increment
        </button>
        <span class="mx-2 text-gray-600 dark:text-gray-300">
          {functionStore.contador}
        </span>
        <button
          onClick$={() => functionStore.decrement()}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-[1px] border-[#2daa1a] rounded-lg hover:bg-[#1d7a0f] active:bg-[#16520d] duration-100 "
        >
          Decrement
        </button>
      </section>
    </div>
  );
});
