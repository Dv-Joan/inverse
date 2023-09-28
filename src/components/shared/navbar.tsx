import { component$ } from "@builder.io/qwik";
import { LuShield, LuLogOut } from "@qwikest/icons/lucide";

export const NavBar = component$(() => {
  return (
    <div class="flex justify-center lg:justify-between lg:px-24 border-b-[1px] border-dotted border-neutral-200 py-5">
      <a href="#" class="flex gap-1 group items-center">
        <LuShield class="w-12 h-12 rotate-180 text-white group-hover:fill-orange-500 " />
        <div class="flex flex-col">
          <h2 class="lg:text-3xl  text-2xl font-bold">Inverse</h2>
          <h5 class="text-slate-400 text-sm pl-0.5">
            Qwik essentials components
          </h5>
        </div>
      </a>

      <div class="flex items-center gap-5 font-semibold invisible lg:visible ">
        <div class="flex gap-2 items-center">
          <img
            src="https://randomuser.me/api/portraits/men/95.jpg"
            class="rounded-full"
            alt="Avatar"
            width={30}
            height={30}
          />

          <span class="hover:opacity-75 cursor-pointer">Jordan Barret</span>
        </div>
        <a
          href="#"
          class="hover:opacity-75 flex items-center gap-2 cursor-pointer"
        >
          Logout
          <LuLogOut class="w-3 h-3" />
        </a>
      </div>
    </div>
  );
});
