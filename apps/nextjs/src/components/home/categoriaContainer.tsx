import { Drawer } from "./drawerBottom";
import { IconToSelectSenha } from "./iconToSelectSenha";

const arrayToInterar: number[] = [];
for (let i = 0; i < 100; i++) {
  arrayToInterar.push(i);
}

export function CategoriaContainer() {
  return (
    <div className="ml-2 grid  w-[48rem] grid-cols-12 content-start gap-x-0 gap-y-2 rounded-md border-2 border-solid border-black py-4">
      {arrayToInterar.map(() => {
        return (
          <div className="justify-self-center">
            <IconToSelectSenha></IconToSelectSenha>
            <Drawer></Drawer>
          </div>
        );
      })}
    </div>
  );
}
