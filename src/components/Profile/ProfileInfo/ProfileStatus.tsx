import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from "antd";

type MyProps = {
    status: string;
    onChangeStatus: (status: string) => void
};

export const ProfileStatus = (props: MyProps) => {
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => setEditMode(true)

    const deactivateEditMode = () => {
        setEditMode(false)
        props.onChangeStatus(status)
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => setStatus(event.currentTarget.value)

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        { props.status || 'Stay away from negative people.'}
                    </span>
                </div>}
            {editMode &&
                <div>
                    <Input type="text"
                           value={status}
                           autoFocus
                           onBlur={deactivateEditMode}
                           onChange={onChangeInputHandler}
                           style={{width: '300px'}}
                    />
                </div>}
        </div>
    );
}


