import ProfileComponent from "components/pageComponents/Profile/index";
import * as React from "react";

export interface ProfilePageProps {}

export default function ProfilePage(props: ProfilePageProps) {
  return (
    <div>
      <ProfileComponent />
    </div>
  );
}
