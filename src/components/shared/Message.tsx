import {FC, ReactNode} from 'react';
interface IProps {
    data: number;
    children?: ReactNode;
}
export const Message: FC<IProps> = (props)=> {
    return (
        <div>
            {props.children ? props.children : (
                <>
                    Message: {props.data}
                </>
            )}
        </div>
    )
}
