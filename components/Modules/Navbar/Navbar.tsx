import Image from "next/image";
import React, { useState } from "react";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";
import { Avatar, AvatarIcon } from "@nextui-org/avatar";
import {
  Button,
  Divider,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
} from "@nextui-org/react";
import moonIcon from "@/public/icons/theme/moon.svg";
import sunIcon from "@/public/icons/theme/sun.svg";
import accountPopoverItems from "@/constants/accountPopoverItems";
import { useRouter } from "next/router";

function Navbar() {
  const [isSelected, setIsSelected] = useState(true);

  const router = useRouter();

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-x-6">
        <Image src={navbarLogo} alt="" width={45} height={22} />
        <ul className="flex items-center gap-x-8">
          <li>
            <Link href={"#"}>خانه</Link>
          </li>
          <li>
            <Link href={"#"}>دوره ها</Link>
          </li>
          <li>
            <Link href={"#"}>اساتید</Link>
          </li>
          <li>
            <Link href={"#"}>اخبار</Link>
          </li>
          <li>
            <Link href={"#"}>ارتباط با ما</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row-reverse items-center gap-x-2" dir="ltr">
        <Switch
          isSelected={isSelected}
          onValueChange={setIsSelected}
          size="lg"
          color="default"
          thumbIcon={({ isSelected }) =>
            isSelected ? (
              <Image src={sunIcon} alt="" />
            ) : (
              <Image src={moonIcon} alt="" />
            )
          }
        />
        <Popover offset={15} placement="bottom-start" backdrop={"blur"}>
          <PopoverTrigger>
            <Avatar
              icon={<AvatarIcon />}
              classNames={{
                base: "bg-[#436E8E]",
                icon: "text-white",
              }}
            />
          </PopoverTrigger>
          <PopoverContent className="w-[340px] items-start rounded-tl-none p-6">
            <div className="flex items-center gap-x-4">
              <Avatar
                icon={<AvatarIcon />}
                size="lg"
                classNames={{
                  base: "bg-[#436E8E]",
                  icon: "text-white",
                }}
              />
              <div>
                <p className="text-lg mb-1">آرمان غنی زاده</p>
                <p className="text-xs">موجودی : ۰ تومان</p>
              </div>
            </div>
            <Divider className="my-3" />
            <div className="w-full flex flex-col">
              <Listbox onAction={(key) => router.push(`/${key}`)}>
                {accountPopoverItems.map((item) => (
                  <ListboxItem key={item.route} className="py-4">
                    <p>{item.label}</p>
                  </ListboxItem>
                ))}
              </Listbox>
              <Divider className="my-4" />
              <Button color="danger" variant="flat">
                <p>خروج از حساب کاربری</p>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
