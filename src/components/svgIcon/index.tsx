import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class SvgIcon extends React.Component<PropTypes> {
	static defaultProps = {
		icon: '',
		iconSize: '2.5em',
		svgClass: 'svg-icon'
	}

	static propTypes = {
		color: PropTypes.string,
		size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		className: PropTypes.string,
		style: PropTypes.object
	}

	get iconSize() {
		let size = this.props.size
		let type = typeof size || 'middle'

		if ('string' === type) {
			if ('small' === size) {
				return '2em'
			} else if ('middle' === size) {
				return '2.67em'
			} else {
				return '3.33em'
			}
		} else if ('number' === type) {
			return size + 'em'
		} else {
			return '2.5em'
		}
	}

	get iconName() {
		return `icon-${this.props.icon}`
	}

	render() {
		const { svgClass, style } = this.props
		return (
			<svg
				className={`${svgClass} ${this.iconName}`}
				style={{ fill: this.props.color, width: this.iconSize, height: this.iconSize, ...style }}
				aria-hidden="true">
				<use xlinkHref={'#' + this.iconName}></use>
			</svg>
		)
	}
}

export default SvgIcon
