import React from 'react';
import PropTypes from 'prop-types';
export default class LocaleProvider extends React.Component {
    getChildContext() {
        return {
            antLocale: Object.assign({}, this.props.locale, { exist: true }),
        };
    }
    componentWillMount() {
        this.componentDidUpdate();
    }
    componentDidUpdate() {
        //changeConfirmLocale(locale && locale.Modal);
    }
    componentWillUnMount() {
        //changeConfirmLocale();
    }
    render() {
        return React.Children.only(this.props.children);
    }
}
LocaleProvider.propTypes = {
    locale: PropTypes.object,
};
LocaleProvider.childContextTypes = {
    antLocale: PropTypes.object,
};
