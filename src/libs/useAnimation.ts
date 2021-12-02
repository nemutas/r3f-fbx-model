import { button, useControls } from 'leva';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { useAnimations, useFBX } from '@react-three/drei';
import { publicPath } from './utils';

export const useAnimation = (path: string, fileNames: string[]) => {
	const [play, setPlay] = useState(true)

	const all_animations: THREE.AnimationClip[] = []

	fileNames.forEach(name => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { animations } = useFBX(publicPath(path + name + '.fbx'))
		// rename action name
		animations[0].name = name
		all_animations.push(animations[0])
	})

	const { actions, names, ref } = useAnimations(all_animations)
	// console.log(names)

	// controller
	const datas = useControls({
		animations: { options: names },
		start: button(() => setPlay(true)),
		pause: button(() => setPlay(false))
	})

	useEffect(() => {
		actions[datas.animations]?.reset().fadeIn(0.5).play()
		return () => {
			actions[datas.animations]?.fadeOut(0.5)
			setPlay(true)
		}
	}, [actions, datas.animations])

	useEffect(() => {
		const action = actions[datas.animations]
		if (action) action.paused = !play
	}, [actions, datas.animations, play])

	return ref
}
