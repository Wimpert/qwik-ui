import { component$ } from '@builder.io/qwik';
import { CheckboxHeadless } from '@qwik-ui/headless';

export const Checkbox = component$(() => {
  return <CheckboxHeadless class="checkbox"></CheckboxHeadless>;
});
