import { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (numbers: number[]) => {
    console.log('평균값 계산 중...');

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
};

function Ref() {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>('');

    // useRef Hook은 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다.
    const inputElement = useRef<HTMLInputElement | null>(null);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setNumber(event.target.value),
        []
    );

    const onInsert = useCallback(() => {
        const nextList: number[] = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');

        // useRef 동작
        inputElement.current?.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <>
            <div>
                <input
                    type="text"
                    value={number}
                    onChange={onChange}
                    ref={inputElement}
                />
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

export default Ref;
