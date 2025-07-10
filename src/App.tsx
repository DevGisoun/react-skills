import { useState } from 'react';
import Effect from './Effect';

function App() {
    // useState => Hooks
    // useState는 가장 기본적인 Hook. 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
    // useState 가 호출되면 배열은 반환한다. => 첫 번째 원소: 상태 값, 두 번째 원소: 상태 설정 함수.
    // useState 함수의 파라미터에는 상태의 기본값을 넣는다.
    const [value, setValue] = useState<number>(0);
    const [name, setName] = useState<string>('이해찬');
    const [nickname, setNickname] = useState<string>('기순');

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const onChangeNickame = (e: React.ChangeEvent<HTMLInputElement>) =>
        setNickname(e.target.value);

    return (
        <>
            <div>
                <p>
                    현재 카운터: <b>{value}</b>
                </p>

                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>

                <div>
                    <input type="text" value={name} onChange={onChangeName} />
                    <input
                        type="text"
                        value={nickname}
                        onChange={onChangeNickame}
                    />
                </div>

                <div>
                    <b>이름: {name}</b>
                </div>
                <div>
                    <b>닉네임: {nickname}</b>
                </div>
            </div>
            <hr></hr>
            <div>
                <Effect />
            </div>
        </>
    );
}

export default App;
