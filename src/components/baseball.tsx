import { $, component$, useSignal } from "@builder.io/qwik";

export const BaseballApi = component$(() => {
  const loading = useSignal(false);

  const getData = $(async () => {
    fetch("https://baseball4.p.rapidapi.com/leagues", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4918df19b1msh132065a0b402c49p1485c2jsne392c9a58dc2",
        "X-RapidAPI-Host": "baseball4.p.rapidapi.com",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      BaseballApi
      <button onClick$={getData}>Get Data</button>
    </div>
  );
});
