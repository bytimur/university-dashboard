import { AllIconsType } from "@/src/resources/icon_collection";
import Router, { useRouter } from "next/router";
import SidebarButton from "../buttons/sidebar_button";
import SidebarNavButton from "../buttons/sidebar_nav_button";
import Container from "./style";

export type SideBarButtonDataType = {
  id: number;
  icon: AllIconsType;
  title: string;
  route?: string;
  label?: string;
};

export const sidebarButtonData: SideBarButtonDataType[] = [
  {
    id: 0,
    icon: "DocumentUploadIcon",
    title: "Подача заявления",
    route: "/student",
  },
  {
    id: 1,
    icon: "Profile2UserIcon",
    label: "17",
    title: "Об университете",
    route: "/student/about_university",
  },
];

const Sidebar = () => {
  const router = useRouter();

  const handleClick = (route: string | undefined) => {
    Router.push(route || "#");
  };
  return (
    <Container>
      <div className="sidebar-nav">
        <SidebarNavButton
          photo="/images/logo.png"
          title="TATU Universityasdasd"
          description="Приемная комиссия"
          button={{
            onClick: () => "sad",
            icon: "NotificationBingIcon",
          }}
        />
        <div>
          {sidebarButtonData.map((item) => (
            <SidebarButton
              key={item.route}
              onClick={() => {
                handleClick(item.route);
              }}
              icon={item.icon}
              title={item.title}
              label={item.label}
              isActive={router.asPath === item.route}
            />
          ))}
        </div>
      </div>
      <SidebarNavButton
        photo="/images/Avatar.png"
        title="Алимов Улугбек"
        description="Приемная комиссия"
        button={{
          onClick: () => "sad",
          icon: "LogOutIcon",
        }}
      />
    </Container>
  );
};

export default Sidebar;
