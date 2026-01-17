
import {UsersWithUseEffect, UsersWithuseSWR} from "@/app/ui/users";

export default function Page() {
  return (
    <div>
      <h1>Users</h1>
      <UsersWithUseEffect />
      <UsersWithuseSWR />
    </div>
  );
}
