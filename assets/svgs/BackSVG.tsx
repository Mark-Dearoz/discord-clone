import React from 'react'
import { StyleSheet } from 'react-native'
import { Svg, G, Path, Defs, Rect, ClipPath } from 'react-native-svg'
import theme from '../../styles/theme'

function BackSVG() {
	return (
		<Svg style={styles.svg} viewBox="0 0 256 256">
			<G clipPath="url(#clip0)">
				<Path
					d="M176.907 256L207.093 225.813L109.28 128L207.093 30.187L176.907 -6.45364e-06L48.907 128L176.907 256Z"
					fill={theme.colors.light}
				/>
			</G>
			<Defs>
				<ClipPath id="clip0">
					<Rect width="256" height="256" fill="white" transform="translate(256 256) rotate(-180)" />
				</ClipPath>
			</Defs>
		</Svg>
	)
}
const styles = StyleSheet.create({
	svg: {
		width: 20,
		height: 20,
	},
})
export default BackSVG
