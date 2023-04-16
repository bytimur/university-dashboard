import { AllIconsType } from "../icon_collection";

type TabBarProps = {
  id: number;
  title: string;
  icon: AllIconsType;
};

export const tabBarData: TabBarProps[] = [
  {
    id: 0,
    icon: "PersonalCardIcon",
    title: "Личные данные",
  },
  {
    id: 1,
    icon: "FolderCloudIcon",
    title: "Загрузить файлы",
  },
  {
    id: 2,
    icon: "ClockIcon",
    title: "История событий",
  },
];
type TabBarApplicantpageData = {
  id: number;
  title: string;
  key: string;
  icon: AllIconsType;
  route: string;
};

export const tabBarApplicantpageData: TabBarApplicantpageData[] = [
  {
    id: 0,
    key: "all",
    icon: "Profile2UserIcon",
    title: "Все",
    route: "#",
  },
  {
    id: 1,
    key: "consideration",
    icon: "ProfileRemoveIcon",
    title: "На рассмотрении",
    route: "#",
  },
  {
    id: 2,
    key: "rejected",
    icon: "ProfileDeleteIcon",
    title: "Отклонено",
    route: "#",
  },
  {
    id: 3,
    key: "approved",
    icon: "ProfileTickIcon",
    title: "Одобрено",
    route: "#",
  },
];

type ApplicationPageData = {
  id: number;
  title: string;
  icon: AllIconsType;
  route: string;
};

export const applicationPageData: ApplicationPageData[] = [
  {
    id: 0,
    icon: "Profile2UserIcon",
    title: "Все",
    route: "#",
  },
  {
    id: 1,
    icon: "ProfileRemoveIcon",
    title: "На рассмотрении",
    route: "#",
  },
];

type ApplicationPersonalData = {
  id: number;
  title: string;
  icon: AllIconsType;
  route: string;
};

export const applicationPersonalData: ApplicationPersonalData[] = [
  {
    id: 0,
    icon: "Profile2UserIcon",
    title: "Личные данные",
    route: "/admission/applications_list/application",
  },
  {
    id: 1,
    icon: "ClockIcon",
    title: "История событий",
    route: "/admission/applications_list/application/history",
  },
];

type FacultyIdListData = {
  id: number;
  key: string;
  title: string;
  icon: AllIconsType;
};

export const FacultyIdListData: FacultyIdListData[] = [
  {
    id: 0,
    key: "all",
    icon: "Profile2UserIcon",
    title: "Все",
  },
  {
    id: 1,
    key: "consideration",
    icon: "ProfileRemoveIcon",
    title: "На рассмотрении",
  },
  {
    id: 2,
    key: "rejected",
    icon: "ProfileDeleteIcon",
    title: "Отклонено",
  },
  {
    id: 3,
    key: "approved",
    icon: "ProfileTickIcon",
    title: "Одобрено",
  },
];

type ChangerButtonData = {
  id: number;
  title: string;
};

export const changerButtonData: ChangerButtonData[] = [
  {
    id: 0,
    title: "Студент",
  },
  {
    id: 1,
    title: "Управление",
  },
];
