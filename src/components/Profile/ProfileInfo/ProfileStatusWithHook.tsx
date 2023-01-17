import React, {ChangeEvent, useState} from 'react';

type MyProps = {
    status: string;
    onChangeStatus: (status: string) => void
};

export const ProfileStatusWithHook = (props: MyProps) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.onChangeStatus(status)
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || 'Without status'}
                    </span>
                </div>}
            {editMode &&
                <div>
                    <input type="text"
                           value={status}
                           autoFocus
                           onBlur={deactivateEditMode}
                           onChange={onChangeInputHandler}
                    />
                </div>}
        </div>
    );
}


