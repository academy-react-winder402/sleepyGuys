import accountPopoverItems from "@/constants/accountPopoverItems";
import {
  Divider,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import logout from "@/public/icons/theme/logout.svg";
import userIcon from "@/public/icons/theme/user.svg";
import { useRouter } from "next/router";
import UserCard from "../UserCard/UserCard";

export default function AccountPopover() {
  const router = useRouter();

  return (
    <Popover offset={15} placement="bottom-start" backdrop={"blur"}>
      <PopoverTrigger>
        <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-MainPrimary rounded-full">
          <Image
            className="scale-85 md:scale-100"
            src={userIcon}
            alt=""
            width={28}
            height={12}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] bg-white-100 dark:bg-dark-lighter sm:w-[340px] items-start rounded-tl-none p-6">
        <UserCard
          title="آرمان غنی زاده"
          description="موجودی: ۰تومان"
          image={userIcon}
        />
        <Divider className="my-3" />
        <div className="w-full flex flex-col">
          <Listbox onAction={(key) => router.push(`/${key}`)}>
            {accountPopoverItems.map((item) => (
              <ListboxItem key={item.route} className="py-4">
                <div className="flex items-center gap-x-3">
                  <Image src={item.icon} alt="" width={24} height={24} />
                  <p className="text-sm text-LightBody dark:text-black-800">
                    {item.label}
                  </p>
                </div>
              </ListboxItem>
            ))}
          </Listbox>
          <Divider className="my-4" />
          <div className="flex items-center justify-center gap-x-1">
            <Image src={logout} alt="" />
            <p className="text-LightBody dark:text-black-800">خروج از حساب </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
