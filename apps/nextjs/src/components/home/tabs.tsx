import * as Tabs from "@radix-ui/react-tabs/dist/index";

import { CategoriaContainer } from "./categoriaContainer";

export const TabsDeCategoria = () => {
  return (
    <Tabs.Root className="shadow-blackA4 flex w-[52rem] flex-col shadow-[0_2px_10px]">
      <Tabs.List className="border-mauve6 flex w-[52rem] shrink-0 border-b">
        <Tabs.Trigger
          value="aberta"
          className="text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
        >
          Aberta
        </Tabs.Trigger>
        <Tabs.Trigger
          value="aspirante"
          className="text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
        >
          Aspirante
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value="aberta"
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      >
        <CategoriaContainer></CategoriaContainer>
      </Tabs.Content>
      {/* <Tabs.Content
        value="aspirante"
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      >
        <CategoriaContainer></CategoriaContainer>
      </Tabs.Content> */}
    </Tabs.Root>
  );
};
