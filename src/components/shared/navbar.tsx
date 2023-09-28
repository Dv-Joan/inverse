import { component$ } from "@builder.io/qwik";

export const NavBar = component$(() => {
  return (
    <div class="flex justify-center lg:justify-between lg:px-24 border-b-[1px] border-dotted border-neutral-200 py-5">
      <div class="flex gap-1 items-center">
        <a href="#" class="logo">
          <img
            src="https://img.icons8.com/?size=1x&id=42710&format=png"
            class="drop-shadow-sm"
            alt="Avatar"
            width={50}
            height={50}
          />
        </a>
        <div class="flex flex-col">
          <h2 class="lg:text-3xl text-2xl font-bold">Inverse</h2>
          <h5 class="text-slate-500 text-[12px] pl-0.5">
            Qwik side components
          </h5>
        </div>
      </div>

      <div class="flex items-center gap-5 font-semibol invisible lg:visible ">
        <div class="flex gap-2 items-center">
          <img
            src="https://randomuser.me/api/portraits/men/97.jpg"
            class="rounded-full"
            alt="Avatar"
            width={30}
            height={30}
          />

          <span class="hover:text-neutral-500 cursor-pointer">John Doe</span>
        </div>
        <a href="#" class="hover:text-neutral-500 cursor-pointer">
          Logout
        </a>
      </div>
    </div>
  );
});
