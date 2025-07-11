import { useMemo, useState } from 'react';

const getAverage = (numbers: number[]) => {
    console.log('평균값 계산 중...');

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
};

function Average() {
    // useMemo
    // useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.

    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setNumber(event.target.value);

    const onInsert = () => {
        // concat() 함수는 두 개 이상의 배열을 병합하는데 사용.
        // 원본 배열의 변경 없이, 새 배열 반환.
        const nextList: number[] = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    // useMemo Hook을 사용하면 작업을 최적화할 수 있다.
    // 렌더링 과정에서 의존성 배열 내 값이 바뀌었을 때만 연산을 실행하고,
    // 값이 바뀌지 않는다면 이전에 연산했던 결과를 다시 사용한다.
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

export default Average;
