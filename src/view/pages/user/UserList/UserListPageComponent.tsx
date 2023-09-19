import { useEffect } from "react";

import { UserList } from "../../../components";
import { WithNavigationProps, withNavigation } from "../../../hoc";
import { UserListPageProps } from "./UserListPage";

type Props = UserListPageProps & WithNavigationProps;

const UserListPage: React.FC<Props> = (props) => {
  const { users, getAllUsers, navigate } = props;

  useEffect(() => {
    if (users.length === 0) {
      getAllUsers({
        onSuccess: (res) => console.log("Res: ", res),
        onError: (err) => console.log("Err: ", err),
      });
    }
  }, []);

  return <UserList users={users} onClick={(id) => navigate(`/users/${id}`)} />;
};

export const UserListPageComponent = withNavigation(UserListPage);