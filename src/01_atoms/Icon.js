/*
 * Icon Component
 *
 * Help (with example) from: https://github.com/parcel-bundler/parcel/issues/2246
 * SVG `symbol` a Good Choice for Icons by Chris Coyier: https://css-tricks.com/svg-symbol-good-choice-icons
 * Creating an SVG Icon System with React by Sarah Drasner: https://css-tricks.com/creating-svg-icon-system-react
 * Accessible SVGs by Heather Migliorisi https://css-tricks.com/accessible-svgs/
 */

// @todo
// Add default styling using scss!!
// Add most used material design icons to sprite

import React from "react"
import PropTypes from "prop-types"
import IconsSprite from "../08_icons/icon-sprite.svg"

const Icons = props => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                focusable="false"
                width={`${props.size}`}
                height={`${props.size}`}
                className={`icon icon-${props.id}`}
                fill={`${props.fill}`}
            >
                <title>{props.title}</title>
                <use xlinkHref={`${IconsSprite}#${props.id}`} />
            </svg>
        </>
    )
}

Icons.defaultProps = {
    id: "open-in-new",
    size: 24,
    title: "Link will open in new tab",
    fill: "#000013",
}

Icons.propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
}

export default Icons
