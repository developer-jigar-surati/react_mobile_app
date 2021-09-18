import { Fragment } from 'react';
import { ChevronBackOutline } from 'react-ionicons';

const Header = (props: any) => {
    return (
        <Fragment>
            {/* App Header */}
            <div className="appHeader no-border transparent position-absolute">
                {typeof props.showBack !== 'undefined' && props.showBack && (
                    <div className="left">
                        <a href="/#" className="headerButton goBack">
                            <ChevronBackOutline
                                color={'#6236fe'}
                                title={'Back'}
                                height="26px"
                                width="26px"
                            />
                        </a>
                    </div>
                )}
                <div className="pageTitle">
                    {(typeof props.title !== 'undefined') ? props.title : ''}
                </div>
                <div className="right">
                </div>
            </div>
            {/* * App Header */}
        </Fragment>
    );
}

export default Header;