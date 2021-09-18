import { Fragment } from 'react';
import { CloseCircle } from 'react-ionicons';

const InputCrossIcon = (props: any) => {
    return (
        <Fragment>
            <i 
                className="clear-input"
                onClick={props.onClick}
            >
                <CloseCircle
                    color={'#958d9e'}
                    title={'Cross'}
                    height="22px"
                    width="22px"
                />
            </i>
        </Fragment>
    );
}

export default InputCrossIcon;