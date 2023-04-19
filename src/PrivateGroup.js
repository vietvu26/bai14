import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateGroup = () => {
  return (
    <div>Private Group</div>
  )
}

const ProtectedGroup = ({ isMember, children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isMember) {
      const timeout = setTimeout(() => {
        navigate('/')
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isMember, navigate]);

  if (!isMember) {
    return (
      <div>Bạn không phải thành viên nhóm này. Bạn sẽ được chuyển hướng về trang chủ sau 3 giây</div>
    )
  }

  return (
    <div>{children}</div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/private-group" element={<ProtectedGroup isMember={false}><PrivateGroup /></ProtectedGroup>} />
      </Routes>
    </BrowserRouter>
  );
}
