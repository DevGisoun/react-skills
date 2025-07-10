import { useEffect, useState } from 'react';

function Effect() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        console.log('컴포넌트가 렌더링/리렌더링 될 때마다 특정 작업 수행.');
        console.log({
            name,
            nickname,
        });
    });

    useEffect(() => {
        console.log('마운트 될 때만 수행');
        console.log({
            name,
            nickname,
        });
    }, []);

    useEffect(() => {
        console.log('name이라는 상태 값이 변경될 때만 수행');
        console.log({
            name,
            nickname,
        });
    }, [name]);

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) =>
        setNickname(e.target.value);

    return (
        <>
            <div>
                <input type="text" value={name} onChange={onChangeName} />
                <input
                    type="text"
                    value={nickname}
                    onChange={onChangeNickname}
                />

                {visible && (
                    <div>
                        <b>이름: {name}</b>
                        <b>닉네임: {nickname}</b>
                    </div>
                )}

                <button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? '숨기기' : '보이기'}
                </button>
            </div>
        </>
    );
}

export default Effect;
