import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";

const ManageUser = () => {
  const handleDelete = (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  const handlePromote = (userId: string) => {
    if (
      window.confirm("Are you sure you want to promote this user to admin?")
    ) {
      dispatch(promoteUser(userId));
    }
  };
  const users = [];

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
          {users.map((user) => (
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
