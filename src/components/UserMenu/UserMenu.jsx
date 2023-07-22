import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Wrapper, Text, Button, SpanText } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text><SpanText>{user.name}</SpanText></Text>{' '}
          <Button type="button" onClick={() => dispatch(logOut())}
          >
        Logout
      </Button>{' '}
    </Wrapper>
  );
};