'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('classnames');
var chunks = require('lodash.chunk');
var icon = require('@pixiepkg/icon');
var MultiRef = require('react-multi-ref');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var chunks__default = /*#__PURE__*/_interopDefaultLegacy(chunks);
var MultiRef__default = /*#__PURE__*/_interopDefaultLegacy(MultiRef);

var s$k = {"avatar":"avatar-module_avatar__1alsZ","circle":"avatar-module_circle__1nRyS","fullWidth":"avatar-module_fullWidth__1-oD0"};

exports.SizeAvatar = void 0;
(function (SizeAvatar) {
    SizeAvatar["SMALL"] = "sm";
    SizeAvatar["MEDIUM"] = "md";
})(exports.SizeAvatar || (exports.SizeAvatar = {}));

const sizes = {
    [exports.SizeAvatar.SMALL]: { width: 48, height: 48 },
    [exports.SizeAvatar.MEDIUM]: { width: 88, height: 88 }
};
const getClass$6 = (props) => {
    const classes = [s$k.avatar];
    if (props.circle)
        classes.push(s$k.circle);
    if (props.fullWidth)
        classes.push(s$k.fullWidth);
    return classes.join(' ');
};
const Avatar = (props) => {
    var _a, _b;
    const size = props.size
        ? sizes[props.size]
        : {
            width: (_a = props.width) !== null && _a !== void 0 ? _a : sizes[exports.SizeAvatar.MEDIUM].width,
            height: (_b = props.height) !== null && _b !== void 0 ? _b : sizes[exports.SizeAvatar.MEDIUM].height
        };
    return jsxRuntime.jsx("img", { src: props.src, alt: props.alt, width: size.width, height: size.height, className: getClass$6(props) }, void 0);
};

var size = {"small":"size-module_small__2GPk0","medium":"size-module_medium__mDAQ6","large":"size-module_large__2p056","xlarge":"size-module_xlarge__2i7wT"};

const SizeButton = {
    SMALL: {
        root: size.small,
        iconMargin: 4
    },
    MEDIUM: {
        root: size.medium,
        iconMargin: 8
    },
    LARGE: {
        root: size.large,
        iconMargin: 8
    },
    XLARGE: {
        root: size.xlarge,
        iconMargin: 8
    }
};
exports.KindButton = void 0;
(function (KindButton) {
    KindButton[KindButton["PRIMARY"] = 0] = "PRIMARY";
    KindButton[KindButton["BRAND"] = 1] = "BRAND";
    KindButton[KindButton["SECONDARY"] = 2] = "SECONDARY";
    KindButton[KindButton["GHOST"] = 3] = "GHOST";
})(exports.KindButton || (exports.KindButton = {}));

var s$j = {"button":"button-module_button__2jxPE","inline":"button-module_inline__1oO8m","text":"button-module_text__1w9dx","textGrow":"button-module_textGrow__35Fjt","fullWidth":"button-module_fullWidth__2l01R","icon":"button-module_icon__1dp83","rounded":"button-module_rounded__3TFQm"};

var primary$1 = {"root":"primary-module_root__3YAse"};

var brand = {"root":"brand-module_root__1JeGt"};

var secondary = {"root":"secondary-module_root__17LoW"};

var ghost = {"root":"ghost-module_root__NtMkj"};

var s$i = {"px":"div-module_px___1W_8","grow":"div-module_grow__3F4-W"};

const DivPx = ({ size }) => (jsxRuntime.jsx("span", { className: s$i.px, style: { width: size, height: size } }, void 0));
const DivGrow = () => jsxRuntime.jsx("span", { className: s$i.grow }, void 0);

const getClass$5 = (props) => {
    var _a;
    /**
     * Default button styles
     */
    const classes = [s$j.button];
    const btnSize = (_a = props.size) !== null && _a !== void 0 ? _a : SizeButton.MEDIUM;
    classes.push(btnSize.root);
    /**
     * Button kind style
     * Default: primary
     */
    switch (props.kind) {
        case exports.KindButton.SECONDARY:
            classes.push(secondary.root);
            break;
        case exports.KindButton.GHOST:
            classes.push(ghost.root);
            break;
        case exports.KindButton.BRAND:
            classes.push(brand.root);
            break;
        case exports.KindButton.PRIMARY:
        default:
            classes.push(primary$1.root);
            break;
    }
    if (props.inline)
        classes.push(s$j.inline);
    if (props.fullWidth)
        classes.push(s$j.fullWidth);
    if (props.rounded)
        classes.push(s$j.rounded);
    if (props.className)
        classes.push(props.className);
    return classes.join(' ');
};
const ButtonChildren = (props) => {
    var _a;
    const btnSize = (_a = props.size) !== null && _a !== void 0 ? _a : SizeButton.MEDIUM;
    return (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [props.leftIcon && jsxRuntime.jsx("span", Object.assign({ className: s$j.icon }, { children: props.leftIcon }), void 0), props.leftIcon && !props.stickIconAtPrefix && props.children && jsxRuntime.jsx(DivPx, { size: btnSize.iconMargin }, void 0), props.children && (jsxRuntime.jsx("span", Object.assign({ className: classNames__default["default"](s$j.text, props.stickIconAtPrefix && s$j.textGrow) }, { children: props.children }), void 0)), props.rightIcon && !props.stickIconAtPrefix && props.children && jsxRuntime.jsx(DivPx, { size: btnSize.iconMargin }, void 0), props.rightIcon && jsxRuntime.jsx("span", Object.assign({ className: s$j.icon }, { children: props.rightIcon }), void 0), jsxRuntime.jsx("div", { children: "OFJSFOJDOSI" }, void 0)] }, void 0));
};
const Button = (props) => {
    var _a;
    const common = {
        className: getClass$5(props),
        ref: props.forwardedRef,
        children: jsxRuntime.jsx(ButtonChildren, Object.assign({}, props), void 0)
    };
    return (jsxRuntime.jsx("button", Object.assign({}, common, { style: props.style, onClick: props.onClick, onFocus: props.onFocus, onBlur: props.onBlur, disabled: props.disabled, type: (_a = props.type) !== null && _a !== void 0 ? _a : 'button' }), void 0));
};

var s$h = {"wrapper":"calendar-module_wrapper__39BWy","dateSelector":"calendar-module_dateSelector__3WAD1","header":"calendar-module_header__1kDrW","body":"calendar-module_body__1jJiK","cell":"calendar-module_cell__311Z7","badge":"calendar-module_badge__1zQGa","active":"calendar-module_active__3ow8I","disabled":"calendar-module_disabled__Op6MF","break":"calendar-module_break__uo0cN","collapseContainer":"calendar-module_collapseContainer__3mu4x","collapseButton":"calendar-module_collapseButton__3J4pM"};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var s$g = {"label1":"label-module_label1__13mcZ","label2":"label-module_label2__3l3Vz","label3":"label-module_label3__2xVXZ","label4":"label-module_label4__OQjVx","label5":"label-module_label5__395jJ","label6":"label-module_label6__iU0FC"};

var s$f = {"medium":"text-module_medium__3YvzP","semiBold":"text-module_semiBold__3QFdj","bold":"text-module_bold__26FIk","extraBold":"text-module_extraBold__3NESg","italic":"text-module_italic__2--OO","underline":"text-module_underline__E-n_c","ellipsis":"text-module_ellipsis__3mPpX"};

const getClass$4 = (props) => {
    const classes = [];
    if (props.medium)
        classes.push(s$f.medium);
    if (props.semiBold)
        classes.push(s$f.semiBold);
    if (props.bold)
        classes.push(s$f.bold);
    if (props.extraBold)
        classes.push(s$f.extraBold);
    if (props.italic)
        classes.push(s$f.italic);
    if (props.underline)
        classes.push(s$f.underline);
    if (props.ellipsis)
        classes.push(s$f.ellipsis);
    if (props.className)
        classes.push(props.className);
    return classes.join(' ');
};
const getStyles = (props) => {
    const styles = {};
    if (props.color) {
        styles.color = props.color;
    }
    return styles;
};
const textChildren = (props) => {
    if (typeof props.children === 'string' && props.maxLength) {
        const truncatedText = props.children.slice(0, Math.min(props.maxLength, props.children.length));
        // TODO: What if the end of the `truncatedText` is a space?
        return `${truncatedText}...`;
    }
    return props.children;
};
const Text = (props) => {
    const Tag = props.as;
    return (jsxRuntime.jsx(Tag, Object.assign({ style: getStyles(props), className: getClass$4(props) }, { children: textChildren(props) }), void 0));
};

const Label1 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$g.label1, className].join(' ') }, props, { children: props.children }), void 0));
};
const Label2 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$g.label2, className].join(' ') }, props, { children: props.children }), void 0));
};
const Label3 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$g.label3, className].join(' ') }, props, { children: props.children }), void 0));
};
const Label4 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$g.label4, className].join(' ') }, props, { children: props.children }), void 0));
};
/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
const Label5 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$g.label5, className].join(' ') }, props, { children: props.children }), void 0));
};
/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
const Label6 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$g.label6, className].join(' ') }, props, { children: props.children }), void 0));
};

const tests = {
    date: [(date) => 1 <= date && date <= 31, 'invalid date, it should be in range [1, 31]'],
    month: [(month) => 0 <= month && month <= 11, 'invalid month, it should be in range [0, 11]'],
    year: [(year) => year > 0, 'invalid year, it should be greater than zero']
};
const validate = (test, n) => {
    const isValid = test[0](n);
    if (!isValid) {
        throw new Error(test[1]);
    }
};
const validateMonth = (month) => validate(tests.month, month);

const MonthString = [
    'Tháng một',
    'Tháng hai',
    'Tháng ba',
    'Tháng tư',
    'Tháng năm',
    'Tháng sáu',
    'Tháng bảy',
    'Tháng tám',
    'Tháng chín',
    'Tháng mười',
    'Tháng mười một',
    'Tháng mười hai'
];

const toMonthString = (month) => {
    validateMonth(month);
    return MonthString[month];
};
const toDateMonthYear = (date) => {
    return [date.getDate(), date.getMonth(), date.getFullYear()];
};
const isSameDate = (date1, date2) => {
    const [d1, m1, y1] = toDateMonthYear(date1);
    const [d2, m2, y2] = toDateMonthYear(date2);
    return d1 == d2 && m1 == m2 && y1 == y2;
};
// Returns true if date2 is before date1
const isBefore = (date1, date2) => {
    const [d1, m1, y1] = toDateMonthYear(date1);
    const [d2, m2, y2] = toDateMonthYear(date2);
    if (y2 < y1)
        return true;
    if (y2 == y1 && m2 < m1)
        return true;
    return y2 == y1 && m2 == m1 && d2 < d1;
};

const getAllDateOfMonth = (date) => {
    const [, month, year] = toDateMonthYear(date);
    const dates = [];
    const currentDate = new Date(year, month, 1, 0, 0, 0, 0);
    while (currentDate.getMonth() === month) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
};
const includesDate = (dates, date) => {
    return !!dates && dates.some((shouldBeHighlight) => isSameDate(shouldBeHighlight, date));
};
const toCalendarMatrix = (dates) => {
    if (dates.length === 0) {
        return [];
    }
    const calendar = [];
    // We will have slots which is belonged to the previous month
    // Then, the calendar should be offsetted by that slots with undefined
    const firstDateOfMonth = dates[0];
    for (let i = 0; i < firstDateOfMonth.getDay(); i++) {
        calendar.push(undefined);
    }
    // Add dates to calendar matrix
    calendar.push(...dates);
    // Now, the matrix is currently flat, it should be split into chunks, each
    // chunk contains 7 days
    const calendarMatrix = chunks__default["default"](calendar, 7);
    // The calendar matrix is required to be filled fully
    // To that, the last row should be filled
    const nRows = calendarMatrix.length;
    calendarMatrix[nRows - 1].push(...new Array(7 - calendarMatrix[nRows - 1].length).fill(undefined));
    return calendarMatrix;
};

const getClass$3 = (props) => {
    var _a;
    const classes = [s$h.wrapper];
    if ((_a = props.classOverrides) === null || _a === void 0 ? void 0 : _a.container) {
        classes.push(props.classOverrides.container);
    }
    return classes.join(' ');
};
const getCellClass = (props, selectedDate, calendarDate) => {
    var _a;
    const classes = [s$h.cell];
    if ((_a = props.classOverrides) === null || _a === void 0 ? void 0 : _a.calendarCell) {
        classes.push(props.classOverrides.calendarCell);
    }
    if (props.disablePastDates && calendarDate) {
        const today = new Date();
        if (isBefore(today, calendarDate)) {
            classes.push(s$h.disabled);
        }
    }
    if (!!calendarDate && isSameDate(selectedDate, calendarDate)) {
        classes.push(s$h.active);
    }
    return classes.join(' ');
};
const Calendar = (props) => {
    var _a;
    const selectedDate = React.useMemo(() => { var _a; return (_a = props.date) !== null && _a !== void 0 ? _a : new Date(); }, [props.date]);
    const [collapse, setCollapse] = React.useState((_a = props.collapse) !== null && _a !== void 0 ? _a : false);
    // timeController is using for switch calendar between months, years
    const [timeController, setTimeController] = React.useState(new Date(selectedDate));
    const calendar = React.useMemo(() => {
        // TODO: Re-implement this function to only get week dates if collapse
        const dates = getAllDateOfMonth(timeController);
        const calendarMatrix = toCalendarMatrix(dates);
        // TODO: Remove below code when the above feature was implemented
        if (collapse) {
            const selectedDateRowId = calendarMatrix.findIndex((row) => {
                return row.some((date) => date && isSameDate(selectedDate, date));
            });
            // selectDateRowId will be -1 if can not found selected date in the
            // calendar matrix, so that, it should be zero instead.
            return [calendarMatrix[Math.max(selectedDateRowId, 0)]];
        }
        return calendarMatrix;
    }, [timeController, collapse, selectedDate]);
    const onGoToPreviousMonth = () => {
        timeController.setMonth(timeController.getMonth() - 1);
        setTimeController(new Date(timeController));
    };
    const onGoToNextMonth = () => {
        timeController.setMonth(timeController.getMonth() + 1);
        setTimeController(new Date(timeController));
    };
    const onCellClick = (cell) => {
        var _a;
        if (cell) {
            (_a = props.setDate) === null || _a === void 0 ? void 0 : _a.call(props, cell);
        }
    };
    return (jsxRuntime.jsxs("div", Object.assign({ className: getClass$3(props) }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: s$h.dateSelector }, { children: [!collapse && (jsxRuntime.jsx("div", Object.assign({ className: "cursor-pointer", onClick: onGoToPreviousMonth }, { children: jsxRuntime.jsx(icon.ArrowLeftOutline, {}, void 0) }), void 0)), jsxRuntime.jsx("div", Object.assign({ className: "w-2/3 text-center" }, { children: jsxRuntime.jsxs(Label1, Object.assign({ semiBold: true }, { children: [toMonthString(timeController.getMonth()), " ", timeController.getFullYear()] }), void 0) }), void 0), !collapse && (jsxRuntime.jsx("div", Object.assign({ className: "cursor-pointer", onClick: onGoToNextMonth }, { children: jsxRuntime.jsx(icon.ArrowRightOutline, {}, void 0) }), void 0))] }), void 0), jsxRuntime.jsxs("div", Object.assign({ className: s$h.header }, { children: [jsxRuntime.jsx("div", Object.assign({ className: s$h.cell }, { children: "CN" }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$h.cell }, { children: "T2" }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$h.cell }, { children: "T3" }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$h.cell }, { children: "T4" }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$h.cell }, { children: "T5" }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$h.cell }, { children: "T6" }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$h.cell }, { children: "T7" }), void 0)] }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$h.body }, { children: calendar.map((row, rowIdx) => {
                    return (jsxRuntime.jsxs(React__default["default"].Fragment, { children: [row.map((cell, cellIdx) => {
                                return (jsxRuntime.jsxs("div", Object.assign({ className: getCellClass(props, selectedDate, cell), onClick: () => onCellClick(cell) }, { children: [cell && cell.getDate(), cell && includesDate(props.highlightDates, cell) && (jsxRuntime.jsx("span", { className: s$h.badge }, void 0))] }), rowIdx * 10 + cellIdx));
                            }), jsxRuntime.jsx("div", { className: s$h.break }, void 0)] }, rowIdx));
                }) }), void 0), props.showCollapseButton && (jsxRuntime.jsx("div", Object.assign({ className: s$h.collapseContainer }, { children: jsxRuntime.jsxs("div", Object.assign({ className: s$h.collapseButton, onClick: () => setCollapse(!collapse) }, { children: [collapse && jsxRuntime.jsx(icon.ArrowDownOutline, {}, void 0), !collapse && jsxRuntime.jsx(icon.ArrowUpOutline, {}, void 0)] }), void 0) }), void 0))] }), void 0));
};

var s$e = {"container":"card-module_container__1SDiH","title":"card-module_title__nM7eN","body":"card-module_body__1skG8"};

const getClass$2 = (props) => {
    const classes = [s$e.container];
    if (props.className)
        classes.push(props.className);
    return classes.join(' ');
};
const Card = (props) => {
    return (jsxRuntime.jsxs("div", Object.assign({ style: props.style, className: getClass$2(props) }, { children: [(jsxRuntime.jsx("div", Object.assign({ className: s$e.title }, { children: jsxRuntime.jsx(Label1, Object.assign({ semiBold: true }, { children: props.title }), void 0) }), void 0)), jsxRuntime.jsx("div", Object.assign({ className: s$e.body }, { children: props.children }), void 0)] }), void 0));
};

var s$d = {"card":"card-thumbnail-module_card__3vb55","thumbnailWrapper":"card-thumbnail-module_thumbnailWrapper__3ad8j","thumbnail":"card-thumbnail-module_thumbnail__1XuD4","fullHeight":"card-thumbnail-module_fullHeight__13pj0","body":"card-thumbnail-module_body__1IeVr"};

const CardThumbnail = (props) => {
    const containerClasses = [s$d.card];
    if (props.fullHeight)
        containerClasses.push(s$d.fullHeight);
    return (jsxRuntime.jsxs("div", Object.assign({ className: containerClasses.join(' ') }, { children: [jsxRuntime.jsx("div", Object.assign({ className: s$d.thumbnailWrapper, style: { height: props.thumbnailHeight } }, { children: jsxRuntime.jsx("img", { className: s$d.thumbnail, src: props.thumbnail, alt: props.thumbnailAlt }, void 0) }), void 0), jsxRuntime.jsx("div", Object.assign({ className: s$d.body }, { children: props.children }), void 0)] }), void 0));
};

var styles$2 = {"checkbox":"checkbox-module_checkbox__riFEF","disabled":"checkbox-module_disabled__DRbX8","wrapper":"checkbox-module_wrapper__yEast","checked":"checkbox-module_checked__3Quep","iconWrapper":"checkbox-module_iconWrapper__Y4s5Q","checkIcon":"checkbox-module_checkIcon__340sY","label":"checkbox-module_label__3zaA5"};

const InternalCheckbox = (props, ref) => {
    const _size = props.size === 'large' ? 20 : 16;
    return (jsxRuntime.jsxs("label", Object.assign({ className: classNames__default["default"](styles$2.checkbox, {
            [styles$2.disabled]: props.disabled,
            [styles$2.checked]: props.checked
        }) }, { children: [jsxRuntime.jsx("span", Object.assign({ tabIndex: props.tabIndex, className: classNames__default["default"](props.className, styles$2.wrapper), style: Object.assign(Object.assign({}, props.style), { 
                    //   @ts-ignore
                    '--checkbox-size': `${_size}px` }) }, { children: jsxRuntime.jsx("span", Object.assign({ className: styles$2.iconWrapper }, { children: jsxRuntime.jsx(CheckIcon, {}, void 0) }), void 0) }), void 0), jsxRuntime.jsx("span", Object.assign({ className: styles$2.label }, { children: props.children }), void 0), jsxRuntime.jsx("input", { ref: ref, id: props.id, name: props.name, type: "checkbox", disabled: props.disabled, checked: props.checked, onChange: (e) => {
                    var _a, _b;
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    (_b = props.onChecked) === null || _b === void 0 ? void 0 : _b.call(props, e.target.checked);
                }, hidden: true }, void 0)] }), void 0));
};
const Checkbox = React.forwardRef(InternalCheckbox);
const CheckIcon = () => {
    return (jsxRuntime.jsx("svg", Object.assign({ className: styles$2.checkIcon, width: "12", height: "10", viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M8.9375 1.375L3.6875 6.625L1.0625 4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }), void 0));
};

var s$c = {"inputWrapper":"index-module_inputWrapper__3I3PY","input":"index-module_input__26b_8","sm":"index-module_sm__38m91","lg":"index-module_lg__YJJ-d","label":"index-module_label__2SpLP"};

const cx = (...classNames) => classNames.filter(Boolean).join(' ');

const Input = React.forwardRef((_a, ref) => {
    var { sizes = 'md' } = _a, props = __rest(_a, ["sizes"]);
    const _className = cx(s$c.input, props.className, s$c[sizes]);
    return jsxRuntime.jsx("input", Object.assign({ ref: ref, className: _className }, props), void 0);
});
Input.id = 'Input';

var s$b = {"wrapper":"index-module_wrapper__3P7qQ","inputLeftIcon":"index-module_inputLeftIcon__2AzKb"};

function getValidChildren(children) {
    return React__default["default"].Children.toArray(children).filter((child) => React__default["default"].isValidElement(child));
}

const InputGroup = React.forwardRef((props, ref) => {
    const _className = cx(s$b.wrapper, props.className);
    const validChildren = getValidChildren(props.children);
    const groupStyles = {};
    validChildren.forEach((child) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (child.type.id === 'InputLeftIcon') {
            const imageSize = (_h = (_d = (_c = (_b = (_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.props) === null || _c === void 0 ? void 0 : _c.size) !== null && _d !== void 0 ? _d : (_g = (_f = (_e = child === null || child === void 0 ? void 0 : child.props) === null || _e === void 0 ? void 0 : _e.children) === null || _f === void 0 ? void 0 : _f.props) === null || _g === void 0 ? void 0 : _g.width) !== null && _h !== void 0 ? _h : 16;
            groupStyles.style = Object.assign({ paddingLeft: imageSize * 2 }, child.props.style);
        }
        if (child.type.id === 'InputRightIcon') {
            const imageSize = (_r = (_m = (_l = (_k = (_j = child === null || child === void 0 ? void 0 : child.props) === null || _j === void 0 ? void 0 : _j.children) === null || _k === void 0 ? void 0 : _k.props) === null || _l === void 0 ? void 0 : _l.size) !== null && _m !== void 0 ? _m : (_q = (_p = (_o = child === null || child === void 0 ? void 0 : child.props) === null || _o === void 0 ? void 0 : _o.children) === null || _p === void 0 ? void 0 : _p.props) === null || _q === void 0 ? void 0 : _q.width) !== null && _r !== void 0 ? _r : 16;
            groupStyles.style = Object.assign({ paddingRight: imageSize * 2 }, child.props.style);
        }
    });
    const clones = validChildren.map((child) => {
        return child.type.id !== 'Input'
            ? React.cloneElement(child, child.props)
            : React.cloneElement(child, Object.assign(Object.assign({}, groupStyles), child.props));
    });
    console.log(clones);
    return (jsxRuntime.jsx("div", Object.assign({ className: _className, ref: ref }, { children: clones }), void 0));
});
InputGroup.id = 'InputGroup';

var s$a = {"wrapper":"index-module_wrapper__2F1UF","insetStart":"index-module_insetStart__2V-gV","insetEnd":"index-module_insetEnd__f32Lf","centerItem":"index-module_centerItem__2sNZ_","absolute":"index-module_absolute__3iDqZ","cursorPointer":"index-module_cursorPointer__1TOYf"};

const InputElement = React.forwardRef((props, ref) => {
    const { placement = 'left', className } = props, rest = __rest(props, ["placement", "className"]);
    const attr = placement === 'left' ? 'insetStart' : 'insetEnd';
    const _className = cx(s$a.absolute, s$a.centerItem, s$a[attr], className, (props === null || props === void 0 ? void 0 : props.onClick) ? s$a.cursorPointer : '');
    return jsxRuntime.jsx("div", Object.assign({ className: _className, ref: ref }, rest), void 0);
});
InputElement.id = 'InputElement';
const InputLeftIcon = React.forwardRef((props, ref) => {
    return jsxRuntime.jsx(InputElement, Object.assign({ ref: ref, placement: "left" }, props), void 0);
});
InputLeftIcon.id = 'InputLeftIcon';
const InputRightIcon = React.forwardRef((props, ref) => {
    return jsxRuntime.jsx(InputElement, Object.assign({ ref: ref, placement: "right" }, props), void 0);
});
InputRightIcon.id = 'InputRightIcon';

var s$9 = {"modal":"modal-module_modal__1NV_V","body":"modal-module_body__8ZrO2"};

const Modal = (props) => {
    const modalRef = React.useRef(null);
    return (jsxRuntime.jsx(React__default["default"].Fragment, { children: props.show && (jsxRuntime.jsx("div", Object.assign({ ref: modalRef, className: s$9.modal, onClick: (event) => {
                var _a;
                if (event.target === modalRef.current) {
                    (_a = props.setShow) === null || _a === void 0 ? void 0 : _a.call(props, !props.show);
                }
            } }, { children: jsxRuntime.jsx("div", Object.assign({ className: s$9.body }, { children: props.children }), void 0) }), void 0)) }, void 0));
};

var s$8 = {"notification":"notification-module_notification__9kked","default":"notification-module_default__1MrYa","positive":"notification-module_positive__p62K3","warning":"notification-module_warning__1_9sg","negative":"notification-module_negative__2G96_"};

exports.KindNotification = void 0;
(function (KindNotification) {
    KindNotification[KindNotification["POSITIVE"] = 0] = "POSITIVE";
    KindNotification[KindNotification["WARNING"] = 1] = "WARNING";
    KindNotification[KindNotification["NEGATIVE"] = 2] = "NEGATIVE";
    KindNotification[KindNotification["DEFAULT"] = 3] = "DEFAULT";
})(exports.KindNotification || (exports.KindNotification = {}));

const getClass$1 = (props) => {
    const classes = [s$8.notification];
    switch (props.kind) {
        case exports.KindNotification.DEFAULT:
        default:
            classes.push(s$8.default);
            break;
        case exports.KindNotification.POSITIVE:
            classes.push(s$8.positive);
            break;
        case exports.KindNotification.WARNING:
            classes.push(s$8.warning);
            break;
        case exports.KindNotification.NEGATIVE:
            classes.push(s$8.negative);
            break;
    }
    if (props.className)
        classes.push(props.className);
    return classes.join(' ');
};
const Notification = (props) => {
    return jsxRuntime.jsx("div", { className: getClass$1(props), children: props.children }, void 0);
};

var s$7 = {"pinCodeContainer":"pincode-module_pinCodeContainer__2BFPM","pinCodeWrapper":"pincode-module_pinCodeWrapper__y1Xqv","input":"pincode-module_input__29kBJ","inputMini":"pincode-module_inputMini__3suYl","inputCompact":"pincode-module_inputCompact__26NjW","inputDefault":"pincode-module_inputDefault__3OOQA","inputError":"pincode-module_inputError__2h24t","errorMessage":"pincode-module_errorMessage__3VmQp","errorHidden":"pincode-module_errorHidden__1v7jC"};

// enum pin code size is linked to the class style in styles/pincode.module.css
exports.SizePinCode = void 0;
(function (SizePinCode) {
    SizePinCode["MINI"] = "inputMini";
    SizePinCode["COMPACT"] = "inputCompact";
    SizePinCode["DEFAULT"] = "inputDefault";
    SizePinCode["LARGE"] = "inputLarge";
})(exports.SizePinCode || (exports.SizePinCode = {}));
exports.KeyCodeEnum = void 0;
(function (KeyCodeEnum) {
    KeyCodeEnum["BACKSPACE"] = "Backspace";
    KeyCodeEnum["PERIOD"] = "Period";
    KeyCodeEnum["MINUS"] = "Minus";
    KeyCodeEnum["DIGIT_INDICATOR"] = "Digit";
})(exports.KeyCodeEnum || (exports.KeyCodeEnum = {}));

const PinCode = (props) => {
    const { values, setValues, size, error, errorMessage, autofocus } = props;
    const _inputRefs = new MultiRef__default["default"]();
    const isNumberKeyCode = (keyCode) => {
        return keyCode.includes(exports.KeyCodeEnum.DIGIT_INDICATOR); // ex: 1='Digit1' and KeyCodeEnum.DIGIT='Digit'
    };
    const isNumberString = (str) => {
        return str.match(/^-?\d+$/);
    };
    const setInputValue = (value, inputIndex) => {
        setValues(values.map((v, i) => {
            if (i === inputIndex) {
                return value;
            }
            return v;
        }));
    };
    const handleOnChange = (text, inputIndex) => {
        var _a, _b, _c;
        if (text.length <= 2 && isNumberString(text)) {
            // new number or replace number
            if (inputIndex + 1 < values.length) {
                (_a = _inputRefs.map.get(inputIndex + 1)) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
        else if (text.length === values.length && values[inputIndex] === '') {
            // paste same length empty input
            setValues(text.split(''));
            (_b = _inputRefs.map.get(values.length - 1)) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else if (text.length === values.length + 1 && values[inputIndex] !== '') {
            // paste same length but input not empty
            setValues(text.slice(0, values.length).split(''));
            (_c = _inputRefs.map.get(values.length - 1)) === null || _c === void 0 ? void 0 : _c.focus();
        }
    };
    const handleKeyDown = (e, inputIndex) => {
        var _a;
        const keyCode = e.code;
        if (keyCode === exports.KeyCodeEnum.BACKSPACE) {
            if (values[inputIndex] === '') {
                setInputValue('', inputIndex - 1);
                if (inputIndex - 1 >= 0) {
                    (_a = _inputRefs.map.get(inputIndex - 1)) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
            else {
                setInputValue('', inputIndex);
            }
        }
        else if (isNumberKeyCode(keyCode)) {
            // if hit number then update the input
            const digitChar = keyCode[keyCode.length - 1];
            setInputValue(digitChar, inputIndex);
        }
    };
    const handlePaste = (inputIndex) => {
        var _a;
        // move cursor to the start of the input for onChange paste
        (_a = _inputRefs.map.get(inputIndex)) === null || _a === void 0 ? void 0 : _a.setSelectionRange(0, 0);
    };
    React.useEffect(() => {
        var _a, _b;
        // parse to correct init values
        const newValues = values.map((v) => (isNumberString(v) && v.length === 1 ? v : ''));
        setValues(newValues);
        // auto focus
        if (autofocus && newValues.length > 0) {
            let didFocus = false;
            for (let i = 0; i < newValues.length; i++) {
                if (newValues[i] === '') {
                    (_a = _inputRefs.map.get(i)) === null || _a === void 0 ? void 0 : _a.focus();
                    didFocus = true;
                    break;
                }
            }
            if (!didFocus) {
                // focus end if all inputs filled
                (_b = _inputRefs.map.get(newValues.length - 1)) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
        // just want to run once when comp mounted, so disable exhaustive-deps
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (jsxRuntime.jsx("div", Object.assign({ className: s$7.pinCodeContainer }, { children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", Object.assign({ className: s$7.pinCodeWrapper }, { children: values.map((value, i) => {
                        return (jsxRuntime.jsx("input", { value: value, onChange: (e) => handleOnChange(e.currentTarget.value, i), className: classNames__default["default"](s$7.input, error && s$7.inputError, s$7[size || exports.SizePinCode.DEFAULT]), type: "text", ref: _inputRefs.ref(i), onKeyDown: (e) => handleKeyDown(e, i), inputMode: "numeric", autoComplete: "one-time-code", onPaste: () => handlePaste(i), required: true }, `pin-code-${i}`));
                    }) }), void 0), jsxRuntime.jsx("p", Object.assign({ className: classNames__default["default"](s$7.errorMessage, !error && s$7.errorHidden) }, { children: errorMessage }), void 0)] }, void 0) }), void 0));
};

var s$6 = {"container":"styles-module_container__xgVHI","input":"styles-module_input__bVpd5","label":"styles-module_label__3WPnN","dotIcon":"styles-module_dotIcon__mVuaW","checkboxDot":"styles-module_checkboxDot__2CG-M"};

const DotIcon = () => {
    return (jsxRuntime.jsx("svg", Object.assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 8 16", className: s$6.dotIcon, height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { fillRule: "evenodd", d: "M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" }, void 0) }), void 0));
};
const Radio = (props) => {
    return (jsxRuntime.jsxs("label", Object.assign({ className: s$6.container }, { children: [jsxRuntime.jsx("input", { type: "radio", className: s$6.input, name: props.name, value: props.value, 
                // Controlled
                checked: props.checked, onChange: (event) => { var _a; return (_a = props.setValue) === null || _a === void 0 ? void 0 : _a.call(props, event.target.value); }, disabled: props.disabled, 
                // Uncontrolled
                defaultChecked: props.defaultChecked, ref: props.forwardedRef }, void 0), jsxRuntime.jsx("span", Object.assign({ className: s$6.checkboxDot }, { children: jsxRuntime.jsx(DotIcon, {}, void 0) }), void 0), jsxRuntime.jsx(Label3, Object.assign({ medium: true, className: s$6.label }, { children: props.children }), void 0)] }), void 0));
};

var s$5 = {"separator":"separator-module_separator__1JuKa","defaultMargin":"separator-module_defaultMargin__29tUk"};

const Separator = (props) => {
    const classNames = [s$5.separator, s$5.defaultMargin];
    if (props.className)
        classNames.push(props.className);
    return jsxRuntime.jsx("div", Object.assign({ className: classNames.join(' ') }, { children: props.label }), void 0);
};

exports.KindTag = void 0;
(function (KindTag) {
    KindTag[KindTag["PRIMARY"] = 0] = "PRIMARY";
    KindTag[KindTag["WARNING"] = 1] = "WARNING";
})(exports.KindTag || (exports.KindTag = {}));

var s$4 = {"tag":"tag-module_tag__3fYqL"};

var primary = {"root":"primary-module_root__3whtW"};

var warning = {"root":"warning-module_root__1HsHo"};

const getClass = (props) => {
    const classes = [s$4.tag];
    /**
     * Tag kind style
     * Default: primary
     */
    switch (props.kind) {
        case exports.KindTag.WARNING:
            classes.push(warning.root);
            break;
        case exports.KindTag.PRIMARY:
        default:
            classes.push(primary.root);
            break;
    }
    if (props.className)
        classes.push(props.className);
    return classes.join(' ');
};
const Tag = (props) => {
    const tagChildren = typeof props.children === 'string' ? jsxRuntime.jsx(Label4, { medium: true, children: props.children }, void 0) : props.children;
    return jsxRuntime.jsx("span", { style: props.style, className: getClass(props), children: tagChildren }, void 0);
};

var s$3 = {"textareaWrapper":"index-module_textareaWrapper__30k32","textarea":"index-module_textarea__6k8_M","invalid":"index-module_invalid__2FZd8","caption":"index-module_caption__1Xjp0","readonly":"index-module_readonly__1exbK","disabled":"index-module_disabled__1B0mp","label":"index-module_label__3FSrc","requiredLabel":"index-module_requiredLabel__3x0z1"};

const Textarea = React.forwardRef((props, ref) => {
    return (jsxRuntime.jsxs("div", Object.assign({ ref: ref, style: props.style, className: classNames__default["default"](s$3.textareaWrapper, props.disabled && s$3.disabled, props.readonly && s$3.readonly, props.invalid && s$3.invalid) }, { children: [jsxRuntime.jsxs("div", Object.assign({ style: { display: 'flex' } }, { children: [jsxRuntime.jsx("div", Object.assign({ className: s$3.label }, { children: props.label }), void 0), props.required && props.label && jsxRuntime.jsx("div", Object.assign({ className: s$3.requiredLabel }, { children: "*" }), void 0)] }), void 0), jsxRuntime.jsx("textarea", { 
                // Value
                defaultValue: props.defaultValue, value: props.value, onChange: (event) => {
                    var _a;
                    (_a = props.setValue) === null || _a === void 0 ? void 0 : _a.call(props, event.currentTarget.value);
                }, 
                // Properties
                id: props.id, className: [s$3.textarea, props.className].join(' '), readOnly: props.readOnly, disabled: props.disabled, placeholder: props.placeholder, autoFocus: props.autoFocus, "aria-label": props['aria-label'], "aria-labelledby": props['aria-labelledby'], maxLength: props.maxLength, minLength: props.minLength, required: props.required, autoComplete: props.autoComplete, cols: props.cols, rows: props.rows, form: props.form, name: props.name, spellCheck: props.spellCheck, wrap: props.wrap }, void 0), jsxRuntime.jsx("div", Object.assign({ className: s$3.caption }, { children: props.caption }), void 0)] }), void 0));
});

var styles$1 = {"toggle":"toggle-module_toggle__1yX7l","disabled":"toggle-module_disabled__1B2DR","wrapper":"toggle-module_wrapper__1z64e","checked":"toggle-module_checked__35_YE","label":"toggle-module_label__3d3S0"};

const InternalToggle = (props, ref) => {
    const _height = props.size === 'large' ? 24 : 16;
    const _width = props.size === 'large' ? 42 : 28;
    const _side = props.size === 'large' ? 20 : 12;
    return (jsxRuntime.jsxs("label", Object.assign({ className: classNames__default["default"](styles$1.toggle, {
            [styles$1.checked]: props.checked,
            [styles$1.disabled]: props.disabled
        }) }, { children: [jsxRuntime.jsx("span", { style: Object.assign(Object.assign({}, props.style), { 
                    // @ts-ignore
                    '--toggle-height': `${_height}px`, '--toggle-width': `${_width}px`, '--toggle-size': `${_side}px` }), className: classNames__default["default"](styles$1.wrapper, props.className) }, void 0), jsxRuntime.jsx("span", Object.assign({ className: styles$1.label }, { children: props.children }), void 0), jsxRuntime.jsx("input", { ref: ref, id: props.id, disabled: props.disabled, name: props.name, type: "checkbox", checked: props.checked, onChange: (e) => {
                    var _a, _b;
                    (_a = props.onChecked) === null || _a === void 0 ? void 0 : _a.call(props, e.target.checked);
                    (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, e);
                } }, void 0)] }), void 0));
};
const Toggle = React__default["default"].forwardRef(InternalToggle);

var styles = {"input":"TextBox-module_input__1BMQU","disabled":"TextBox-module_disabled__15NZ-","invalid":"TextBox-module_invalid__323Ck","small":"TextBox-module_small__2yM-7","medium":"TextBox-module_medium__EzPN0","large":"TextBox-module_large__1eHl6","addon":"TextBox-module_addon__2D4gk","addonBefore":"TextBox-module_addonBefore__3DuWr","addonAfter":"TextBox-module_addonAfter__eFwI3","iconBefore":"TextBox-module_iconBefore__1Q1ve","iconAfter":"TextBox-module_iconAfter__18W4H","pointer":"TextBox-module_pointer__3Oe1F"};

const InternalTextBox = (_a, ref) => {
    var { size = 'medium', invalid, iconLeft, iconRight, addonLeft, addonRight, disabled, onClickLeftIcon, onClickRightIcon, onClickLeftAddon, onClickRightAddon } = _a, props = __rest(_a, ["size", "invalid", "iconLeft", "iconRight", "addonLeft", "addonRight", "disabled", "onClickLeftIcon", "onClickRightIcon", "onClickLeftAddon", "onClickRightAddon"]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: classNames__default["default"](styles.input, styles[size], {
            [styles.invalid]: invalid,
            [styles.disabled]: disabled
        }) }, { children: [addonLeft && (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"](styles.addonBefore, styles.addon, onClickLeftAddon && styles.pointer), onClick: onClickLeftAddon }, { children: addonLeft }), void 0)), iconLeft && (jsxRuntime.jsx("div", Object.assign({ className: [styles.iconBefore, onClickLeftIcon && styles.pointer].join(' '), onClick: onClickLeftIcon }, { children: iconLeft }), void 0)), jsxRuntime.jsx("input", Object.assign({ type: "text", ref: ref }, props, { disabled: disabled }), void 0), iconRight && (jsxRuntime.jsx("div", Object.assign({ className: [styles.iconAfter, onClickRightIcon && styles.pointer].join(' '), onClick: onClickRightIcon }, { children: iconRight }), void 0)), addonRight && (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"](styles.addonAfter, styles.addon), onClick: onClickRightAddon }, { children: addonRight }), void 0))] }), void 0));
};
const Textbox = React.forwardRef(InternalTextBox);

var s$2 = {"body1":"body-module_body1__3NKS3","body2":"body-module_body2__1C8x_","body3":"body-module_body3__wV1bu","body4":"body-module_body4__3c1VH","body5":"body-module_body5__2SpBD","body6":"body-module_body6__1HzSI"};

const Body1 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$2.body1, className].join(' ') }, props, { children: props.children }), void 0));
};
const Body2 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$2.body2, className].join(' ') }, props, { children: props.children }), void 0));
};
const Body3 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$2.body3, className].join(' ') }, props, { children: props.children }), void 0));
};
const Body4 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$2.body4, className].join(' ') }, props, { children: props.children }), void 0));
};
/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
const Body5 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$2.body5, className].join(' ') }, props, { children: props.children }), void 0));
};
/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
const Body6 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$2.body6, className].join(' ') }, props, { children: props.children }), void 0));
};

var s$1 = {"display1":"display-module_display1__wQAtS","display2":"display-module_display2__3hVdb"};

const Display1 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$1.display1, className].join(' ') }, props, { children: props.children }), void 0));
};
const Display2 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'p', className: [s$1.display2, className].join(' ') }, props, { children: props.children }), void 0));
};

var s = {"heading1":"heading-module_heading1__2khdf","heading2":"heading-module_heading2__2bosV","heading3":"heading-module_heading3__1sQJD","heading4":"heading-module_heading4__2S4ZA","heading5":"heading-module_heading5__1Ht09","heading6":"heading-module_heading6__6AOSB"};

const H1 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'h1', className: [s.heading1, className].join(' ') }, props, { children: props.children }), void 0));
};
const H2 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'h2', className: [s.heading2, className].join(' ') }, props, { children: props.children }), void 0));
};
const H3 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'h3', className: [s.heading3, className].join(' ') }, props, { children: props.children }), void 0));
};
const H4 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'h4', className: [s.heading4, className].join(' ') }, props, { children: props.children }), void 0));
};
const H5 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'h5', className: [s.heading5, className].join(' ') }, props, { children: props.children }), void 0));
};
const H6 = (_a) => {
    var { className, as } = _a, props = __rest(_a, ["className", "as"]);
    return (jsxRuntime.jsx(Text, Object.assign({ as: as || 'h6', className: [s.heading6, className].join(' ') }, props, { children: props.children }), void 0));
};

exports.Avatar = Avatar;
exports.Body1 = Body1;
exports.Body2 = Body2;
exports.Body3 = Body3;
exports.Body4 = Body4;
exports.Body5 = Body5;
exports.Body6 = Body6;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Card = Card;
exports.CardThumbnail = CardThumbnail;
exports.Checkbox = Checkbox;
exports.Display1 = Display1;
exports.Display2 = Display2;
exports.DivGrow = DivGrow;
exports.DivPx = DivPx;
exports.DotIcon = DotIcon;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Input = Input;
exports.InputElement = InputElement;
exports.InputGroup = InputGroup;
exports.InputLeftIcon = InputLeftIcon;
exports.InputRightIcon = InputRightIcon;
exports.Label1 = Label1;
exports.Label2 = Label2;
exports.Label3 = Label3;
exports.Label4 = Label4;
exports.Label5 = Label5;
exports.Label6 = Label6;
exports.Modal = Modal;
exports.Notification = Notification;
exports.PinCode = PinCode;
exports.Radio = Radio;
exports.Separator = Separator;
exports.SizeButton = SizeButton;
exports.Tag = Tag;
exports.Text = Text;
exports.Textarea = Textarea;
exports.Textbox = Textbox;
exports.Toggle = Toggle;
