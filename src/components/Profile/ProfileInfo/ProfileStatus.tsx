import React, {ChangeEvent} from 'react';
type MyProps = {
    status: string;
    onChangeStatus: (status: string) => void
};
export class ProfileStatus extends React.Component<MyProps> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.onChangeStatus(this.state.status)
    }
    onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'Without status'}
                    </span>
                    </div>}
                {this.state.editMode &&
                    <div>
                    <input type="text"
                           value={this.state.status}
                           autoFocus
                           onBlur={this.deactivateEditMode}
                           onChange={this.onChangeInputHandler}
                    />
                    </div>}

            </div>
        );
    }
}

