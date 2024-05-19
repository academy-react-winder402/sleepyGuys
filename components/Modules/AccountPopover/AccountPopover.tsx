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
import MainButton from "../Button/MainButton";
import { isUserAuthenticated } from "@/utils/isUserAuthenticated";

export default function AccountPopover() {
  const router = useRouter();

  const isAuthenticated = isUserAuthenticated()

  const goToLoginPage = () => {
    router.push("/login")
  }

  return (
    <Popover offset={15} placement="bottom-start" backdrop={"blur"}>
      <PopoverTrigger>
        <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-primary dark:bg-primary-darker rounded-full">
          <Image
            className="scale-85"
            src={userIcon}
            alt=""
            style={{ width: "auto" }}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] bg-white dark:bg-dark-lighter sm:w-[340px] items-start rounded-tl-none p-6">
        {isAuthenticated ? (<>
          <UserCard
            title="آرمان غنی زاده"
            description="موجودی: ۰تومان"
            image={userIcon}
            size={50}
          />
          <Divider className="my-3" />
          <div className="w-full flex flex-col">
            <Listbox
              onAction={(key) => router.push(`/${key}`)}
            >
              {accountPopoverItems.map((item) => (
                <ListboxItem key={item.route} className="py-4">
                  <div className="flex items-center gap-x-3">
                    <Image src={item.icon} alt="" width={24} height={24} />
                    <p className="text-sm text-lightBody dark:text-darkBody">
                      {item.label}
                    </p>
                  </div>
                </ListboxItem>
              ))}
            </Listbox>
            <Divider className="my-4" />
            <MainButton
              content={
                <div className="flex items-center justify-center gap-x-1">
                  <Image src={logout} alt="" />
                  <p className="text-lightBody dark:text-darkBody">
                    خروج از حساب{" "}
                  </p>
                </div>
              }
              variant="light"
              color="danger"
            />
          </div>
        </>) : (
          <div className="w-full flex flex-col">
            <MainButton
              content={
                <div className="flex items-center justify-center gap-x-1">
                  <Image src={logout} alt="" />
                  <p className="text-lightBody dark:text-darkBody">
                    ورود به حساب
                  </p>
                </div>
              }
              variant="light"
              onClick={goToLoginPage}
            />
          </div>
        )}

      </PopoverContent>
    </Popover>
  );
}
