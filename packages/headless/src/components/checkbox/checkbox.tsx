import { component$ } from '@builder.io/qwik';

export const CheckboxHeadless = component$((props: { class?: string }) => {
  return (
    <>
      <input class={props.class} type="checkbox"></input>
    </>
  );
});
