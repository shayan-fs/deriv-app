import classNames   from 'classnames';
import React        from 'react';
import PropTypes    from 'prop-types';
import { Field }    from 'formik';
import Input        from '../input';
import DropdownList from '../dropdown-list';
import                   './autocomplete.scss';

// TODO: use-from-shared - Use this icon from icons' shared package
const IconArrow = ({ className, classNamePath }) => (
    <svg className={ classNames('inline-icon', className) } width='16' height='16'>
        <path
            className={ classNames(classNamePath, 'color1-fill') }
            fill='rgba(0, 0, 0, 0.8)'
            fillRule='nonzero'
            d='M13.164 5.13a.5.5 0 1 1 .672.74l-5.5 5a.5.5 0 0 1-.672 0l-5.5-5a.5.5 0 0 1 .672-.74L8 9.824l5.164-4.694z'
        />
    </svg>
);

class Autocomplete extends React.PureComponent {
    state = {
        should_show_list: false,
        filtered_items  : null,
    };

    setInputWrapperRef = (node) => this.input_wrapper_ref = node;

    showDropdownList = () => {
        this.setState({ should_show_list: true });
    };

    hideDropdownList = () => {
        this.setState({ should_show_list: false });
    };

    filterList = (e) => {
        const val = e.target.value.toLowerCase();

        const is_string_array = this.props.list_items.length && typeof this.props.list_items[0] === 'string';

        this.setState(
            {
                filtered_items: val ?
                    this.props.list_items.filter(item => (
                        is_string_array ?
                            item.toLowerCase().includes(val)
                            : item.text.toLowerCase().includes(val)
                    ))
                    : null,
            }
        );
    };

    render() {
        return (
            <Field { ...this.props }>
                {
                    ({ field, form }) => (
                        <div className={ classNames('dc-autocomplete', this.props.className) }>
                            <div ref={ this.setInputWrapperRef } className='dc-autocomplete__input-field'>
                                <Input
                                    { ...field }
                                    { ...this.props }
                                    className='dc-autocomplete__field'
                                    onFocus={ this.showDropdownList }
                                    onInput={ this.filterList }
                                    // Field's onBlur still needs to run to perform form functions such as validation
                                    onBlur={ (e) => { this.hideDropdownList(); field.onBlur(e); } }
                                    trailing_icon={
                                        <IconArrow
                                            className={ {
                                                'dc-autocomplete__trailing-icon'        : true,
                                                'dc-autocomplete__trailing-icon--opened': this.state.should_show_list,
                                            } }
                                        />
                                    }
                                />
                            </div>
                            <DropdownList
                                style={ {
                                    width    : this.input_wrapper_ref ? `${ this.input_wrapper_ref.offsetWidth }px` : '100%',
                                    marginTop: 'calc(4px - 18px)', // 4px is the standard margin. In case of error, the list should overlap the error
                                    // TODO confirm placement of dropdown list and positioning of error
                                    // marginTop: form.errors[field.name] ? 'calc(4px - 18px)' : '4px', // 4px is the standard margin. In case of error, the list should overlap the error
                                } }
                                is_visible={ this.state.should_show_list }
                                list_items={ this.state.filtered_items || this.props.list_items }
                                onItemSelection={ // Autocomplete must use the `text` property and not the `value`, however DropdownList provides access to both
                                    (item) => form.setFieldValue(field.name, (item.text ? item.text : item), true)
                                }
                            />
                        </div>
                    )
                }
            </Field>
        );
    }
}

export default Autocomplete;

Autocomplete.propTypes = {
    list_items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
            PropTypes.shape({
                text : PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            })
        ),
    ]),
};
