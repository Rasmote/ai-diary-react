// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !userPassword) {
            alert("아이디와 비밀번호가 입력되지 않았습니다.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                username: username,
                password: userPassword
            });

            console.log("로그인 성공", response.data);
            alert("로그인 성공");

            //ToDo : 메인 페이지로 이동시켜야 함.

        } catch (error: any) {
            console.log("로그인 실패 : ", error);
            const errorMessage = error.response?.data?.message || "로그인에 실패했습니다.";
            alert(errorMessage);
        }
        //console.log("로그인 시도");
        //console.log("ID : ", username);
        //console.log("PW : ", userPassword);
    };

    return (
        // 1. 전체 화면 컨테이너 (회색 배경, 중앙 정렬)
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* 2. 로그인 카드 (흰색 박스, 그림자) */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                {/* 3. 제목 영역 */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600">AI Diary</h1>
                    <p className="text-gray-500 mt-2">오늘 하루를 기록하고 피드백을 받아보세요</p>
                </div>

                {/* 4. 입력 폼 영역 */}
                <form className="space-y-6" onSubmit={handleLogin}>

                    {/* 아이디 입력 */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            아이디
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="아이디를 입력하세요"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* 비밀번호 입력 */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력하세요"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </div>

                    {/* 로그인 버튼 */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                    >
                        로그인
                    </button>
                </form>

                {/* 5. 회원가입 링크 영역 */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    계정이 없으신가요?{' '}
                    <a href="/signup" className="text-blue-600 hover:text-blue-500 font-medium hover:underline">
                        회원가입하기
                    </a>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;