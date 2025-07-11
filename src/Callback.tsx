import { useCallback, useMemo, useState } from 'react';

const getAverage = (numbers: number[]) => {
    console.log('평균값 계산 중...');

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
};

function Callback() {
    // useCallback
    // useCallback 은 useMemo와 상당히 유사한 Hook이다.
    // 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고,
    // 두 번째 파라미터에는 의존성 배열을 넣는다.
    // 의존성 배열 내의 값이 바뀌었을 때, 함수를 새로 생성해야 하는지 명시해야 한다.

    // onChange 처럼 빈 의존성 배열을 넣게 되면 컴포넌트가 렌더링될 때, 만들었던 함수를 계속해서 재사용하게 되며,
    // onInsert 처럼 의존성 배열 안에 number와 list를 넣게 되면 해당 값에 변화가 있을 때, 새로 만들어진 함수를 사용한다.

    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>('');

    // 컴포넌트가 처음 렌더링될 때만 함수 생성.
    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setNumber(event.target.value),
        []
    );

    // number 또는 list가 바뀌었을 때만 함수 생성.
    const onInsert = useCallback(() => {
        // concat() 함수는 두 개 이상의 배열을 병합하는데 사용.
        // 원본 배열의 변경 없이, 새 배열 반환.
        const nextList: number[] = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <>
            <div>
                <input type="text" value={number} onChange={onChange} />
                <button onClick={onInsert}>등록</button>

                <ul>
                    {list.map((value: number, index: number) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>

                <div>
                    <b>평균값: </b> {avg}
                </div>
            </div>
        </>
    );
}

export default Callback;
