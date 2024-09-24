import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  usePromoteUserMutation,
} from "@/redux/features/manageUser";

const ManageUser = () => {
  const { data, isLoading, isFetching } = useGetAllUsersQuery(undefined);
  const users = data?.data;

  const [deleteUser] = useDeleteUserMutation();
  const [promoteUser] = usePromoteUserMutation();

  const handleDelete = (userId: string) => {
    console.log(userId);
    deleteUser(userId);
  };

  const handlePromote = (userId: string) => {
    console.log(userId);
    promoteUser(userId);
  };

  if (isLoading || isFetching) return <Loading />;
  console.log(users);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-primary">
        User Management
      </h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                  {user.role !== "admin" && (
                    <Button
                      // variant="success"
                      onClick={() => handlePromote(user.id)}
                    >
                      Promote
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUser;
