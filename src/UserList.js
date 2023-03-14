import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {

  // 첫번째 파라메터에는 함수, 두번째 파라메터에는 의존값이 들어있는 배열을 넣는다.
  // 이 배열은 deps라고 한다.

  // TODO:주로 하는 useEffect로 주로 하는 작업
  // props 로 받은 값을 컴포넌트의 로컬 상태로 설정
  // 외부 API 요청 (REST API 등)
  // 라이브러리 사용 (D3, Video.js 등...)
  // setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
  useEffect(()=>{
    console.log('user 값이 설정됨');
    console.log(user);

    // 반환해주는 함수를 넣을 수 있는데 이를 cleanUP 함수라고 한다.
    // cleanup 함수는 useEffect에 대한 뒷정리를 해주는 함수다.
    // deps가 비어 있다면 컴포넌트가 사라질 때 cleaup 함수가 호출된다.
    return () =>{
      console.log('user 가 바뀌기 전..');
      console.log(user);
    }
  },[user])

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>

      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle  }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove = {onRemove } onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;