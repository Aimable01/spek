import { useRouter } from "next/navigation";
import { useTokenStore } from "@/stores/useTokenStore";
import { Button } from "@/ui/button";
import { User } from "@spek/client";
import { Avatar } from "@/ui/avatar";
import { useState } from "react";
import { EditProfileModal } from "./EditProfileModal";

export type UserProfileWrapperProps = {
  isCurrentUser: boolean;
  user: User;
};

export const UserProfileWrapper: React.FC<UserProfileWrapperProps> = ({
  isCurrentUser,
  user,
}) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-4 mt-3">
      <Avatar
        src={user.avatarUrl}
        isOnline={user.online}
        username={user.username}
      />
      <p className="text-xl font-bold">{user.displayName}</p>
      <p>{user.bio}</p>
      {isCurrentUser ? (
        <div className="flex gap-4">
          <Button onClick={() => setOpenEditModal(!openEditModal)}>
            Edit profile
          </Button>
          <Button
            onClick={() => {
              useTokenStore
                .getState()
                .setTokens({ accessToken: "", refreshToken: "" });
              push("/logout");
            }}
          >
            Logout
          </Button>
        </div>
      ) : null}
      {openEditModal ? (
        <EditProfileModal
          isOpen={openEditModal}
          onRequestClose={() => setOpenEditModal(false)}
        />
      ) : null}
    </div>
  );
};