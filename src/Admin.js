import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const isAdmin = false; // Set to true if user is admin
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAdmin) {
      const timeout = setTimeout(() => {
        navigate('/');
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) {
    return (
      <div>
        Bạn không có quyền truy cập trang Admin. Bạn sẽ được chuyển hướng về trang chủ sau 3 giây.
      </div>
    );
  }

  return (
    <div>
      Đây là trang Admin.
    </div>
  );
}

export default Admin;
