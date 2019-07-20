import * as React from 'react';

export const Paragraps: React.FunctionComponent<{
  count?: number;
}> = ({count}) => {
  const rows: Array<React.ReactNode> = [];
  for (let i = 0; i < (count || 1); i++) {
    rows.push(
      <p key={i} className={`small w-100 text-light`}>
        Ullamco incididunt minim ex proident velit eiusmod officia eiusmod.
        Ullamco aute proident ullamco voluptate. Et id aute culpa anim duis sit
        do in ea velit sunt voluptate mollit. Anim laborum aliqua laboris fugiat
        nostrud nulla consequat quis amet. Amet adipisicing pariatur do nisi
        exercitation non ullamco minim est nisi velit laborum. Exercitation
        commodo esse id exercitation exercitation ex. Do do nostrud nisi eu
        elit. Anim non labore aliquip laborum amet culpa pariatur non enim velit
        consectetur laborum. Elit nisi nulla velit ut proident ut aute tempor
        sint mollit anim. Ipsum veniam adipisicing nisi irure tempor voluptate
        duis culpa aliqua occaecat veniam id laboris culpa. Pariatur in eu
        deserunt consequat ullamco consequat nostrud elit labore velit nostrud
        ea eu duis. Tempor enim ullamco ex excepteur quis sint incididunt in
        fugiat nulla qui. Reprehenderit sint eiusmod proident ipsum ut deserunt
        id nostrud.
      </p>
    );
  }

  return <React.Fragment>{rows}</React.Fragment>;
};
