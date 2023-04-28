import { getUsers, getUsersResponse } from "@lib/mongo/users";

export default async function UsersPage() {
  const { users } = await getUsers();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: getUsersResponse) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
