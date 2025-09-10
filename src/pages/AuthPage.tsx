import { useState } from 'react';

function AuthPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('로그인 시도:', { username, password });
        // TODO: 나중에 axios API 호출 코드 작성
    };

    return (
        <div>
            <h1>로그인 / 회원가입</h1>
            <div>
                <input
                    type="text"
                    placeholder="사용자 이름"
                    value={username} // input의 값을 state와 연결
                    onChange={(e) => setUsername(e.target.value)} // 3. 값이 바뀔 때마다 state 업데이트
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleLogin}>로그인</button>
                {/* TODO: 회원가입 버튼과 함수 */}
            </div>
        </div>
    );
}

export default AuthPage;